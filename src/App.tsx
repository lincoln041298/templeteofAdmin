import { Route, Routes } from "react-router-dom";
import { Student } from "./components/features/labs/student";
import MainLayout from "./components/Layout/MainLayout";
import { AddAccount, Help, Logout, Main, Profile, ResetPassword } from "./page";
import { Overview1 } from "./page/Dashboard";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard/overview1" element={<Overview1/>} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/addacount" element={<AddAccount />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
