import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export function AllProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      Provider Here!
      {children}
    </ThemeProvider>
  );
}
