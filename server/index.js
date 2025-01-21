const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Storage configuration for uploaded pictures
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const eventFolder = `uploads/${req.body.eventName}`;
        if (!fs.existsSync(eventFolder)) {
            fs.mkdirSync(eventFolder, { recursive: true });
        }
        cb(null, eventFolder);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Dummy data for events
let events = [];

const loadEvents = () => {
    const eventFolders = fs.readdirSync('uploads', { withFileTypes: true })
        .filter(dir => dir.isDirectory()) // Get only directories (event folders)
        .map(dir => dir.name);

    events = eventFolders.map(eventName => {
        const eventFolderPath = path.join('uploads', eventName);
        const pictures = fs.readdirSync(eventFolderPath)
            .filter(file => file.endsWith('.jpg'))  // Filter only .jpg files
            .map(file => `/uploads/${eventName}/${file}`);  // Return relative paths for frontend
        
        return { name: eventName, pictures };
    });
};

// Load events on server start
loadEvents();

app.get('/api/events', (req, res) => {
    console.log('Returning events:', events);  // Log the events array
    res.json(events);  // Send the events as JSON
});

app.post('/api/events', upload.array('pictures', 10), (req, res) => {
    const { eventName, eventDate } = req.body;
    const eventFolder = `uploads/${eventName}`;
    const pictures = fs.readdirSync(eventFolder).map(file => `/uploads/${eventName}/${file}`);

    const newEvent = {
        name: eventName,
        date: eventDate,
        pictures,
    };

    events.push(newEvent);
    res.status(201).json(newEvent);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
