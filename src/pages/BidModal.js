import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'

const BidModal = (props) => {
  
  const { handleClose, show, placeBid, price, name} = props;
  const [bid,setBid] = useState();
  
  const bidPressed = () => {
    if(isNaN(bid)) {
        alert('please enter number')
    } else{
        handleClose();
        placeBid(bid);
    }
  }


  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>Place Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Bid Price</Form.Label>
            <Form.Control type="text" placeholder={price} value={bid} onChange={e => setBid(e.target.value)} />
            <Form.Text className="text-muted">
            Enter bid for { name }
            </Form.Text>
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button variant="primary" onClick={bidPressed}>Place Bid</Button>
        </Modal.Footer>
    </Modal>
    
  )
}

export default BidModal