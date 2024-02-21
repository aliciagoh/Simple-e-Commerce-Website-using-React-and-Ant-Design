// EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'antd';

const EventDetails = ({ event, onBookClick }) => {
  const { eventId } = useParams();
  return (
    <Card title={`Event ${eventId}`} style={{ width: 400, margin: '16px' }}>
      <p>Date and Time: {event.dateTime}</p>
      <p>Description: {event.description}</p>
      <p>Detailed Description: {event.detailedDescription}</p>
      <Button type="primary" onClick={() => onBookClick(eventId)}>
        Book Event
      </Button>
    </Card>
  );
};

export default EventDetails;
