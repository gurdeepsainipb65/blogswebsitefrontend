import Navbar from "./component/navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Blogspage from "./component/blogs";
import Form from "./component/form";
import Loginpage from "./pages/loginpage";
import Signuppage from "./pages/signuppage";
import Protectedroute from "./authentication/protectedroute";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogspage />}></Route>
          <Route
            path="/postblogs"
            element={
              <Protectedroute>
                <Form />
              </Protectedroute>
            }
          ></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
