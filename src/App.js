import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { selectUsers, setUsers } from './features/usersSlice';
import UserButton from './components/UserButton';

const UserCard = React.lazy(() => import('./components/UserCard'));

function App() {
  const dispatch = useDispatch();

  const { users } = useSelector(selectUsers);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((res) => res.json())
      .then((data) =>
        dispatch(setUsers({ count: data.data.length, users: data.data }))
      )
      .catch((e) => {
        alert(e.message);
      });
  }, [dispatch]);

  return (
    <div className='app'>
      <Suspense fallback={<p>Loaading ..</p>}>
        <UserCard />
      </Suspense>
      <div id='buttons-list'>
        {users.map((item, i) => {
          return <UserButton key={item.id} userId={item.id} title={i + 1} />;
        })}
      </div>
    </div>
  );
}

export default App;
