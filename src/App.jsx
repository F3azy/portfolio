import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from "./styles/theme";
import { About, Contact, Hero, Projects, Sidebar, Tech } from './components';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
      <Box m={{base: "48px 0", md: "0 0 0 72px"}} border={"1px solid red"}>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </Box>
    </ChakraProvider>
  )
}

export default App;
