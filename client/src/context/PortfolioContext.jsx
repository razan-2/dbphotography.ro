import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const data = await getEvents();
  //     console.log(data)
  //     setEvents(data);
  //   };
  //   fetchEvents();
  // }, []);

  // const refreshEvents = async () => {
  //   const data = await getEvents();
  //   setEvents(data);
  // };

  return (
    <PortfolioContext.Provider value={{ events, setEvents }}>
      {children}
    </PortfolioContext.Provider>
  );
};
