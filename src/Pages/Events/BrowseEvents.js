// Events.js
import React, { useState } from 'react';
import EventList from './EventData/EventList.js';
import EventDetails from './EventData/EventDetails.js';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      {selectedEvent ? (
        <EventDetails event={selectedEvent} onBackClick={handleBackToEvents} />
      ) : (
        <EventList onViewEventClick={handleViewEventClick} />
      )}
    </div>
  );
};

export default Events;
