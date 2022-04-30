import { createGlobalStyle } from "styled-components";
import { AllProviders } from "../components/AllProviders";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <AllProviders>
        <GlobalStyle />
        <Component {...pageProps} />
      </AllProviders>
    </>
  );
}
