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
import Landing1 from "../../assets/landing-1.png";
import Landing2 from "../../assets/landing-2.png";
import Landing3 from "../../assets/covers.png";
import song from "../../assets/song.mp3";
import Event from "./Event";
import Gallery from "./Gallery";
import Person1 from "./Person1";
import Person2 from "./Person2";
import Person3 from "./Person3";
import Gift from "./Gift";
import Quotes from "./Quotes";
import Family from "./Family";
import Dates from "./Dates";

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
              <FaCompactDisc size="48px" color="white" />
            )
          }
          size={"lg"}
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
        <Box
          w={{ base: "100vw", sm: "100vw", md: "438px", lg: "438px" }}
          backgroundImage={`url(${images[currentImageIndex]})`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          h={"800px"}
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
              <div className="font-beauty text-4xl mb-4">
                Pengislaman & Penamatan
              </div>
              <div className="text-[12px] mt-1">
                <ul className="gap-4 space-y-1 font-bodyy mt-1">
                  <li>Alhabsyi Abdullah Kaimuddin Dg Gading</li>
                  <li>Muhammad Raffasya Alfarizqi Dg Tombong</li>
                  <li>Nur Fauziyah Aprilia Dg Carammeng</li>
                </ul>
              </div>
              <div className="mt-2 italic font-bodyy text-xl font-bold">
                Minggu,19 Mei 2024
              </div>

              <Box
                px={"20px"}
                minWidth={"320px"}
                maxWidth={"438px"}
                py={"20px"}
              >
                <Text fontSize={"10px"} fontWeight={"bold"}>
                  &quot;Semoga ini menjadi berkah bagi anak dan keluarga, dan
                  semoga sedekah yang dikeluarkan menjadi penyelamat keluarga di
                  akhirat nanti.&quot;
                </Text>
              </Box>
            </Box>
          </Center>
        </Box>
        <Dates />
        <Person1 />
        <Person2 />
        <Person3 />
        <Event />
        <Quotes />
        <Gift />
        <Gallery />
        <Family />
      </Box>
    </>
  );
};

export default Landing;
