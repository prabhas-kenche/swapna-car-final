import React from "react"
import { Routes, Route } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/react";
import Login from "./components/Login"
import Home from "./components/Home" 
import EmployeeList from "./components/Employee/EmployeeList/EmployeeList"
import AssignOrder from "./components/AssignOrder/AssignOrder"
import AddEmployeeRole from "./components/AddEmployeeRole/AddEmployeeRole"
import AllCustomers from "./components/AllCustomers/AllCustomers"
import Payments from "./components/Payments/Payments"
import Cars from "./components/AllCars/Cars"
import PrivacyPolicy from "./components/Essentials/PrivacyPolicy/PrivacyPolicy"
import TermsAndConditions from "./components/Essentials/TermsAndConditions/TermsAndConditions"
import Faqs from "./components/Essentials/FAQ'S/Faqs"
import AboutUs from "./components/AboutUs/AboutUs"
import AddCar from "./components/EditCars/AddCar/AddCar"
import EditCar from "./components/EditCars/EditCar/EditCar"
import ContactUs from "./components/ContactUs/ContactUs"
import AllBookings from "./components/AllBookings/AllBookings"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Profile from "./components/Profile/Profile"
import NewOrders from "./components/NewOrders/NewOrders"
import BillInvoice from "./components/AllBookings/BillInvoice/BillInvoice"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import OverviewThatCar from "./components/AllCars/OverviewThatCar"
import { Bounce, ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/assignorder" element={<AssignOrder />} />
        <Route path="/addemployeerole" element={<AddEmployeeRole />} />
        <Route path="/allcustomers" element={<AllCustomers />} />
        <Route path="/allbookings" element={<AllBookings />} />
        <Route path="/allbookings/bill" element={<BillInvoice />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/allcars" element={<Cars />} />
        <Route path="/allcars/:carname" element={<OverviewThatCar />} />
        <Route path="/essentials/privacypolicy" element={<PrivacyPolicy />} />
        <Route
          path="/essentials/termsandconditions"
          element={<TermsAndConditions />}
        />
        <Route path="/essentials/faqs" element={<Faqs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/neworders" element={<NewOrders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editcars/addcar" element={<AddCar />} />
        <Route path="/editcars/editcar" element={<EditCar />} />
        <Route path="/payments/:paymentType" element={<Payments />} />
        <Route
          path="/payments/:paymentType/:subMenuType"
          element={<Payments />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <SpeedInsights />
    </>
  )
}

export default App
