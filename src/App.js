import NavBar from "./NavBar/NavBar";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import React, { useState } from "react";
import Main from "./Main/Main";
function App() {
  const [isOpen, setOpen] = useState(false);
  function openCloseNav() {
    setOpen(!isOpen);
  }
  return (
    <div className="">
      <header className="sticky top-0">
        <NavBar openCloseNav={openCloseNav} className="	" />
      </header>
      <Main />
    </div>
  );
}

export default App;
{
  /* <div></div>
<div className="z-0">
  <header className="sticky top-0">
    <NavBar openCloseNav={openCloseNav} className="	" />
  </header>
  <main className="">
    <MainContent />
  </main>
  <footer className="container mx-auto">
    <Footer />
  </footer>
</div> */
}
