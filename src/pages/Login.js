import React, { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { logIn } from "../helpers/Connector";
import AppContext from "../context/App.context";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../util/routes";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { setLoggedInUser } = useContext(AppContext);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = formData;
        setLoading(true);
        if (username.trim() !== "" && password.trim() !== "") {
            logIn(username, password)
                .then((user) => {
                    setLoggedInUser(user);
                    navigate(ROUTES.HOME);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    };

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        name="username"
                        placeholder="Enter username"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button type="submit" disabled={loading}>
                    {loading ? "Signing in.." : "Sign in"}
                </Button>
            </Form>
            <br />
            <a href="https://dummyjson.com/users" target="_blank" rel="noreferrer" className="mt-5">
                Get test credentials here
            </a>
        </Container>
    );
}

export default Login;
