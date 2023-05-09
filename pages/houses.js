import CardItem from '../components/Card';
import { sampleData } from '../services/Utils';
import { getHouseInfo } from '../services/api-services/house-api';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function Houses() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [reponseList, setReponseList] = useState(sampleData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllHouseInfo();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  const getAllHouseInfo = async() => {
    getHouseInfo().then((data) => {
      if(data?.length > 0) {
        setReponseList(data);
      } else {
        setReponseList(sampleData);
      }
      console.log(data);
    }).catch((e) => {
      console.log(e)
    })
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '20px', marginTop: '20px', paddingLeft: isMobile ? '3%' : isTablet ? '4%' : '5%'}}>
      <Grid container spacing={3} columns={{ xs: 1, sm: 8, md: 12 }}>
        {isLoading ? [0, 1, 2, 3, 4, 5].map(() => {
          return (
            <Grid item xs={2} sm={4} md={4} key={Math.random()}>
              <Skeleton variant="rectangular" width={'350px'} height={'314px'} style={{borderRadius: '16px'}}/>
            </Grid>
          );
        }) : 
        reponseList?.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardItem data={item}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
