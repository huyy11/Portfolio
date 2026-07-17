import "../styles/Sidebar.css";
import profile from "../assets/profile.jpg";

function Sidebar() {
  return (
    <aside className="sidebar">

      <img src={profile} alt="Profile" className="profile" />

      <h2>Kang Sivmey</h2>

<div className="socials">
  <a
    href="https://www.facebook.com/share/1F5ddge1qb/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-facebook"></i>
  </a>

  <a
    href="https://www.instagram.com/hanhan.ursbbe?igsh=MXBuMnd5dDhseW0ydg%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-instagram"></i>
  </a>

  <a
    href="https://t.me/huyhuyhan"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-telegram"></i>
  </a>
</div>

      <nav>
  <a href="#home">
    <i className="bi bi-house"></i>
    Home
  </a>

  <a href="#about">
    <i className="bi bi-person"></i>
    About
  </a>

  <a href="#resume">
    <i className="bi bi-file-earmark-person"></i>
    Resume
  </a>

  <a href="#contact">
    <i className="bi bi-envelope"></i>
    Contact
  </a>
</nav>
    </aside>
  );
}

export default Sidebar;