import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Import firebase from 'firebase/compat/app' instead of 'firebase/app'
import 'firebase/compat/firestore'; // Import the firestore module separately

const ViewProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user's profile data from Firestore
    const fetchProfileData = async () => {
      try {
        const userId = firebase.auth().currentUser.uid;
        const docRef = firebase.firestore().collection('profiles').doc(userId);
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists()) {
          // Profile document found, set profile data state
          setProfileData(docSnapshot.data());
        } else {
          // Profile document not found
          console.log('No profile data found for user:', userId);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchProfileData function
    fetchProfileData();
  }, []);

  return (
    <div>
      <h2>View Profile</h2>
      {loading && <p>Loading profile data...</p>}
      {!loading && profileData && (
        <div>
          <p><strong>First Name:</strong> {profileData.firstName}</p>
          <p><strong>Last Name:</strong> {profileData.lastName}</p>
          <p><strong>Date of Birth:</strong> {profileData.dateOfBirth}</p>
          <p><strong>Gender:</strong> {profileData.gender}</p>
          {/* Add more profile fields as needed */}
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
