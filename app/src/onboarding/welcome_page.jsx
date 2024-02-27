import React, { useState, useRef, useEffect } from "react";
import "./styles/welcome_page.css";
import Layout from "../components/Layout";
import CommentSection from "../components/CommentSection";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const humanityData = [
  {
    id: 1,
    title: "Test Title 1",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
  },
  {
    id: 2,
    title: "Test Title 2",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
  },
  {
    id: 3,
    title: "Test Title 3",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
  },
];

const WelcomePage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { useFetchPosts } = usePost()

  const { data } = useFetchPosts()

  const navigate = useNavigate()

  return (
    <>
      <Layout>
        <div className="container-fluid main-page-wrapper">
          <div className="main-page-banner">
            <h1>
              We Are In A Mission To Help <br /> The HelpLess <br /> Join Our
              Action!
            </h1>
          </div>
          <div className="container">
            {data?.data?.newFeedData?.length > 0 && data?.data?.newFeedData?.map((item, index) => {
              return (
                <Card sx={{ maxWidth: 1000 }} style={{ margin: 30, padding: 20, backgroundColor: '#f4f7fa' }} key={index}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item?.fullName}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                  </CardContent>
                  <Typography paragraph>
                    <IconButton aria-label="share" type="">
                      <LocationOnIcon />
                    </IconButton> {item?.district_name}
                  </Typography>
                  <Typography paragraph>
                    <IconButton aria-label="share">
                      <PhoneInTalkIcon />
                    </IconButton>
                    {item?.mobileNumber}
                  </Typography>
                  <Typography paragraph>
                    {item.description}
                  </Typography>
                  <CardActions disableSpacing>
                    <IconButton aria-label="share">
                      <VolunteerActivismIcon style={{color:'purple'}}  onClick={() => navigate('/donate', { state: item?.fullName })} />
                    </IconButton>
                    <IconButton aria-label="add to favorites"  style={{color:'purple'}}  onClick={() => navigate('/donate', { state: item?.fullName })}>
                      <AttachMoneyIcon />
                    </IconButton>
                  </CardActions>
                  <Paper
      component="form"
      sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 950 }}
      style={{flexDirection: 'row'}}
    >
      <InputBase
        sx={{ flex: 1, width:110, paddingTop:1, paddingLeft:1, marginRight:1 }}
        placeholder="Comment here..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <div>
      <IconButton type="button" sx={{ p: '10px'  }} aria-label="search" onClick={()=>{console.log('data')}}>
        <CommentIcon />
      </IconButton>
      </div>
    
    </Paper>
                </Card>
                // <div key={item.id} class="custom-card card mb-3">
                //   <div className="custom-card-content">
                //     <img
                //       class="card-img"
                //       src={item.image}
                //       alt="Card image cap"
                //     />
                //     <div class="card-body">
                //       <h5 class="card-title">{item?.fullName}</h5>
                //        <h6 class="card-title">{item?.district_name}</h6>
                //        <h6 class="card-title">{item?.mobileNumber}</h6>
                //       <p class="card-text">{item.description}</p>
                //       <p class="card-text">
                //           <button class="btn btn-2 btn-success" type="submit" onClick={() => navigate('/donate', {state: item?.fullName})}>
                //             Donate Now
                //           </button>

                //       </p>
                //     </div>
                //   </div>

                // </div>

              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WelcomePage;
