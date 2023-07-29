import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HighLight from "./Components/HighLight";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto flex flex-col gap-20 justify-center">
      <Navbar/>
      <div className="w-auto h-[450px] flex flex-row gap-20 pl-8 overflow-x-hidden items-center">
        <div className="border-1 border-gray_black h-auto w-[460px] flex flex-col gap-4">
          <h1 className="text-[38px] font-semibold dark:text-white">Delicious Food & Recipes For Your Family</h1>
          <p className="text-base text-blue_black mb-4 dark:text-white">Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet nec ullamcorper sit.</p>
          <a className="text-sm font-medium cursor-pointer text-white bg-primary_color w-[136px] h-10 rounded-[20px] flex items-center justify-center">Sign Up Now</a>
        </div>
        <img src="/logo/Hero.svg" className="h-full w-auto relative left-20" alt="Home-Page-Hero"/>
      </div>
      <HighLight/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
