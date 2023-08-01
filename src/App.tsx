import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screen/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingContextProvider, useContextLoading } from "./common/Context/loadingContext";
import { Loading } from "./common/loading";
import NavbarLine from "./common/Navbar/Header";

const queryClient = new QueryClient();
function App() {
  const {value} = useContextLoading();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
          <Loading isShow={value} />
          <NavbarLine />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<CartScreen />} />
              </Routes>
            </BrowserRouter>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
