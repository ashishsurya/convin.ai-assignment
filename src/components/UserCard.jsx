import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { selectUserId } from '../features/userIdSlice';

export default function UserCard() {
  const userId = useSelector(selectUserId);
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      setLoading(true)
      fetch('https://reqres.in/api/users/' + userId)
        .then((res) => res.json())
        .then((data) => setCurrUser(data.data));
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="usercard">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div className='usercard'>
      {currUser ? (
        <div className='content'>
          <img src={currUser.avatar} alt='' />
          <div>
            <h1>
              {currUser.first_name} {currUser.last_name}
            </h1>
            <p>{currUser.email}</p>
          </div>
        </div>
      ) : (
        <p>Click on any button to display info about an user.</p>
      )}
    </div>
  );
}
