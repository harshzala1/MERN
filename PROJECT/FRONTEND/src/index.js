import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import DetailFaculty from './pages/DetailFaculty';
import AddFaculty from './pages/AddFaculty';
import AddStudent from './pages/AddStudent'
import Student from './pages/Student';
import DetailStudent from './pages/DetailStudent';
import UpdateFaculty from './pages/UpdateFaculty';
import UpdateStudent from './pages/UpdateStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty/:id" element={<DetailFaculty />} />
        <Route path="/student/:id" element={<DetailStudent />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/add" element={<AddFaculty />} />
        <Route path="/student/add" element={<AddStudent/>} />
        <Route path="/students/:id" element={<UpdateStudent/>}/>
        <Route path="/facultys/:id" element={<UpdateFaculty/>}/>


      </Route>
    </Routes>
  </BrowserRouter>
);
