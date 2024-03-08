import React, { useState, useEffect } from "react";
import usePost from "../hooks/usePost";
import Layout from "./Layout";
import "./styles/main_style.css";
import useAuth from "../hooks/useAuth";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Import the icon
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [page, setPage] = useState(1);
  const { useFetchMyPosts } = usePost();
  const { useFetchProfile } = useAuth();
  const { data: res, fetchMore } = useFetchMyPosts(page);
  const { data: profile } = useFetchProfile();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setPage(page + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <div style={{ position: 'relative', width: '150px', height: '150px' }}>
          <img
            src="/images/user.png"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <IconButton
            aria-label="upload-profile-picture"
            style={{
              position: 'absolute', 
              bottom: 0,
              right: 0,
              backgroundColor: 'white', // Adjust styling as needed
            }}
          >
            <AddPhotoAlternateIcon />
          </IconButton>
        </div>
        <div className="profile-style">
          <p>Name: Abhishek Paudel</p>
          <p>Mobile number: {profile?.data?.profileData[0]?.mobile_number}</p>
          <p>Email: {profile?.data?.profileData[0]?.email}</p>
          <p>Address: {profile?.data?.profileData[0]?.district_name}</p>
          <p>Amount: Rs {profile?.data?.profileData[0]?.amount}</p>
        </div>
        {res?.data?.data?.length > 0 && (
          <div className="container profile-campaigns">
            <h2>My Campaigns</h2>
            {res?.data?.data?.map((item, index) => (
              <Card key={index} style={{ marginBottom: '20px' }}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
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
                  <Typography variant="body2" color="text.secondary">
                    <IconButton aria-label="share" type="">
                      <LocationOnIcon />
                    </IconButton> {item?.districtName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <IconButton aria-label="share">
                      <PhoneInTalkIcon />
                    </IconButton>
                    {item?.mobileNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <IconButton aria-label="share" style={{color:'purple'}} onClick={() => navigate('/donate', { state: item?.fullName })}>
                  <VolunteerActivismIcon />
                </IconButton>
                <IconButton aria-label="add to favorites" style={{color:'purple'}} onClick={() => navigate('/donate', { state: item?.fullName })}>
                  <AttachMoneyIcon />
                </IconButton>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
