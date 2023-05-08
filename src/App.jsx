import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { CharactersPage } from "./pages/CharactersPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyle } from "./base/GlobalStyle";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <SContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="characters" element={<CharactersPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SContainer>
    </>
  );
}

export default App;
