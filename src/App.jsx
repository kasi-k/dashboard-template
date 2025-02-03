import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout'
import Dashboard from './pages/layout/Dashboard';
import OnlineEnquiry from './pages/layout/OnlineEnquiry';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/online-enquiry" element={<OnlineEnquiry/>} />
            </Route>
            </Routes>
            </BrowserRouter>
</>
  )
}

export default App