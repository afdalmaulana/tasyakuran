import { Box, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import person1 from "../../assets/person1.png";
import { Fade } from "react-awesome-reveal";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Person1 = () => {
  return (
    <Flex bgColor={"#F4EAE0"} maxW={"438px"} height={"800px"}>
      <Box
        w={"80%"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        bgImage={person1}
        h={"800px"}
        px={"20px"}
      >
        <Box height={"550px"} />

        <Box textAlign={"center"} marginTop={"20px"} color={"white"}>
          <Fade duration={800} direction="up" cascade="true">
            <Text mt={"20px"} fontSize={"24px"} className="font-beauty">
              Nur Fauziyah Aprilia
            </Text>
            <Text mt={"10px"} fontSize={"24px"} className="font-beauty">
              Dg. Carammeng
            </Text>
          </Fade>
          <Link to={"https://www.instagram.com/avodicaprio/"} target="blank">
            <IconButton
              variant={""}
              icon={<FaInstagram />}
              color={"white"}
            ></IconButton>
          </Link>
        </Box>
      </Box>
      <Box
        w={"20%"}
        bgColor={"grey"}
        display={"flex"}
        textColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading mx={"auto"} textAlign={"center"}>
          <Fade duration={2000} direction="up" cascade="true">
            <Text
              transform={"rotate(-90deg)"}
              className="font-bodyy"
              fontSize={"42px"}
              mt={"30px"}
            >
              Fauziyah
            </Text>
          </Fade>
        </Heading>
      </Box>
    </Flex>
  );
};

export default Person1;
