import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from "./styles/theme";
import './styles/global.css';
import { About, Contact, Hero, Projects, Sidebar, Tech } from './components';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
      <Box m={{base: "48px 0", lg: "0 0 0 72px"}} border={"1px solid red"}>
        <Box p={{base: "0 12px", lg: "0 188px"}}>
          <Hero />
          <About />
          <Tech />
          <Projects />
          <Contact />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;
