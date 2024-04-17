import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import event from "../../assets/quotess.png";
import { Fade } from "react-awesome-reveal";

const Quotes = () => {
  return (
    <Box maxW={"438px"} bgColor={"grey"} py={"20px"}>
      <Fade duration={800} direction="down" cascade="true">
        <Center pt={"50px"}>
          <Heading className="font-beauty text-6xl text-white">Quotes</Heading>
        </Center>
      </Fade>
      <Image src={event} w={"80%"} mx={"auto"} mt={"20px"} />
      <Box
        textAlign={"center"}
        mt={"20px"}
        fontSize={"16px"}
        fontWeight={"thin"}
        maxW={"438px"}
        px={"20px"}
        className="text-white"
      >
        <Fade duration={800} direction="up" cascade="true" triggerOnce>
          <Text className="font-bodyy text-[12px]">
            &quot;Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang
            laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa
            dan bersuku-suku supaya kamu saling mengenal.&quot;
          </Text>
          <Text className="font-bodyy text-[12px]" mt={"10px"}>
            (Q.S Al-Hujurat: 13).
          </Text>
        </Fade>
      </Box>
    </Box>
  );
};

export default Quotes;
