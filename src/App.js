import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './store/users/usersSlice';
import Users from './components/Users';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
