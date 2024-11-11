import { Box, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../../config/config';


function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  const functionUrl = `${config.baseUrl}/GetPlayerById?id=${id}`;

  useEffect(() => {
    axios.get(functionUrl)
      .then(response => {
        setPlayer(response.data);
      })
      .catch(error => {
        console.error('Error fetching player details:', error);
      });
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <Paper sx={{ padding: 4, margin: 4 }}>
      <Typography variant="h4">{player.name}</Typography>
      <Box mt={2}>
        <Typography variant="body1">ID: {player.id}</Typography>
        <Typography variant="body1">Position: {player.position}</Typography>
        <Typography variant="body1">Age: {player.age}</Typography>
      </Box>
    </Paper>
  );
}

export default PlayerDetails;
