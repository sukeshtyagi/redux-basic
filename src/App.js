import React from "react";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="outer box-border w-fit px-1 m-6 flex justify-start items-center gap-48 border border-zinc-900 ">
      <HomeContainer />
      <HeaderContainer />
    </div>
  );
}

export default App;
