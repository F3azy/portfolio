import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from "./styles/theme";
import { About, Contact, Hero, Projects, Sidebar, Tech } from './components';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
      <Box>
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
