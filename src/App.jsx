import { Heading, Text } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cover from "./components/pages/Cover";
import Content from "./components/pages/Content";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Cover />}></Route>
        <Route path="/content" element={<Content />}></Route>
      </Routes>
      {/* <Heading>Hello, World!</Heading>
      <Text>Hello, World!</Text> */}
    </>
  );
}

export default App;
