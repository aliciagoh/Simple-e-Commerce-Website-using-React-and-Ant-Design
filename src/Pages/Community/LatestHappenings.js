// LatestHappenings.js
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import dummyArticles from './dummyArticles';

const LatestHappenings = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={3} style={{ marginBottom: '20px' }}>
        Read about our seniors' experiences with SilverTix!
      </Typography.Title>

      <Row gutter={16}>
        {dummyArticles.map(article => (
          <Col key={article.id} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
              hoverable
              style={{ marginBottom: '16px' }}
              cover={<img alt={article.title} src={article.imageUrl} />}
            >
              <Card.Meta
                title={article.title}
                description={<TruncateText text={article.content} maxLines={2} />}
              />
              <Link to={`/latest-happenings/${article.id}`}>
                Read More
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const TruncateText = ({ text, maxLines }) => {
  const style = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: maxLines,
    maxHeight: '3em', // Adjust this value based on your font size and line height
  };

  return <div style={style}>{text}</div>;
};

export default LatestHappenings;
