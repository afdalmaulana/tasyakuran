import { AbsoluteCenter, Box, Divider, Heading, Text } from "@chakra-ui/react";

export default function Connections({ text }) {
  return (
    <>
      <Box
        position="relative"
        px={"30px"}
        bgColor={"#F4EAE0"}
        maxW={"438px"}
        py={"40px"}
      >
        <Box bgColor={"black"}>
          <Divider height={"2px"} />
        </Box>
        <AbsoluteCenter bg="#F4EAE0" px="4">
          {!text && <Heading>&</Heading>}
          {text && (
            <Text
              className="font-bodyy font-light"
              style={{ whiteSpace: "nowrap" }}
            >
              {text}
            </Text>
          )}
        </AbsoluteCenter>
      </Box>
    </>
  );
}
