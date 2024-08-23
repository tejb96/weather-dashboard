import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import GetCityCounts from '../services/getCityCounts';

const SearchStats = () => {
    const stats = GetCityCounts();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Top Searched Cities
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell align="right">Search Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((row) => (
              <TableRow key={row.city}>
                <TableCell component="th" scope="row">
                  {row.city}
                </TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchStats;