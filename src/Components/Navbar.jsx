import { useEffect, useState } from "react";

const Navbar = () => {
  const [useDark, setUseDark] = useState(localStorage.theme === "dark" ? true : false)

  const darkHandler = () =>{
    setUseDark((prevState)=>!prevState)
  }

  useEffect(()=>{
    useDark ? localStorage.setItem("theme","dark") : localStorage.setItem("theme","light")
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    console.log(useDark)
  },[useDark])

  return (
    <nav className="h-16 text-xl border-none flex flex-row items-center gap-8 px-20">
      <img
        src="/logo/JoshLeeRecipe_DarkTheme.svg"
        className=" mr-44 w-52 h-8"
      />
      <input type="search" className="outline-none w-80 h-7 border px-3 text-xs focus:outline-primary_color focus:border-none"/>
      <div className="text-xs h-1/2 w-20 flex items-center justify-center mx-12  hover:cursor-pointer dark:text-white">
        New Recipe
      </div>
      <a className="border-2 cursor-pointer px-5 py-2.5 bg-primary_color text-xs text-white rounded-3xl 
      hover:bg-white hover:text-primary_color">Login</a>
      <a  className="border-2 cursor-pointer px-6 py-2.5 bg-white text-xs text-primary_color rounded-3xl hover:bg-primary_color 
      hover:text-white">Sign In</a>
      <button className="text-gray_black dark:text-white" onClick={darkHandler}>{useDark ? "Light Mode" : "Dark Mode"}</button>
    </nav>
  );
};

export default Navbar;
