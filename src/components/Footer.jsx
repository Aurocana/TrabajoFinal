import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const pages = ["popular", "ultimoslanzamientos", "Busqueda"];

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container maxWidth="xl">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Aurora Canales</h2>
          <nav>
            <ul className="list-inline mb-0">
              {pages.map((page) => (
                <li key={page} className="list-inline-item">
                  <Link
                    to={`/${page}`}
                    className="text-white text-decoration-none"
                  >
                    <Button variant="text" className="text-white mx-2">
                      {page}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
