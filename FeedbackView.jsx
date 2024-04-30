import { List, ListItem, ListItemText, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FeedbackView = () => {
    const [feedbacks, setFeedbacks] = useState([]);
  const [feedback, setFeedback] = useState({ user: '', comment: '' });
    useEffect(() => {
        // Fetch feedback data
        const fetchFeedbacks = async () => {
          try {
            const response = await axios.get('/feedback');
            setFeedbacks(response.data);
          } catch (error) {
            console.error('Error fetching feedbacks:', error);
          }
        };
        fetchFeedbacks();
      }, []);
    
      const handleSubmitFeedback = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/feedback', feedback);
          alert(response.data.message);
          setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);
          setFeedback({ user: '', comment: '' });
        } catch (error) {
          console.error('Error submitting feedback:', error);
          alert('Failed to submit feedback.');
        }
      };
  return (
    <div>
<Typography variant="h5">Feedback List</Typography>
      <List>
        {feedbacks.map((feedback) => (
          <ListItem key={feedback._id}>
            <ListItemText primary={`${feedback.user}: ${feedback.comment}`} />
          </ListItem>
        ))}
      </List>

    </div>
  )
}

export default FeedbackView