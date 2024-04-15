import {
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
// import { IoPlayCircle } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa6";
import { BsFillDiscFill } from "react-icons/bs";
import Landing1 from "../../assets/landing-1.jpeg";
import Landing2 from "../../assets/landing-2.jpeg";
import Landing3 from "../../assets/landing-3.jpeg";
import song from "../../assets/songs.mp3";

const images = [Landing1, Landing2, Landing3];

const Landing = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        // Tangani kesalahan saat memutar audio
        console.error("Audio playback error:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const toggleAudio = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);
  return (
    <>
      <Box position="relative">
        <IconButton
          position="fixed"
          bottom={5}
          left={5}
          zIndex="1000"
          icon={
            isPlaying ? (
              <FaCompactDisc size="48px" color="#413F42" />
            ) : (
              <FaPlay color="black" />
            )
          }
          size={"lg"}
          // bgColor={"#776B5D"}
          bgColor={"white"}
          onClick={toggleAudio}
          borderRadius={"100px"}
          variant={""}
          color={"black"}
          _hover={{ bgColor: "#F4EAE0", color: "#E4CFC8" }}
          transform={`rotate(${isPlaying ? "360deg" : "0deg"})`}
          transition="transform 2s linear infinite"
        />
        <audio ref={audioRef} preload="auto" autoPlay={true} loop>
          <source src={song} type="audio/mpeg" />
        </audio>
        <Box
          w={{ base: "100vw", sm: "100vw", md: "438px", lg: "438px" }}
          backgroundImage={`url(${images[currentImageIndex]})`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          h={"100vh"}
          py={"20px"}
          px={"30px"}
          position={"relative"}
          color={"#212730"}
          style={{
            transition: "background-image 1s ease-in-out",
          }}
        >
          <Center>
            <Box
              position="absolute"
              bottom={14}
              textAlign={"center"}
              color={"white"}
            >
              <Heading fontSize={"24px"}>The Wedding Of</Heading>
              <Text
                fontSize={{ base: "24px", lg: "32px" }}
                lineHeight={"60px"}
                fontWeight={"bold"}
              >
                Rimba & Dewi
              </Text>
              <Text fontStyle={"italic"}>Minggu, 04 Februari 2024</Text>

              <Box
                px={"20px"}
                minWidth={"320px"}
                maxWidth={"438px"}
                py={"20px"}
              >
                <Text fontSize={"10px"} fontWeight={"bold"}>
                  &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                  menciptakan pasangan-pasangan untukmu dari (jenis) dirimu
                  sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di
                  antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang
                  demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir.&quot;
                </Text>
                <Text>Q.S Ar Rum Ayat 21</Text>
              </Box>
            </Box>
          </Center>
        </Box>
        {/* <Dates />
          <Groom1 />
          <Connections />
          <Bride1 />
          <Events />
          <Gallery />
          <RSPV />
          <Quotes />
          <Gift />
          <Galery /> */}
      </Box>
    </>
  );
};

export default Landing;
