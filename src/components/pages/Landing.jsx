import { Box, Center, Heading, IconButton, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
// import { IoPlayCircle } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import { BsFillDiscFill } from "react-icons/bs";
import Landing1 from "../../assets/landing-1.png";
import Landing2 from "../../assets/landing-2.png";
import Landing3 from "../../assets/covers.png";
import song from "../../assets/song.mp3";
import Dates from "./Dates";
import Event from "./Event";
import Gallery from "./Gallery";
import Person1 from "./Person1";
import Person2 from "./Person2";
import Person3 from "./Person3";
import Gift from "./Gift";
import Quotes from "./Quotes";
import Family from "./Family";

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
          bottom={20}
          left={20}
          zIndex="1000"
          padding={"6px"}
          icon={
            isPlaying ? (
              <FaCompactDisc size="48px" color="#413F42" />
            ) : (
              <FaCompactDisc size="48px" color="white" />
            )
          }
          size={"lg"}
          // bgColor={"#776B5D"}
          // bgColor={"white"}
          onClick={toggleAudio}
          borderRadius={"100px"}
          variant={""}
          color={"black"}
          _hover={{ color: "#E4CFC8" }}
          transform={`rotate(${isPlaying ? "360deg" : "0deg"})`}
          transition="transform 2s linear infinite"
        />
        <audio ref={audioRef} preload="auto" autoPlay={true} loop>
          <source src={song} type="audio/mpeg" />
        </audio>
        <div
          className="h-[100vh] max-w-[438px] bg-cover bg-center bg-no-repeat desktop:w-[438px] px-[30px] relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transition: "background-image 1s ease-in-out",
          }}
        >
          {/* <Box
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
        > */}
          <Center>
            <Box
              position="absolute"
              bottom={14}
              textAlign={"center"}
              color={"white"}
            >
              <Fade duration={2000} direction="down" cascade="true">
                <div className="font-beauty text-4xl mb-4">
                  Pengislaman & Penamatan
                </div>
                <div className="text-[12px] mt-1">
                  <Fade duration={2000} direction="down" cascade="true">
                    <ul className="gap-4 space-y-1 font-bodyy mt-1">
                      <li>Alhabsyi Abdullah Kaimuddin Dg Gading</li>
                      <li>Muhammad Raffasya Alfarizqi Dg Tombong</li>
                      <li>Nur Fauziyah Aprilia Dg Carammeng</li>
                    </ul>
                  </Fade>
                </div>
                <Text
                  fontSize={{ base: "24px", lg: "32px" }}
                  lineHeight={"60px"}
                  fontWeight={"bold"}
                ></Text>
                <div className="mt-2 italic font-bodyy text-xl font-bold">
                  Minggu,19 Mei 2024
                </div>
                {/* <Text fontStyle={"italic"}>Minggu,19 Mei 2024</Text> */}

                <Box
                  px={"20px"}
                  minWidth={"320px"}
                  maxWidth={"438px"}
                  py={"20px"}
                >
                  <Text fontSize={"10px"} fontWeight={"bold"}>
                    &quot;Semoga ini menjadi berkah bagi anak dan keluarga, dan
                    semoga sedekah yang dikeluarkan menjadi penyelamat keluarga
                    di akhirat nanti.&quot;
                  </Text>
                </Box>
              </Fade>
            </Box>
          </Center>
        </div>
        <Dates />
        <Person1 />
        <Person2 />
        <Person3 />
        <Event />
        <Quotes />
        <Gift />
        <Gallery />
        <Family />

        {/* </Box> */}
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
