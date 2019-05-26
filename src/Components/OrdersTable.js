import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrdersData from '../Data/OrdersData.json'

export default function Orders({data}) {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Meeting Point</TableCell>
            <TableCell>Activity</TableCell>
            <TableCell>Number of people</TableCell>            
            <TableCell>Total Sale</TableCell>
            <TableCell align="right">Comission%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {OrdersData.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.activity}</TableCell>
              <TableCell>{row.numberPeople}</TableCell>
              <TableCell>{row.totalSale}</TableCell>
              <TableCell align="right">{row.comission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div >
        <Link color="primary" target="_blank" href="https://www.skibro.com/en/;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}