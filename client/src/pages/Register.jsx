import React from "react";
import { useContext } from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import Logo from "../assets/login.svg";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      {/* <div class="p-30 d-flex align-content-end flex-wrap">
        <div>
          <img src={Logo} alt="Register" width="400" />
        </div> */}
        <Form onSubmit={registerUser} width="400">
          <Row
            style={{
              height: "100vh",
              justifyContent: "center",
              paddingTop: "20%",
            }}
          >
            <Col xs={6}>
              <Stack gap={3}>
                <h2>Register</h2>

                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) =>
                    updateRegisterInfo({ ...registerInfo, name: e.target.value })
                  }
                  value={registerInfo.name}
                />
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    updateRegisterInfo({ ...registerInfo, email: e.target.value })
                  }
                  value={registerInfo.email}
                />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    updateRegisterInfo({
                      ...registerInfo,
                      password: e.target.value,
                    })
                  }
                  value={registerInfo.password}
                />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isRegisterLoading}
                >
                  {isRegisterLoading ? "Creating your account..." : "Register"}
                </Button>

                {registerError?.error && (
                  <Alert variant="danger">
                    <b>{`Error status code: ${registerError?.status}`}</b>
                    <p>{registerError?.message}</p>
                  </Alert>
                )}
              </Stack>
            </Col>
          </Row>
        </Form>
    {/* </div> */}
    </>
  );
};

export default Register;