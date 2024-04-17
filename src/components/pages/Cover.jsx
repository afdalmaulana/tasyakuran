import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import Landing from "./Landing";
// import Landing from "./Pages/Landing";
import coverPict from "../../assets/covers.png";

export default function Cover() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const toParam = queryParams.get("to");
  const [namaTamu, setNamaTamu] = useState("");
  const [showLanding, setShowLanding] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const toContent = () => {
  //   navigate(`/content?to=${toParam || ""}`);
  // };

  const toContent = () => {
    setShowLanding(true);
  };

  if (showLanding) {
    return <Landing />;
  }
  return (
    <>
      <div
        className="h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat desktop:w-[438px] px-[30px] relative"
        style={{ backgroundImage: `url(${coverPict})` }}
      >
        {/* <Box
        w={{ base: "100vw", sm: "100vw", md: "438px", lg: "438px" }}
        backgroundImage={coverPict}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        height={"100vh"}
        px={"30px"}
        position={"relative"}
        color={"#212730"}
        style={{
          transition: "background-image 1s ease-in-out",
        }}
      > */}
        <Center>
          <Box position="absolute" bottom={0}>
            {/* <Fade cascade duration={1000} direction="up"> */}
            <Box
              textAlign={"center"}
              px={"80px"}
              color={"white"}
              paddingBottom={"24px"}
            >
              <div className="font-beauty text-3xl mb-4">
                Tasyakuran & Aqiqah
              </div>
              <div className="text-xl font-headLine">
                Alhabsyi, Raffasya, Fauziyah
              </div>
              <Text marginTop={"12px"} fontSize={"12px"}>
                Tanpa mengurangi rasa hormat.
              </Text>
              <Text fontSize={"12px"}>Kepada Yth: Bapak/Ibu/Saudara/I</Text>
              <Text
                mt={"12px"}
                fontWeight={"bold"}
                textTransform={"capitalize"}
                fontSize={"24px"}
              >
                {toParam}
              </Text>
              <Button
                leftIcon={<IoIosMail />}
                color={"white"}
                bgColor={"#2C3333"}
                _hover={{ color: "#2C3333", bgColor: "white" }}
                onClick={() => toContent()}
                mt={"12px"}
                padding={"8px 12px"}
                borderRadius={"30px"}
              >
                Buka Undangan
              </Button>
              <Text fontSize={"12px"} mt={"20px"}>
                Copyright &copy; @KabarBahagia Projects
              </Text>
            </Box>
          </Box>
        </Center>
      </div>

      {/* </Box> */}
    </>
  );
}
