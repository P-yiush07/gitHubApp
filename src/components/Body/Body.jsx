import React, { useEffect, useState } from 'react';


function Body() {

  // Define a state variable to track the visibility of the second div
  const [showBody2, setShowBody2] = useState(false);
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      const encodedUsername = encodeURIComponent(username);
      // Fetch user data from an API based on the username
      fetch(`https://api.github.com/users/${encodedUsername}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setShowBody2(true);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setShowBody2(false);
        });
    }
  }, [username]);

  let body2Content = null;

  // Function to toggle the visibility of the second div
  const toggleBody2 = () => {
    if (inputValue !== "") {
      setUsername(inputValue);
      setShowBody2(true);
    } else {
      //alert('Enter Username Please');
      setShowBody2(false);
    }
  };

  // Move the conditional rendering logic here
  if (showBody2) {
    body2Content = (
      <>
        <div id="body2" className="bg-white p-4 rounded-lg shadow-md w-100 text-center">
          <div id="name" className="mb-4">
            Name: {userData && userData.name ? userData.name : 'Not given'}
          </div>
          <div id="followers" className="mb-4">
            Followers: {userData && userData.followers ? userData.followers : 'Not given'}
          </div>
          <div id="location" className="mb-4">
            Location: {userData && userData.location ? userData.location : 'Not given'}
          </div>
          <div id="blog" className="mb-4">
            Blog: {userData && userData.blog ? userData.blog : 'Not given'}
          </div>
        </div>
      </>

    );
  }

  return (
    <>
      <div id="mainbody" className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <div id="body" className="bg-white p-4 rounded-lg shadow-md w-80 text-center mb-4">
            <div>
              <input
                id="txt"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                className="w-full border rounded-lg p-2 mb-2"
                placeholder="Enter text"
              />
            </div>
            <button
              id="button"
              className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
              onClick={toggleBody2}
            >
              Submit
            </button>
          </div>
          {body2Content}
        </div>
      </div>
    </>
  );
}

export default Body;
