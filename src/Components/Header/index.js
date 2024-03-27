import { HomeFilled } from "@ant-design/icons";
import {
  Menu,
} from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/SilverTix Logo.png"; // Import the logo image
import "./header.css";


function AppHeader() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    if (item.key === "mission-statement") {
      navigate('/mission-statement');
    } else {
      navigate(`/${item.key}`);
    }
  };
  return (
    <div className="appHeader">
      <img src={logo} alt="SilverTix Logo" className="logo" />
      <Menu
        className="appMenu"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: "About Us",
            key: "about",
            children: [
              {
                label: "Our Mission",
                key: "mission-statement",
              },
              {
                label: "What We Offer",
                key: "what-we-offer",
              },
            ],
          },
          {
            label: "Events",
            key: "events",
            children: [
              {
                label: "Browse all events",
                key: "browse-events",
              },
              {
                label: "Book an event",
                key: "book-events",
              },
              {
                label: "View my events",
                key: "view-events",
              },
            ],
          },
          {
            label: "Community",
            key: "community",
            children: [
              {
                label: "Latest Happenings",
                key: "latest-happenings",
              },
              {
                label: "SilverThreads",
                key: "silver-threads",
              },
              {
                label: "Weekly Gatherings",
                key: "weekly-gatherings",
              },
            ],
          },

          {
            label: "Login",
            key: "login",
          },
        ]}
      />
    </div>
  );
}

export default AppHeader;