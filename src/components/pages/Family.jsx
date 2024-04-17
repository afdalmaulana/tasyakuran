import React, { useEffect, useState } from "react";
import Landing1 from "../../assets/landing-1.png";
import Landing2 from "../../assets/landing-2.png";
import Landing3 from "../../assets/covers.png";
import { Box, Center, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const images = [Landing2, Landing1, Landing3];

const Family = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div>
      <Box
        maxW={"438px"}
        backgroundImage={`url(${images[currentImageIndex]})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        py={"20px"}
        px={"30px"}
        position={"relative"}
        color={"#212730"}
        textAlign={"center"}
        h={"100vh"}
        style={{
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* <Box height={"400px"} bgColor={"red"} /> */}
        <Center>
          <Box
            textColor={"white"}
            fontSize={"12px"}
            position={"absolute"}
            bottom={40}
          >
            <Text className="font-beauty text-5xl">Turut Mengundang</Text>
            <Box mt={"10px"} className="space-y-2">
              <Fade duration={800} direction="up" cascade="true">
                <Text className="font-bodyy font-semibold">
                  KAIMUDDIN.S SH DG. KIO'
                </Text>
                <Text className="font-bodyy font-semibold">
                  NURANDANI HARDIYANTI SsN DG. LABBI
                </Text>
                <Text className="font-bodyy font-semibold">
                  KELUARGA BESAR YAYASAN KESENIAN GOWA
                </Text>
              </Fade>
            </Box>
            <Text mt={"20px"}> Copyright &copy; @KabarBahagia Projects</Text>
            <Link
              to={"https://www.instagram.com/kabarbahagiaprojects/"}
              target="blank"
            >
              <IconButton
                variant={""}
                icon={<FaInstagram />}
                color={"white"}
              ></IconButton>
            </Link>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default Family;
