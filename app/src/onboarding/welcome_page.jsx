import React, { useState, useEffect } from "react";
import "./styles/welcome_page.css";
import Layout from "../components/Layout";
import CampaignForm from "../components/CampaignForm";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import CommentIcon from '@mui/icons-material/Comment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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

const WelcomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const { useFetchPosts } = usePost();
  const { data } = useFetchPosts();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      // Fetch more data here
    }
  };

  return (
    <>
      <Layout>
        <Box sx={{ '& > :not(style)': {  } }}>
          <Fab variant="extended" style={{
            margin: "0px",
            top: "auto",
            right: "80px",
            bottom: "80px",
            left: "auto",
            position: "fixed",
            backgroundColor:"rgb(9, 134, 102)"
          }}
          onClick={() => navigate('/verify-kyc')}
          >
            <AddIcon sx={{ mr: 1 }} />
            Verify KYC
          </Fab>
        </Box>
        <div className="main_container">
          <div className="campaign_form" style={{marginTop: "80px"}}>
            <CampaignForm />
          </div>
          <div className="container-fluid main-page-wrapper" style={{marginTop: "80px"}}>
            <div className="container">
              {data?.data?.newFeedData?.length > 0 && data?.data?.newFeedData?.map((item, index) => (
                <Card sx={{ maxWidth: 2000 }} style={{width: '900px',margin: 30, padding: 20, backgroundColor: '#f4f7fa',marginLeft: 350 }} key={index}>
                  <CardHeader
                    avatar={<Avatar src={item.profilePicture} aria-label="recipe" />}
                    action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                    title={item?.fullName}
                    subheader={item?.postCreateDate}
                  />
                  <a href={item.image} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt="Paella dish"
                    />
                  </a>
                  <CardContent></CardContent>
                  <Typography paragraph>
                    <IconButton aria-label="share"><LocationOnIcon /></IconButton> {item?.name}
                  </Typography>
                  <Typography paragraph>
                    <IconButton aria-label="share"><PhoneInTalkIcon /></IconButton>
                    {item?.mobileNumber}
                  </Typography>
                  <Typography paragraph>{item.description}</Typography>
                  <CardActions disableSpacing>
                    <IconButton aria-label="share" onClick={() => navigate('', { state: item?.fullName })}><CommentIcon /></IconButton>
                    <IconButton aria-label="add to favorites" onClick={() => navigate('/donate', { state: item?.fullName })}><AttachMoneyIcon /></IconButton>
                  </CardActions>
                  <Paper component="form" sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 950 }} style={{flexDirection: 'row'}}>
                    <InputBase sx={{ flex: 1, width:110, paddingTop:1, paddingLeft:1, marginRight:1 }} placeholder="Comment here..." inputProps={{ 'aria-label': 'search google maps' }} />
                    <div>
                      <IconButton type="button" sx={{ p: '10px'  }} aria-label="search" onClick={()=>{console.log('data')}}><CommentIcon /></IconButton>
                    </div>
                  </Paper>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WelcomePage;
