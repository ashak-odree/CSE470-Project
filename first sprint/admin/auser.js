import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Leftp from './leftpanal';
import { useNavigate } from 'react-router-dom'
function Auser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/userall'); // Update the endpoint URL
        setUsers(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/user/${userId}`);
      navigate('/userlist');
      window.alert("User has been deleted successfully");

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
    <>
    <Leftp />
    </>
      <div className="color">
        {/* Leftp component */}
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            {/* Sidebar button */}
            <span className="dashboard">
              <p className="text-muted mb-0">Welcome to your Dashboard, Username.</p>
            </span>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes"></div>
          <div className="sales-boxes">
            <div className="recent-sales box">
              <button className="button button5">++ Add New user</button>
              <div className="title">Users</div>
              <br />
              <br />
              <br />
              <table>
                <tbody>
                  <tr>
                    <th><p className="text-muted mb-0">Name</p></th>
                    <th><p className="text-muted mb-0">Email</p></th>
                    <th><p className="text-muted mb-0">Phone</p></th>
                    <th><p className="text-muted mb-0">Occupation</p></th>
                    <th colSpan={3}><p className="text-muted mb-0">Action</p></th>
                  </tr>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td><p className="text-muted mb-0">{user.name}</p></td>
                      <td><p className="text-muted mb-0">{user.email}</p></td>
                      <td><p className="text-muted mb-0">{user.phone}</p></td>
                      <td><p className="text-muted mb-0">{user.occupation}</p></td>
                      <td>
              <button className="button button3" onClick={() => deleteUser(user._id)}>Delete</button>
            
            </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auser;
