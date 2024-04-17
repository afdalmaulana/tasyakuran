import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: "images/Galeri 1.png",
      thumbnail: "images/Galeri 1.png",
    },
    {
      original: "images/Galeri 4.png",
      thumbnail: "images/Galeri 4.png",
    },
    {
      original: "images/Galeri 2.png",
      thumbnail: "images/Galeri 2.png",
    },
    {
      original: "images/Galeri 5.png",
      thumbnail: "images/Galeri 5.png",
    },
    {
      original: "images/Galeri 3.png",
      thumbnail: "images/Galeri 3.png",
    },
    {
      original: "images/Galeri 6.png",
      thumbnail: "images/Galeri 6.png",
    },
  ];
  return (
    <Box
      maxW={"438px"}
      backgroundSize={"auto"}
      bgColor={"black"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      px={"20px"}
      py={"20px"}
      color={"white"}
    >
      <Fade cascade duration={1200}>
        <Heading fontSize={"32px"} as={"h1"} className="font-bodyy">
          Family's Gallery
        </Heading>
        <Box py={"16px"} px={"20px"}>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            slideInterval={3000}
          />
        </Box>
      </Fade>
    </Box>
  );
};

export default Gallery;
