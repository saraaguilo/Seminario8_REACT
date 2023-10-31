import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9090/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
        navigate('/error');
      });
  }, [id]);

  const Update = (e: any) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9090/users/${id}`, user)
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        navigate('/error');
      });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={Update}>
        <div className='mb-2'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter name'
            className='form-control'
            name='name'
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            placeholder='Enter email'
            className='form-control'
            name='email'
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            placeholder='Enter phone'
            className='form-control'
            name='phone'
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
}

export default UserProfile;