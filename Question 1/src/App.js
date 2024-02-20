import UserList from "./components/UserList";

// use this users object to render the list of users

function App() {
    const users = [
      {
        firstName: "Ada",
        lastName: "lovelace",
      },
      { firstName: "Donld", lastName: "knuth" },
    ]
    const userList = ({users}) => {
      // sort users by lastname
      const sortedUsers = users.slice().sort((a,b)=>
      a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()))
    
  
  return (
    <div>
      {/* render the count of users here */}
      <div className="user-count">Users: {users.length}</div>
 
      {/* render the user list compoenent here */}
      <UserList users={users}/>
      <div>
        <ul className="user-list">
          {sortedUsers.length > 0?(sortedUsers.map((user, index)=>(
            <li key={index}>{user.firstName}{user.lastName}</li>
          ) )
          ):(
            <li>No users</li>
          )}
        </ul>
      </div>
    </div>
  );
}
  }
export default App;
