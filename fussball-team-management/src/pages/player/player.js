import React from 'react';
import PlayersTable from './components/playersTable'; // Import the PlayersTable component
import { Box } from '@mui/material';

function Players() {
  return (
    <Box sx={{ margin: 4 }}> {/* Hier wird der Abstand um die Komponente erhöht */}
      <h1>Players</h1>
      <PlayersTable />
    </Box>
  );
}

export default Players;
