import React from 'react';
import { Card, Button } from 'antd';

const EventDetails = ({ event, onBookClick }) => {
  return (
    <Card title={event.name} style={{ width: 400, margin: '16px' }}>
      <p>Date and Time: {event.dateTime}</p>
      <p>Description: {event.description}</p>
      <p>Detailed Description: {event.detailedDescription}</p>
      <Button type="primary" onClick={() => onBookClick(event.id)}>
        Book Event
      </Button>
    </Card>
  );
};

export default EventDetails;


