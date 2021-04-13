import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import classes from "./ArticlePreview.module.scss";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log('window closed');
  };
  const handleShow = () => {
    setShow(true);
    console.log('window opend');
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={
          [classes["btn-del"], classes["btn-primary"]].join(' ')
        }
      >
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={
          classes["modal-dialog"]
        }
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Deleting article</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            no
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
