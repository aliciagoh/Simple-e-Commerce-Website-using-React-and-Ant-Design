import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import { Link, useNavigate } from 'react-router-dom';
import { IsolationForest } from 'isolation-forest';

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Monitor user activity at login page
    const handleUserLogin = () => {
      console.log('User logged in');
    };
    // Attach event listener for user login
    document.addEventListener('login', handleUserLogin);
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('login', handleUserLogin);
    };
  }, []);


  const validateMessages = {
    required: '${label} is required!',
    types: {
      phone: '${label} is not a valid phone number!',
      eightDigits: '${label} must be an 8-digit number starting with either 8 or 9!',
    },
  };

  const handleSendCode = async (values) => {
    setLoading(true);
    try {
      // Validation: Check that input is an 8 digit number starting with 8 or 9 
      if (!/^[89]\d{7}$/.test(values.phoneNumber)) {
        message.error('Phone number must be an 8-digit number starting with either 8 or 9!');
        return;
      }
      
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(values.phoneNumber, recaptchaVerifier);
      form.setFieldsValue({ verificationId: confirmationResult.verificationId });
      message.success('Verification code sent to your phone.');

      // Dispatch login event
      document.dispatchEvent(new Event('login'));

      // Simulate anomaly detection
      const data = [[82323233], [86541234], [86784932], [93820321]]; // Sample data 
      const forest = new IsolationForest();
      forest.fit(data);
      const anomalyScores = forest.anomalyScores();
      console.log('Anomaly scores:', anomalyScores);
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
    <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', marginTop: '50px' }}>
      <h2>Login with Phone Number</h2>
      <Form
        form={form}
        onFinish={handleSignInWithCode}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true },
            { pattern: /^[89]\d{7}$/, message: 'Phone number must be an 8-digit number starting with either 8 or 9!' }
          ]}
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
          <Button type="primary" htmlType="submit" loading={loading}>Sign In</Button>
        </div>
      </Form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
