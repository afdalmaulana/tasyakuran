import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Dates() {
  const tasyakuranDate = new Date("2024-05-19T02:00:00Z");
  const resepsiDate = new Date("2024-01-08T11:00:00Z");

  const calculateCountdown = (targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [akadCountdown, setAkadCountdown] = useState(
    calculateCountdown(tasyakuranDate)
  );
  const [resepsiCountdown, setResepsiCountdown] = useState(
    calculateCountdown(resepsiDate)
  );

  useEffect(() => {
    const akadTimer = setInterval(() => {
      setAkadCountdown(calculateCountdown(tasyakuranDate));
    }, 1000);

    const resepsiTimer = setInterval(() => {
      setResepsiCountdown(calculateCountdown(resepsiDate));
    }, 1000);

    return () => {
      clearInterval(akadTimer);
      clearInterval(resepsiTimer);
    };
  }, [tasyakuranDate, resepsiDate]);

  return (
    <>
      <Box
        position="relative"
        px={"30px"}
        maxW={"438px"}
        bgColor={"#F4EAE0"}
        py={"100px"}
      >
        <Box textAlign={"center"}>
          <Stack spacing={4}>
            <Fade duration={2000} direction="down" cascade={true}>
              <Box bgColor={"black"} w={"200px"} mx={"auto"}>
                <Divider borderColor={"#F4EAE0"} height={"2px"} />
              </Box>
              <div className="font-bodyy text-[48px] font-bold">SAVE</div>
              <div className="font-beauty text-2xl font-semibold">The</div>
              <div className="font-bodyy text-[48px] font-bold">DATE</div>
            </Fade>

            <Box bgColor={"black"} w={"200px"} mx={"auto"}>
              <Divider borderColor={"#F4EAE0"} height={"2px"} />
            </Box>
            <Fade duration={800} direction="down" cascade={true}>
              <Heading
                className="font-bodyy font-light"
                fontSize={"16px"}
                mt={"32px"}
              >
                Remember our Big Day
              </Heading>
            </Fade>
            <Box mt={"24px"} gap={"10px"}>
              <Fade duration={2000} direction="down" cascade={true}>
                <Flex justifyContent={"space-between"}>
                  <Box width="30%" textAlign="center">
                    <Text fontSize={"32px"}>
                      {akadCountdown.days < 0 ? 0 : akadCountdown.days}
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"12px"}>
                      Days
                    </Text>
                  </Box>
                  <Box width="30%" textAlign="center">
                    <Text fontSize={"32px"}>
                      {akadCountdown.days < 0 ? 0 : akadCountdown.hours}
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"12px"}>
                      Hours
                    </Text>
                  </Box>
                  <Box width="30%" textAlign="center">
                    <Text fontSize={"32px"}>
                      {akadCountdown.days < 0 ? 0 : akadCountdown.minutes}
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"12px"}>
                      Minutes
                    </Text>
                  </Box>
                </Flex>
              </Fade>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
