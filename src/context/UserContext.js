import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    countryOfResidence: '',
    address: '',
    phoneNumber: '',
    profilePicture: ''
  });

  const updateUserData = (newData) => {
    setUserData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}; 