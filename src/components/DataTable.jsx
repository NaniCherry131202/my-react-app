import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const DataTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Users Data
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>Website</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  {`${user.address.street}, ${user.address.suite},${user.address.city}, ${user.address.zipcode}`}
                </TableCell>
                <TableCell>{`${user.company.name}`}</TableCell>
                <TableCell>{`${user.address.geo.lat} ${user.address.geo.lng}`}</TableCell>
                <TableCell>
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                    {user.website}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
