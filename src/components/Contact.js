import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import { Typography } from '@mui/material';
const MailButton = () => {
  const handleMailClick = () => {
    const emailAddress = 'prasannasparkle1225@gmail.com';
    const subject = '';
    const body = '';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

 
  return (
    <IconButton  onClick={handleMailClick} aria-label="Contact Us" style={{ color: "#8300c4"}}>
      <EmailIcon />
      <Typography color="#8300c4" variant="button">Contact Us</Typography>
    </IconButton>
  );
};

export default MailButton;

