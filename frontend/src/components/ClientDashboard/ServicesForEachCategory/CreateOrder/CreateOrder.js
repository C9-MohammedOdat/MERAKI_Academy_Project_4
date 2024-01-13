import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const CreateOrder = (props) => {
    return (
      <>
       
       <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Order From {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Please Set Your Location</h6>
<iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
   style={{borderRadius:"7px" ,width:"100%"}} ></iframe>
   <br/>
   <br/>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h6>Notes</h6></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        
      </>
    );
}

export default CreateOrder