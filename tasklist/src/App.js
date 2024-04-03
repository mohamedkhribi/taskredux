
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/AddUser' element={<AddUser/>}/>
        <Route path='/UpdateUser/:id' element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
