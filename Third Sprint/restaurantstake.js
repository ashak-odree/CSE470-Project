import React, { useState } from 'react';
import axios from 'axios';

function RestaurantsTake() {
  const [restaurantInfo, setRestaurantInfo] = useState({
    type: '',
    name: '',
    location: '',
    contact: '',
    restaurantAvailability: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRestaurantInfo({
      ...restaurantInfo,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setRestaurantInfo({
      ...restaurantInfo,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('type', restaurantInfo.type);
    formData.append('name', restaurantInfo.name);
    formData.append('location', restaurantInfo.location);
    formData.append('contact', restaurantInfo.contact);
    formData.append('restaurantAvailability', restaurantInfo.restaurantAvailability);
    formData.append('image', restaurantInfo.image);

    try {
      await axios.post('/restaurant/create', formData);
      alert('Restaurant created successfully');
      // Clear form
      setRestaurantInfo({
        type: '',
        name: '',
        location: '',
        contact: '',
        restaurantAvailability: '',
        image: null,
      });
    } catch (error) {
      console.error(error);
      alert('Error creating restaurant');
    }
  };

  return (
    <div className="text-muted mb-0">
      <h2 className="text-muted mb-0" >Create Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={restaurantInfo.type}
            onChange={handleInputChange}
            style={{ color: 'white', background: 'green', width: '40%' }}
          />
        </div>
        <div className="text-muted mb-0">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={restaurantInfo.name}
            onChange={handleInputChange}
            style={{ color: 'white', background: 'green', width: '40%' }}
          />
        </div>
        <div className="text-muted mb-0">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={restaurantInfo.location}
            onChange={handleInputChange}
            style={{ color: 'white', background: 'green', width: '40%' }}
          />
        </div>
        <div className="text-muted mb-0">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={restaurantInfo.contact}
            onChange={handleInputChange}
            style={{ color: 'white', background: 'green', width: '40%' }}
          />
        </div>
        <div className="text-muted mb-0">
          <input
            type="date"
            name="restaurantAvailability"
            placeholder="Restaurant Availability"
            value={restaurantInfo.restaurantAvailability}
            onChange={handleInputChange}
            style={{ color: 'white', background: 'green', width: '40%' }}
          />
        </div>
        <div className="text-muted mb-0">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            style={{ color: 'white', background: 'green', width: '40%' }}
          />
        </div>
        <div className="text-muted mb-0">
          <button type="submit" style={{ color: 'white', background: 'blue', width: '40%' }}>
            Create Restaurant
          </button>
        </div>
      </form>
    </div>
  );
}

export default RestaurantsTake;
