const express = require('express');
const router = express.Router();
const addtocart = require('../model/addToCartSchema');
const Menu = require('../model/RestaurantDetails');

const upload = require('../multerConfig'); // Import multer configuration



router.post('/createCart',  async (req, res) => {   //http://localhost:5000/restaurant/create
    const { price,email ,name} = req.body;
    
    try {
        

        const restaurant = new addtocart ({price,email,name });
        const savedRestaurant = await restaurant.save();

        res.status(201).json({
            success: true,
            message: 'Add To Cart  created successfully',
            restaurant: savedRestaurant
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.get('/getCart', async (req, res) => {  //http://localhost:5000/restaurant/all
    try {
        let query = {};
      if (req.query.email) {
        query = { email: req.query.email };
      }
      const restaurants = await Restaurant.find(query);
      console.log(restaurants);
      res.status(200).json(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });




  



// Import necessary modules and models






module.exports = router;