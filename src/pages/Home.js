import React from "react";
import { Container, Button } from "react-bootstrap";
import ReactLogo from "../logo.svg";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

  return (
    <Container className="text-center pt-5">
      <img src={ReactLogo} alt="Logo" className="w-25" />
      <h2>React app showing public & private routing</h2>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary me-3" onClick={() => navigate('/products')}>Our Products</Button>
        <Button variant="secondary" onClick={() => navigate('/about')}>About Us</Button>
      </div>
    </Container>
  );
}

export default Home;
