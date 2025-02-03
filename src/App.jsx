import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout'
import Dashboard from './pages/layout/Dashboard';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
            {/* <Route path="/adduserPackage" element={<AdduserPackage />} />
            <Route path="/create" element={<GenerateCourse />} />
            <Route path="/topics" element={<ListTopics />} />
            <Route path="/viewcourse" element={<ViewOwnCourse />} />
            <Route path="/viewcertificate" element={<ViewCertificate />} />

            <Route path="/addrole" element={<AddRole />} />
            <Route path="/updaterole" element={<UpdateRole />} />
            <Route path="/category" element={<Category />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/faq" element={<FAQ/>} /> */} 
            </Route>
            </Routes>
            </BrowserRouter>
</>
  )
}

export default App