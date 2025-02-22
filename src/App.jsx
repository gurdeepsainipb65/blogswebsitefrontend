import Navbar from "./component/navbar";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Blogspage from "./component/blogs";
import Form from "./component/form";
import Loginpage from "./pages/loginpage";
import Signuppage from "./pages/signuppage";
import Protectedroute from "./authentication/protectedroute";
import Yourblog from "./component/yourblog";
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
          <Route path="/yourblog" element={<Yourblog/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
