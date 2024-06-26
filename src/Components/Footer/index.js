import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        FAQ
      </Typography.Link>
      <Typography.Link href="tel:+123456789" target={"_blank"}>
        Contact Us
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
