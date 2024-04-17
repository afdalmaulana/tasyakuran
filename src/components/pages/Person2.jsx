import { Box, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import person2 from "../../assets/person2.png";
import { Fade } from "react-awesome-reveal";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Person2 = () => {
  return (
    <Flex bgColor={"#F4EAE0"} maxW={"438px"} height={"800px"}>
      <Box
        w={"20%"}
        bgColor={"grey"}
        display={"flex"}
        textColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading textAlign={"center"} mx={"auto"}>
          <Fade duration={2000} direction="up" cascade="true">
            <Text
              transform={"rotate(-90deg)"}
              className="font-bodyy"
              fontSize={"42px"}
              mt={"30px"}
            >
              Alhabsyi
            </Text>
          </Fade>
        </Heading>
      </Box>
      <Box
        w={"80%"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        bgImage={person2}
        h={"800px"}
        px={"20px"}
      >
        <Box height={"550px"} />

        <Box textAlign={"center"} color={"white"}>
          <Fade duration={800} direction="up" cascade="true">
            <Text mt={"20px"} fontSize={"24px"} className="font-beauty">
              Alhabsyi Abdullah Kaimuddin
            </Text>
            <Text mt={"10px"} fontSize={"24px"} className="font-beauty">
              Dg. Gading
            </Text>
          </Fade>
        </Box>
      </Box>
    </Flex>
  );
};

export default Person2;
