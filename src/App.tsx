import { Header } from "./Components/Header/Header";
import { InputWord } from "./Components/InputWord/InputWord";
import { WordDetails } from "./Components/WordDetails/WordDetails";
import { useWordStore } from "./Store/useWordStore";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { LoadingComponent } from "./Components/LoadingComponent/LoadingComponent";
import { ErrorComponent } from "./Components/ErrorComponent/ErrorComponent";

function App() {
  const data = useWordStore((state) => state.wordData);
  const isLoading = useWordStore((state) => state.isLoading);
  const isError = useWordStore((state) => state.isError);
  const theme = useWordStore((state) => state.theme);

  if (isLoading)
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <InputWord />
        <LoadingComponent />
      </ThemeProvider>
    );

  if (isError)
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <InputWord />
        <ErrorComponent />
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <InputWord />
      {data ? <WordDetails result={data} /> : null}
    </ThemeProvider>
  );
}

export default App;

/* console.log(useTheme)

  useEffect(() => {
    globalStyles();
  }, []);

  if (isLoading) {
    return (
      <div className={useTheme}>
        <Header />
        <InputWord />
        <p style={{ textAlign: "center" }}>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={useTheme}>
        <Header />
        <InputWord />
        <p style={{ textAlign: "center" }}>Sorry. We cant find the word!</p>
      </div>
    );
  }

  if (data) {
    return (
      <div className={useTheme}>
        <Header />
        <InputWord />
        <WordDetails result={data} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className={useTheme}>
        <Header />
        <InputWord />
        <p style={{ textAlign: "center" }}>Search new Word</p>
      </div>
    );
  } */
