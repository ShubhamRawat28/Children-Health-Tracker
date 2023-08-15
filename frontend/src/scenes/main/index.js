import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import Calendar from "../calendar/calendar";
import Sleep from "../sleep";
import Chat from "../../components/Chat";
import Height from "../height";
import Weight from "../weight";
import Food from "../food";
import FAQ from "../faq";

const Main = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/sleep" element={<Sleep />} />
                <Route path='/height' element={<Height />} />
                <Route path='/weight' element={<Weight />} />
                <Route path='/food' element={<Food />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/chat' element={<Chat />} />
                {/* <Route path="/test" element={<Test />} /> */}
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Main;