import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, playername, rank, gender, age) {
  return { name, playername, rank, gender, age };
}

const rows = [
    createData('01', "Adam Smith", "A+", "Male", "22"),
    createData('02', "Mike Miller", "A", "Male", "20"),
    createData('03', "Ada Wong", "B", "Female", "21"),
    createData('04', "Leon Kennedy", "B+", "Male", "22"),
    createData('05', "Ashley Graham", "A+", "Female", "21"),
    createData('06', "Johan Cruyff", "A", "Male", "22"),
    createData('07', "Kevin De Bruyne", "B", "Male", "23"),
    createData('08', "Anirudh Thapa", "B+", "Male", "20"),
    createData('09', "Neymar", "B", "Male", "21"),
    createData('10', "Kevin De Bruyne", "B+", "Male", "21"),
    createData('11', "Johan Cruyff", "B+", "Male", "21"),
    createData('12', "Anirudh Thapa", "B+", "Male", "21"),
    createData('13', "Neymar", "B+", "Male", "21"),
  ];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. No.</TableCell>
            <TableCell align="right">Player Name</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.playername}</TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;