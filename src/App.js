import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import ContactList from "./component/contacts/ContactList/ContactList";
import AddContact from "./component/contacts/AddContact/AddContact";
import EditContact from "./component/contacts/EditContact/EditContact";
import ViewContact from "./component/contacts/ViewContact/ViewContact";


let App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>} />
      <Route path={'/contacts/add'} element={<AddContact/>} />
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
      <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>


    </React.Fragment>
  );
}

export default App;
