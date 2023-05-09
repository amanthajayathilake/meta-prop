import * as React from 'react';
import Container from '@mui/material/Container';
import MenuAppBar from '../components/AppBar';
import Houses from './houses';

export default function Index() {
  return (
    <div>
      <MenuAppBar />
      <Houses />
    </div>
  );
}