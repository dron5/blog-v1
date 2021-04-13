import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import  Modal from 'react-bootstrap/Modal';

import classes from "./ArticlePreview.module.scss";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button 
        variant="primary"
        onClick={handleShow}
        className={classes["btn-del"]}
        >
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deleting article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this great article?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            yes
          </Button>
          <Button variant="primary">no</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;