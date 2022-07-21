import React, { useState } from "react";

import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Card title="Đăng nhập">
        <span className="p-float-label">
          <InputText
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.value);
            }}
          />
          <label htmlFor="username">Username</label>
        </span>
        <span className="p-float-label">
          <InputText
            id="password"
            value={password}
            onChange={(e) => {
              setUsername(e.value);
            }}
          />
          <label htmlFor="password">Password</label>
        </span>
      </Card>
    </div>
  );
};

export default Login;
