import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaGift } from "react-icons/fa6";
import bca from "../../assets/logoBca.png";
import qris from "../../assets/qris.jpeg";

import { useState } from "react";
export default function Gift() {
  const [mandiriText, setMandiri] = useState("");
  const [bniText, setBni] = useState("");
  const toast = useToast();
  const copyMandiri = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMandiri(text);
        toast({
          title: "Success!",
          description: `${text} telah di salin.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setTimeout(() => {
          setMandiri("Salin Nomor Rekening");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  const copyBni = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setBni(text);
        toast({
          title: "Success!",
          description: `${text} telah di salin.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setTimeout(() => {
          setBni("Salin Nomor Rekening");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  return (
    <>
      <Box
        maxW={"438px"}
        // minHeight="200vh"
        bgColor={"#F4EAE0"}
        py={"50px"}
      >
        <Center>
          <Box textAlign={"center"} flexDirection="column">
            <Text letterSpacing={"8px"} className="font-bodyy">
              Pengislaman & Penamatan
            </Text>
            <Box>
              <div className="font-beauty text-[88px] text-[#8B7E74]">Gift</div>
            </Box>
            <Center mt={"14px"}>
              <FaGift size={"42px"} color="#8B7E74" />
            </Center>
          </Box>
        </Center>
        <Box
          textAlign={"center"}
          mt={"12px"}
          fontSize={"14px"}
          className="font-bodyy"
          px={"30px"}
        >
          <Text>Tanpa mengurangi rasa hormat,</Text>
          <Text mt={"8px"} className="font-bodyy">
            Bagi tamu undangan (Bapak/Ibu/Saudara/i) yang ingin memberikan tanda
            kasih, dapat melalui virtual account atau E-wallet di bawah ini:
          </Text>
          <Box
            mt={"10px"}
            display="flex"
            alignItems="center"
            flexDirection="column"
            fontSize={"16px"}
            fontWeight={"bold"}
          >
            <Image src={qris} w={"60%"} />
            <Text mt={"12px"}>KAIMUDDIN S</Text>
            <Text color="#8B7E74">7990480472</Text>
            <Button
              onClick={() => copyMandiri("7990480472")}
              borderRadius={"30px"}
              bgColor={"#776B5D"}
              fontSize={"12px"}
              p={"10px"}
              mt={"12px"}
              color={"white"}
              _hover={{ bgColor: "#776B5D" }}
            >
              {mandiriText === "7990480472"
                ? "Copied!"
                : "Salin Nomor Rekening"}
            </Button>
            <Image mt={"32px"} src={bca} w={"50%"} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
