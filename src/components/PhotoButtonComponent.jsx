import React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import pic1 from '../images/one.png';
import pic2 from '../images/two.png';
import '../style/photoButtonStyle.css';

const images = [
  {
    url: pic1,
    title: '일반 버젼',
  },
  {
    url: pic2,
    title: '아이콘 버젼',
  },
];

function PhotoButtonComponent({ onClickImage }) {
  // const handleButtonClick = (title) => {
  //   onClickImage(title);
  // };

  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '80%' }}
    >
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className="imageButton"
          style={{ width: '50%' }}
          onClick={() => onClickImage(image.title)}
        >
          <div
            className="imageSrc"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="imageBackdrop" />
          <div className="image">
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                color: 'white',
                fontWeight: 800,
                fontSize: 24,
              }}
            >
              {image.title}
              <div className="imageMarked" />
            </Typography>
          </div>
        </ButtonBase>
      ))}
    </Box>
  );
}

export default PhotoButtonComponent;
