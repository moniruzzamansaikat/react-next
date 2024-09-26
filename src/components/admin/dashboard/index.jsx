import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PostIcon from '@mui/icons-material/Book';
import CommentIcon from '@mui/icons-material/Comment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 4000, posts: 2400, comments: 2400 },
  { name: 'Feb', users: 3000, posts: 1398, comments: 2210 },
  { name: 'Mar', users: 2000, posts: 9800, comments: 2290 },
  { name: 'Apr', users: 2780, posts: 3908, comments: 2000 },
  { name: 'May', users: 1890, posts: 4800, comments: 2181 },
  { name: 'Jun', users: 2390, posts: 3800, comments: 2500 },
  { name: 'Jul', users: 3490, posts: 4300, comments: 2100 },
];

const AdminDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Admin Dashboard
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="posts" stroke="#82ca9d" />
                <Line type="monotone" dataKey="comments" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <PeopleIcon sx={{ mr: 2 }} />
            <div>
              <Typography variant="h6" component="h2">
                User Management
              </Typography>
              <Typography variant="body1">
                Oversee user accounts and their roles.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <PostIcon sx={{ mr: 2 }} />
            <div>
              <Typography variant="h6" component="h2">
                Post Management
              </Typography>
              <Typography variant="body1">
                Oversee posts and their content.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <CommentIcon sx={{ mr: 2 }} />
            <div>
              <Typography variant="h6" component="h2">
                Comment Moderation
              </Typography>
              <Typography variant="body1">
                Oversee comments and their moderation.
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;