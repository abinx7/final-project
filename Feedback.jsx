import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function FeedbackForm() {
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
    <Container>
      <Typography variant="h4">Feedback Form</Typography>

      <form onSubmit={handleSubmitFeedback}>
        <div>
          <TextField
            label="Name"
            value={feedback.user}
            onChange={(e) => setFeedback({ ...feedback, user: e.target.value })}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Feedback"
            value={feedback.comment}
            onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
            required
            multiline
            rows={4}
            margin="normal"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit Feedback
        </Button>
      </form>

      <Typography variant="h5">Feedback List</Typography>
      <List>
        {feedbacks.map((feedback) => (
          <ListItem key={feedback._id}>
            <ListItemText primary={`${feedback.user}: ${feedback.comment}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default FeedbackForm;
