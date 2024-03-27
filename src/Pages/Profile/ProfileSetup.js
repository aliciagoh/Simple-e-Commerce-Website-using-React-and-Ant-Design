import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Import firebase from 'firebase/compat/app' instead of 'firebase/app'
import 'firebase/compat/firestore'; // Import the firestore module separately
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ProfileSetup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSaveProfile = async () => {
    try {
      const userId = firebase.auth().currentUser.uid;
      const profileRef = firebase.firestore().collection('profiles').doc(userId);

      // Save profile data to Firestore
      await profileRef.set({
        firstName,
        lastName,
        dateOfBirth,
        gender,
      });

      // After successfully saving the profile, navigate to ViewProfile page
      navigate('/view-profile');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Profile Setup</h2>
      {error && <p>{error}</p>}
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default ProfileSetup;
