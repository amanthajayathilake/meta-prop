import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { themeColors } from '../services/Utils';
import Image from 'next/image';

export default function CardItem({data}) {
  return (
    <Card sx={{ maxWidth: '350px', height: '314px', borderRadius: '16px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200px"
        image={data.image || "https://mui.com/static/images/cards/contemplative-reptile.jpg"} 
        style={{borderRadius: '16px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '8px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontSize: '14px', width: '316px', fontWeight: 600, color: themeColors.textGray}}>
          {data.name || '-'}
        </Typography>
        <Typography variant="body2" color="text.secondary"  style={{fontSize: '11px', width: '316px', fontWeight: 600, color: themeColors.textGray}}>
          {data.location || '-'}
        </Typography>
        <Typography variant="body2" color="text.secondary"  style={{fontSize: '20px', width: '316px', fontWeight: 600, color: themeColors.textPrice}}>
          {data.price ? '$' + data.price : '-'}
        </Typography>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Typography variant="body2" color="text.secondary"  style={{fontSize: '10px', width: '120px', fontWeight: 600, color: themeColors.textGray}}>
          {data.developer ? 'By ' + data.developer : '-'}
        </Typography>
        <Image src="/icon.png" alt="icon" width={25} height={25} style={{marginLeft: '200px', marginTop: '-10px'}}/>
        </div>
      </CardContent>
    </Card>
  );
}
