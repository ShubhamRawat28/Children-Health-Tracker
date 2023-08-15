import { Route, Routes } from "react-router-dom";
import Main from "./scenes/main";
import Signup from "./scenes/signup";
import Login from "./scenes/login";

function App() {
	const user = localStorage.getItem("token");
	console.log(user);
	return (
      <Routes>
        {user ? (
          <Route path="*" element={<Main />} />
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
	);
}

export default App;