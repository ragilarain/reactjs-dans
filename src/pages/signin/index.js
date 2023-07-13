import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import FormSignIn from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/action";

function PageSignin() {
  const navigate = useNavigate();
  const disaptch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`/auth/signin`, form);
      setIsLoading(false);
      disaptch(userLogin(res.data.data.token));
      navigate("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        type: "danger",
        message: err ?? "Internal Server Error",
      });
    }
  };
  return (
    <Container>
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text=center">Form Signin</Card.Title>
          <FormSignIn
            form={form}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
export default PageSignin;
