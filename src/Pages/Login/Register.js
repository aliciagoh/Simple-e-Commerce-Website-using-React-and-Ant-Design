import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async (values) => {
    setLoading(true);
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    try {
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(values.phoneNumber, recaptchaVerifier);
      form.setFieldsValue({ verificationId: confirmationResult.verificationId });
      message.success('Verification code sent to your phone.');
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  const handleSignInWithCode = async (values) => {
    setLoading(true);
    const credential = firebase.auth.PhoneAuthProvider.credential(values.verificationId, values.code);
    try {
      await firebase.auth().signInWithCredential(credential);
      navigate('/');
    } catch (error) {
      message.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', marginTop: '50px',  }}>
      <h2>Register Here</h2>
      <Form
        form={form}
        onFinish={handleSignInWithCode}
        labelCol={{ span: 10 }} // Adjust the label column width
        wrapperCol={{ span: 14 }} // Adjust the wrapper column width
      >
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: 'Please enter your phone number!' }]}
          labelAlign="left"
          style={{ marginBottom: '16px' }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="verificationCode"
          label="Verification Code"
          rules={[{ required: true, message: 'Please enter your verification code!' }]}
          labelAlign="left"
          style={{ marginBottom: '16px' }}
        >
          <Input />
        </Form.Item>
        <div id="recaptcha-container"></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit" loading={loading}>Sign Up</Button>
        </div>
      </Form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
