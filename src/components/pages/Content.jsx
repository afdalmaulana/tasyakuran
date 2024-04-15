import { Box, Flex, Heading, Text, calc } from "@chakra-ui/react";
import Landing from "./Landing";

const Content = () => {
  return (
    <>
      <Flex display={"flex"}>
        <Box>
          <Landing />
        </Box>
        {/* <Box
          ml={"438px"}
          w={"80%"}
          pos={"fixed"}
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          h={"100vh"}
          bgColor={"black"}
          bgSize={"cover"}
          bgImage={"images/wedding-photo.jpg"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
        >
          <Text fontWeight={"bold"} fontSize={"32px"} color={"white"}>
            THE WEDDING OF:{" "}
          </Text>
        </Box> */}
      </Flex>
    </>
  );
};

export default Content;
