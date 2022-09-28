import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import { GlobalContext } from "./utils/Context";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { managerRoute, userRoute } from "./utils/ConditionalRoutes";
import Logout from "./pages/Auth/Logout";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Hotel from "./pages/HotelPage/Hotel";
import Payment from "./pages/Payment/Payment";
import { ToastContainer } from "react-toastify";
import Bookings from "./pages/Bookings/Bookings";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ menuOpen, setMenuOpen }}
    >
      <div className="App">
        <ToastContainer />
        <Router>
          <Header />
          <MainMenu />
          <Routes>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>

            <Route
              exact
              path="/dashboard"
              element={
                managerRoute ? <Dashboard /> : <Navigate to="/login" />
              }
            ></Route>

            <Route
              exact
              path="/"
              element={
                managerRoute || userRoute ? (
                  <Home />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>

            <Route path="/explore">
              <Route
                path=":location/:checkIn/:checkOut/:people"
                element={
                  managerRoute || userRoute ? (
                    <Explore />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />

              <Route
                path=""
                element={
                  managerRoute || userRoute ? (
                    <Explore />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Route>

            <Route
              exact
              path="/hotel/:id"
              element={
                managerRoute || userRoute ? (
                  <Hotel />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>

            <Route
              exact
              path="/payment/:hotelId/:roomId/:step"
              element={
                managerRoute || userRoute ? (
                  <Payment />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>

            <Route
              exact
              path="/bookings"
              element={
                managerRoute || userRoute ? (
                  <Bookings />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>

            <Route
              exact
              path="/profile"
              element={
                managerRoute || userRoute ? (
                  <Profile />
                ) : (
                  <Navigate to="/login" />
                )
              }
            ></Route>

          </Routes>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
