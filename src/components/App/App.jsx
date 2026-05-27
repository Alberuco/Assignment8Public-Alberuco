import './App.css'
import Navigation from "../Navigation/Navigation"
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

// Imports of the Home, Login, Signup, PageNotFound
import HomePage from "../../pages/HomePage"
import LoginForm from "../../forms/LoginForm"
import SignupForm from "../../forms/SignupForm"
import PageNotFound from "../../pages/PageNotFound"
import Profile from "../../pages/Profile"


export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>PlateScout</h1>

      <Routes>
        {/* Added page routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
