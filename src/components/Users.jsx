import { useSelector } from 'react-redux';

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>An error has ocurred...</h1>
      </div>
    );
  }
  return (
    <div>
      Users
      {users.map((user) => {
        return <ul key={user.id.value}>First Name: {user.name.first}</ul>;
      })}
    </div>
  );
};

export default Users;
