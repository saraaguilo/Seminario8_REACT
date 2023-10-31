import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateUser from './UpdateUser';
import CreateUser from './CreateUser';
import Users from './Users';
import UserProfile from './UserProfile'; // Importa UserProfile

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/update/:id' element={<UpdateUser />} />
          <Route path='/profile' element={<UserProfile />} /> {/* Ruta para UserProfile */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;