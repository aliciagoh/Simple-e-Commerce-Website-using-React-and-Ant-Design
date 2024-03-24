import { useState } from "react";
import { Table, Typography, Button, Modal } from "antd";

function WeeklyGatherings() {
  // Sample data for weekly gatherings
  const [gatheringsData, setGatheringsData] = useState([
    {
      id: 1,
      location: "Community Center",
      timing: "Every Monday, 6:00 PM",
      description: "Weekly Community Meeting",
    },
    {
      id: 2,
      location: "Park",
      timing: "Every Wednesday, 4:00 PM",
      description: "Outdoor Yoga Session",
    },
    {
      id: 3,
      location: "Local Library",
      timing: "Every Tuesday, 10:00 AM",
      description: "Storytelling Hour for Families",
    },
    {
      id: 4,
      location: "Senior Center",
      timing: "Every Thursday, 2:00 PM",
      description: "Social Gathering for Seniors",
    },
    {
      id: 5,
      location: "Botanical Garden",
      timing: "Every Saturday, 11:00 AM",
      description: "Guided Nature Walk for All Ages",
    },
    {
      id: 6,
      location: "Cultural Center",
      timing: "Every Sunday, 3:00 PM",
      description: "Family Arts and Crafts Workshop",
    },
    {
      id: 7,
      location: "Local Park",
      timing: "Every Friday, 6:30 PM",
      description: "Family Movie Night Under the Stars",
    },
    {
      id: 8,
      location: "Community Hall",
      timing: "Every Saturday, 6:00 PM",
      description: "Board Game Night for Families",
    },
    {
      id: 9,
      location: "Community Pool",
      timing: "Every Sunday, 10:00 AM",
      description: "Water Aerobics Class for Seniors",
    },
    {
      id: 10,
      location: "Local Church",
      timing: "Every Wednesday, 7:00 PM",
      description: "Bible Study Group for All Ages",
    },
  ]);

  // Define columns for the table
  const columns = [
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Timing",
      dataIndex: "timing",
      key: "timing",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Button onClick={() => handleBooking(record)}>Book</Button>
        ),
      },
  ];

  // Function to handle booking
  const handleBooking = (record) => {
    // Implement your booking logic here, such as opening a modal for booking
    Modal.info({
      title: "Booking Confirmation",
      content: (
        <div>
          <p>You have successfully booked:</p>
          <p>
            <strong>Location:</strong> {record.location}
          </p>
          <p>
            <strong>Timing:</strong> {record.timing}
          </p>
          <p>
            <strong>Description:</strong> {record.description}
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%" }}>
        <Typography.Title level={2}>Weekly Gatherings</Typography.Title>
        <Table
          dataSource={gatheringsData}
          columns={columns}
          pagination={{
            pageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20"],
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
          }}
        />
      </div>
    </div>
  );
}

export default WeeklyGatherings;
