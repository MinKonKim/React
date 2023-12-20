/**@jsxImportSource @emotion/react */

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Global, ThemeProvider, css, useTheme } from "@emotion/react";
import { themeLight, themeDark } from "./components/Theme";
import { useState } from "react";
import BookDetailPage from "./pages/BookDetailPage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";

// Global Style 적용하기
const Layout = ({ isDark, setIsDark }) => {
  const theme = useTheme();
  console.log("theme", theme);
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: ${theme.background};
            color: ${theme.text};
            transition-duration: 0.2s;
            transition-property: background-color, color;
          }
          a {
            color: ${theme.text};
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          min-height: 90vh;
        `}
      >
        <Outlet />
      </div>
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Routes>
          {/* 모든 경로에 적용 */}
          <Route
            path="/"
            element={<Layout isDark={isDark} setIsDark={setIsDark} />}
          >
            <Route index element={<SearchPage />} />
            <Route path="/book/:bookId/" element={<BookDetailPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
