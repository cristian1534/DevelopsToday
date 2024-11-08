import React from "react";
import Link from "next/link";
import "./Header.css"; 

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <p className="navbar-brand">Country Challenge</p>
        <button className="navbar-toggler" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/countries">
                <h6 className="nav-link">Countries</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/populations">
                <h6 className="nav-link">Populations</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
