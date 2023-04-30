import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { CharactersPage } from "./pages/CharactersPage";
import { NotFoundPage } from "./pages/NotFoundPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./base/GlobalStyle";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="characters" element={<CharactersPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </StyledContainer>
    </>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<MainPage offsetY={offsetY} scrollY={scrollY} />} />
  <Route path="/" element={<Layout offsetY={offsetY} scrollY={scrollY} />}>
    <Route path="/speech" element={<SpeechPage offsetY={offsetY} scrollY={scrollY} />} />
    <Route path="/actress" element={<ActressPage offsetY={offsetY} scrollY={scrollY} />} />
  </Route>
</Routes>; */
}
