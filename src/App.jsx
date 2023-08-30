import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from "./styles/theme";
import './styles/global.css';
import { About, Contact, Hero, Projects, Sidebar, Tech, MobileNav } from './components';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Sidebar active={active} setActive={setActive} setClicked={setClicked} />
      <MobileNav active={active} setActive={setActive} setClicked={setClicked} />
      <Box m={{base: "48px 0 0", md: "60px 0 0", lg: "0 0 0 72px"}}>
        <Hero setActive={!clicked && setActive} />
        <Box p={{base: "0 16px", lg: "0 90px", xl: "0 180px" ,'2xl': "0 320px"}}>
          <About setActive={!clicked && setActive} />
          <Tech setActive={!clicked && setActive} />
          <Projects setActive={!clicked && setActive} />
          <Contact setActive={!clicked && setActive} />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;
