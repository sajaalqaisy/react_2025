import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Description } from '@mui/icons-material';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  const [cardsData,setCardsData] = useState([
    {
      title:'Card1' ,
      Description:'this is card1',
      image:'"/images/contemplative-reptile.jpg"'
    },
    {
      title:'Card2' ,
      Description:'this is card2',
      image:'"/images/contemplative-reptile.jpg"'
    },
    {
      title:'Card3' ,
      Description:'this is card3',
      image:'"/images/contemplative-reptile.jpg"'
    },
    {
      title:'Card4' ,
      Description:'this is card4',
      image:'"/images/contemplative-reptile.jpg"'
    },
  ])
    const[formData,setFormData]=useState({title:'',Description:'',image:''})
    const handelChange = (event)=>{
      setFormData({...formData,[event.target.name]:event.target.value});
    }
    const handelAddcard=(event)=>{
      event.preventDefult();
      setCardsData([...cardsData,formData]);
    }
  return (
    <>
    <form onSubmit={handelAddcard}>
      <input type='text' name='title' onChange={handelChange} placeholder='title'/>
      <input type='text' name='Description' onChange={handelChange}  placeholder='Description'/>
      <input type='text' name='image' onChange={handelChange} placeholder='image'/>
      <button>add</button>
    </form>
    <Box sx={{ flexGrow: 1 }}>
      {/* {start grid item} */}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {cardsData.map((card,index)=>( <Grid item xs={2} sm={4} md={4} >
            <Item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/images/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Item>
          </Grid>
          ))}
         {/* end grid item */}
      </Grid>
    </Box>
    </>
  );}