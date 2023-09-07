import React from 'react'
// intergration du fichier CSS
import './formo.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 // composant de type function s'appel Formulo
const Formulo = () => {
  return (
    <div>
    // integration du formulaire à l'aide du composant de boostrap  ==> Form 
       <Form className='formulo'>
        <div className='name1'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      <div className='btn'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>  
    </div>
  )
}
// exportation du composant Formulo pour qu'il peut etre importer dans plusieur composant 
export default Formulo
