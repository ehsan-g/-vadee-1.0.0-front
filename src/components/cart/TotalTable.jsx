import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
  hideLastBorder: {
    '&: td, &:th': {
      border: 0,
    },
  },
});

function createData(calories, protein) {
  return { calories, protein };
}

const rows = [
  createData(4.0, 'قیمت'),
  createData(4.3, 'حمل و نقل'),
  createData(34, 'جمع'),
];

export default function TotalTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" />
            <TableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.hideLastBorder}>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="left">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
