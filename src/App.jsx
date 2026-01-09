import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Entry from './pages/Entry.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Details.jsx';
import MoreDetail from './pages/MoreDetails.jsx';
import Confirm from './pages/Confirm.jsx';
import AdminHome from './pages/AdminHome.jsx';
import AdminDetails from './pages/AdminDetails.jsx';
import AdminConfirm from './pages/AdminConfirm.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Entry />} />
      <Route path='/home' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/moreDetail/:id' element={<MoreDetail />} />
      <Route path='/confirm' element={<Confirm />} />
      <Route path='/adminHome' element={<AdminHome />} />
      <Route path='/adminDetail' element={<AdminDetails />} />
      <Route path='/adminConfirm' element={<AdminConfirm />} />
    </Routes>
  );
}

export default App;
