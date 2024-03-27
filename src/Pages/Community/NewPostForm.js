import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NewPostForm = ({ addPost }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    addPost(values);

    form.resetFields();

    navigate('/silver-threads');
  };

  return (
    <Form form={form} onFinish={handleSubmit} style={{ maxWidth: '600px' }}>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please enter the category' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewPostForm;