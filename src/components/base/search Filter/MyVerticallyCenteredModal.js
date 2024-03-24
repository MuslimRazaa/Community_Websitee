import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [input4Value, setInput4Value] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3Value(event.target.value);
  };

  const handleInput4Change = (event) => {
    setInput4Value(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    // You can access all input values: selectedOption, searchValue, input1Value, input2Value, input3Value, input4Value
    // For example:
    console.log(selectedOption, searchValue, input1Value, input2Value, input3Value, input4Value);
    // Close the modal after handling submission
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SEARCH FILTER
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={handleOptionChange}>
              <option value="">All Bedrooms</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>

  <br></br>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={handleOptionChange}>
              <option value="">Price Range</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>
  <br></br>


          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={handleOptionChange}>
              <option value="">Property</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>
  <br></br>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Control type="text" placeholder="Key Words" value={input3Value} onChange={handleInput3Change} />
          </Form.Group>
  <br></br>

          <Form.Group controlId="exampleForm.ControlInputSearch">
            <Form.Control type="text" placeholder="Search" value={searchValue} onChange={handleSearchChange} />
          </Form.Group>

  <br></br>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='modal-filter-btn-sm' onClick={handleSubmit}>Search</Button>
        <Button className='modal-filter-btn-sm' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
