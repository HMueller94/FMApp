import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from '../../../config/config';

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  const functionUrl = `${config.baseUrl}/GetPlayers`;

  useEffect(() => {
    // Abruf der Spielerdaten von der Azure Function
    axios.get(functionUrl)
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching players:', error);
      });
  }, []);

  const handleViewDetails = (id) => {
    // Navigiert zur Detailseite des Spielers
    navigate(`/players/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell> {/* Neue Spalte für Aktionen */}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.position}</TableCell>
              <TableCell>{player.age}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleViewDetails(player.id)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlayersTable;

