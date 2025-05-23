import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomeContent from './pages/HomeContent';
import ServicesContent from './pages/ServicesContent';
import SoftwareContent from './pages/SoftwareContent';
import StakeholdersContent from './pages/StakeholdersContent';
import CartContent from './pages/CartContent';
import Notifications from "./pages/Notifications";
import ContactContent from './pages/ContactContent';
import PaymentContent from './pages/PaymentContent';
import Receipt from './pages/Receipt';
import NotificationBell from "./components/Notifications/NotificationBell";
import NotificationsPage from "./components/Notifications/NotificationsPage";
import './App.css';

import logo from "./assets/img/3D logo no background.jpeg";

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="IWB Logo" className="logo-img" />
            <div className="logo-text">IWB</div>
          </div>
          <ul className="nav-links boxed-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
            <li><NavLink to="/software" className={({ isActive }) => isActive ? 'active' : ''}>Software Tools</NavLink></li>
            <li><NavLink to="/stakeholders" className={({ isActive }) => isActive ? 'active' : ''}>Stakeholders</NavLink></li>
            <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>
        </nav>
        <NotificationBell />
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/services" element={<ServicesContent />} />
          <Route path="/software" element={<SoftwareContent />} />
          <Route path="/stakeholders" element={<StakeholdersContent />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact" element={<ContactContent />} />
          <Route path="/payment" element={<PaymentContent />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 - Page Not Found</h2>} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 IWB | <a href="mailto:info@iwb.co.ls">info@iwb.co.ls</a></p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}

export default App;
