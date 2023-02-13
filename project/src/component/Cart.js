import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { List } from './List';

export default function Cart() {
  const [show, setShow] = useState(false);


  return (
    <>
      <Button variant="info" onClick={()=>setShow(!show)} className="me-2 bi bi-cart-check-fill">
      </Button>
      <Offcanvas show={show} onHide={()=> setShow(!show)} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Section</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <List/>
          <div className='text-end mt-2'>  <Button variant="danger"> Check Out
      </Button></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}