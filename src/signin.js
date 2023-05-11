import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export default function Signin() {
    // const  handleLogin = async() =>{
    //     await service.post('/auth/signin',  {
    //       "name": 'yash.khare@neenopal.com',
    //       "password": 'Tableau@123',
    //       "site": {
    //         "contentUrl": 'Neenopalinc'
    //       }
    //     },{
    //     headers:{
    //       Accept: 'application/json',
    //      'Content-Type': 'application/json',
    //       // Authorization: 'Bearer ' + token // if you use token
    //   }
    //   })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //     let credentials = {
    //       "name": 'yash.khare@neenopal.com',
    //       "password": 'Tableau@123',
    //       "site": {
    //         "contentUrl": 'Neenopalinc'
    //       }
    //     };
    //     const auth_url = 'https://prod-useast-b.online.tableau.com/api/3.19/auth/signin';
    //     const username = 'yash.khare@neenopal.com';
    //     const password = 'Tableau@123';
    //     const site_id = 'Neenopalinc';

    //     const payload = {
    //       credentials: {
    //         name: username,
    //         password: password,
    //         site: {
    //           contentUrl: site_id
    //         }
    //       }
    //     };

    //     const headers = {
    //       Accept: 'application/json'
    //     };

    //     fetch(auth_url, {
    //       method: 'POST',
    //       headers: headers,
    //       body: JSON.stringify(payload)
    //     })
    //       .then(response => response.json())
    //       .then(data => console.log(data))
    //       .catch(error => console.error(error));

    //   }
  return (
    <div className="authentication-page">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
