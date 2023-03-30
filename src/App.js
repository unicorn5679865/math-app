import React from "react"
import Header from "./components/header"
import Footer from "./components/footer";
import MenuContainers from "./components/MenuContainers"


import { createGlobalStyle } from 'styled-components';
import Lesson from "./components/lesson";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 90%;


  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;
export default function App() {
  // return (

// class App extends React.Component {
//     render() {
        return (
            <>
            <GlobalStyles /> 
            <Header />
            {/* <MenuContainers /> */}
            <Lesson />
            <Footer />
            </>
        )
}

