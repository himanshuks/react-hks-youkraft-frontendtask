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

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setErrors({
        ...errors,
        nameErr: "",
      });
    }

    if (name === "age") {
      setErrors({
        ...errors,
        ageErr: "",
      });
    }

    if (name === "email") {
      setErrors({
        ...errors,
        emailErr: "",
      });
    }

    if (name === "phone") {
      setErrors({
        ...errors,
        phoneErr: "",
      });
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleErrors = () => {
    var emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    var phonePattern = new RegExp("^[0-9]{10}$");

    if (values.name.length === 0) {
      setErrors({ ...errors, nameErr: "This is a required field" });
      return false;
    }

    if (values.name.length < 3 || values.name.length > 30) {
      setErrors({
        ...errors,
        nameErr: "Minimum 2 characters and maximum 30 characters are allowed",
      });
      return false;
    }

    if (values.age.length === 0) {
      setErrors({ ...errors, ageErr: "This is a required field" });
      return false;
    }

    if (values.age > 150) {
      setErrors({ ...errors, ageErr: "Age entered is more than 150" });
      return false;
    }

    if (values.email.length === 0) {
      setErrors({ ...errors, emailErr: "This is a required field" });
      return false;
    }

    if (!emailPattern.test(values.email)) {
      setErrors({ ...errors, emailErr: "Please enter valid email address" });
      return false;
    }

    if (values.phone.length === 0) {
      setErrors({ ...errors, phoneErr: "This is a required field" });
      return false;
    }

    if (!phonePattern.test(values.phone)) {
      setErrors({
        ...errors,
        phoneErr: "Please enter valid 10 digit phone number",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    let isValid = handleErrors();
    if (isValid) setList([...list, values]);
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors(initialValues);
  };

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
        &nbsp;&nbsp;&nbsp;
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
