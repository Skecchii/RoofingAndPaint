import { Routes, Route } from 'react-router-dom'

import Home from "./pages/HomePage"
import Services from "./components/Services"
import Contact from "./components/ContactForm"
import About from "./components/AboutUs"

import PaintingIfno from "./components/services/Painting"
import RoofingInfo from "./components/services/Roofing"

import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"

import styled from 'styled-components'

import Theme from './components/darkmode/theme'



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`

const MainContent = styled.div`
  flex-grow: 1;
`


function App() {
  return (
    <>
      <Theme>
        <AppContainer>
          <MainContent>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/services/roofing' element={<RoofingInfo />} />
              <Route path='/services/painting' element={<PaintingIfno />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Theme>
    </>
  );
}

export default App;
