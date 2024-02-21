// EventList.js
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import events from './eventsData';

const EventList = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="left">
        {events.map((event, index) => (
          <Col key={event.id} xs={24} sm={12} md={8} lg={8} xl={6} style={{ marginBottom: '16px' }}>
            <Card
              title={event.name}
              style={{ width: '100%', height: '100%' }}
            >
              <img
                alt={event.name}
                src={event.imageUrl}
                style={{ width: '100%', height: 150, objectFit: 'cover' }}
              />
              <p>Date and Time: {event.dateTime}</p>
              <p>Description: {event.description}</p>
              <Link to={`/browse-events/event/${event.id}`}>
                <Button type="primary">
                  View Event
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventList;
