import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialValues = {
  name: "",
  age: "",
  email: "",
  phone: "",
};

const initialErrors = {
  nameErr: "",
  ageErr: "",
  emailErr: "",
  phoneErr: "",
};

export const TaskPage = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [list, setList] = useState([]);

  const handleInput = () => {};
  const handleReset = () => {};
  const handleSubmit = () => {};

  return (
    <div>
      <h2>Input Form</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <TextField
                required
                onChange={handleInput}
                value={values.name}
                label={"Name"}
                name="name"
              />
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "red" }}>{errors.nameErr}</span>
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                required
                onChange={handleInput}
                value={values.age}
                label={"Age"}
                name="age"
              />
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "red" }}>{errors.ageErr}</span>
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                required
                onChange={handleInput}
                value={values.email}
                label={"Email"}
                name="email"
              />
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "red" }}>{errors.emailErr}</span>
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                required
                onChange={handleInput}
                value={values.phone}
                label={"Phone Number"}
                name="phone"
              />
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "red" }}>{errors.phoneErr}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div>
        <h2>List of entries</h2>
        {list.map((obj) => (
          <ul key={obj.name}>
            <li>{obj.name}</li>
            <li>{obj.age}</li>
            <li>{obj.email}</li>
            <li>{obj.phone}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
