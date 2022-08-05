import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Student } from "./components/features/labs/student";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <div className="">
      <MainLayout>
        <Student />
      </MainLayout>
    </div>
  );
}

export default App;
