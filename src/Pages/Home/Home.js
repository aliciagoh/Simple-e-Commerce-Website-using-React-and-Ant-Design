import React from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography.Title level={1}>Welcome to Silver Tix</Typography.Title>
      <Typography.Paragraph>
        Silver Tix is your one-stop destination for discovering and booking
        exciting events and activities in your community.
      </Typography.Paragraph>
      <div style={{ marginTop: "50px" }}>
        <Link to="/browse-events">
          <Button type="primary" size="large">
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
