import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";
import Connections from "../components/Connections";
// import eventPic from "../assets/Event.png";

export default function Event() {
  return (
    <>
      <Box bgColor={"#F4EAE0"} py={"100px"} maxW={"438px"}>
        <Box textAlign={"center"}>
          <Fade duration={800} cascade="true" triggerOnce>
            <Text letterSpacing={"10px"}>Tasyakuran & Aqiqah</Text>
            <div className="font-beauty text-[68px]">Event</div>

            {/* <Image  src={eventPic}></Image> */}
            <Connections text="PENAMATAN AL-QUR'AN" />
            <Flex justifyContent={"center"} mt={"-20px"}>
              <Box>
                <Text fontSize={"69px"} fontWeight={"bold"}>
                  19
                </Text>
              </Box>
              <Box
                alignSelf={"center"}
                className="font-bodyy"
                textAlign={"left"}
                ml={"10px"}
              >
                <Text>Minggu</Text>
                <Text>Mei</Text>
              </Box>
            </Flex>
            <Text fontSize={"24px"}>09:00 WITA</Text>
            <div className="font-bodyy text-[14px]">
              Jl. Karaeng Bontomarannu Galesong Kota Kab. Takalar
            </div>

            <Connections text="PENGISLAMAN" />
            <Flex justifyContent={"center"} mt={"-20px"}>
              <Box>
                <Text fontSize={"69px"} fontWeight={"bold"}>
                  19
                </Text>
              </Box>
              <div></div>
              <Box alignSelf={"center"} textAlign={"left"} ml={"10px"}>
                <Text className="font-bodyy">Minggu</Text>
                <Text className="font-bodyy">Mei</Text>
              </Box>
            </Flex>
            <Text fontSize={"24px"}>11:00 - 14.30 WITA</Text>
            <div className="font-bodyy text-[14px]">
              Jl. Karaeng Bontomarannu Galesong Kota Kab. Takalar
            </div>
            <Button
              leftIcon={<LuMapPin />}
              color={"white"}
              padding={"8px 12px"}
              bgColor={"#2C3333"}
              _hover={{ color: "#2C3333", bgColor: "white" }}
              mt={"20px"}
              borderRadius={"30px"}
              onClick={() =>
                window.open(
                  "https://goo.gl/maps/Qi78PuJqoMz6xryY8?g_st=aw",
                  "_blank"
                )
              }
            >
              Google Maps
            </Button>
          </Fade>
        </Box>
      </Box>
    </>
  );
}
