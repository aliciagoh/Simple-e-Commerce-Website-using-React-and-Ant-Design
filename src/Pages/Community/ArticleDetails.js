// ArticleDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import dummyArticles from './dummyArticles';
import './ArticleDetails.css';

const ArticleDetails = () => {
  const { articleId } = useParams();
  const article = dummyArticles.find(article => article.id.toString() === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-details-container">
      <Card title={<h1 style={{ fontSize: '24px' }}>{article.title}</h1>} style={{ width: '100%' }}>
        <img
          alt={article.title}
          src={article.imageUrl}
          style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
        />
        <p>{article.content}</p>
        {/* Add more details or actions as needed */}
      </Card>
    </div>
  );
};

export default ArticleDetails;
