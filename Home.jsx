import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import img1 from "../images/slide1.jpeg";
import img3 from "../images/slide3.jpg";
import img4 from "../images/slide4.jpg";
import Layout from './Layout/Layout';

function Homepage() {
  // Responsive settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Layout>
    <Container>
      {/* Carousel Section */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1000}
        keyBoardControl
        showDots={false}
        swipeable
        draggable
      >
        {/* Carousel Item */}
        <Box>
          <img
            src="https://img.pikbest.com/wp/202346/hunger-rapidly-satisfy-your-with-3d-fast-food-background-03_9739275.jpg!w700wp" // Replace with your image URL
            alt="Slide 1"
            style={{ width: '100%', height: '500px' }}
          />
        </Box>
        <Box>
          <img
            src="https://wallpapercave.com/wp/wp3510584.jpg" // Replace with your image URL
            alt="Slide 2"
            style={{ width: '100%', height: '500px' }}
          />
        </Box>
        <Box>
          <img
            src={img3} // Replace with your image URL
            alt="Slide 2"
            style={{ width: '100%', height: '500px' }}
          />
        </Box>
        <Box>
          <img
            src={img4} // Replace with your image URL
            alt="Slide 2"
            style={{ width: '100%', height: '500px' }}
          />
        </Box>
      
        
        {/* Add more slides as needed */}
      </Carousel>

      {/* Categories Section */}
      <Box my={5}>
        <Typography variant="h4" gutterBottom>
          Explore Our Menu
        </Typography>
        <Grid container spacing={3}>
          {/* Category 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <img
                src="https://www.brit.co/media-library/image.jpg?id=21875108&width=600&quality=90" // Replace with your image URL
                alt="Category 1"
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="h6">Appetizers</Typography>
              <Link to="/Menu/Appetizers">
                <Button variant="contained" color="primary">
                  Explore
                </Button>
              </Link>
            </Box>
          </Grid>
          {/* Category 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <img
                src={img4}// Replace with your image URL
                alt="Category 2"
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="h6">Main Courses</Typography>
              <Link to="/menu/main-courses">
                <Button variant="contained" color="primary">
                  Explore
                </Button>
              </Link>
            </Box>
          </Grid>
          {/* Category 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <img
                src={img1} // Replace with your image URL
                alt="Category 3"
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="h6">Desserts</Typography>
              <Link to="/menu/desserts">
                <Button variant="contained" color="primary">
                  Explore
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container></Layout>
  );
}

export default Homepage;
