import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import leadsContext from "../../content/leads/leadsContent";
import "./Table.css";
const Row = (props) => {
  const { deleteLead, updateLead } = useContext(leadsContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    id:props.data.id,
    Name: props.data.Name,
    email: props.data.email,
    Source: props.data.Source,
    Status: props.data.Status,
    date: props.data.date,
    Time: props.data.Time,
    createdAt: props.data.createdAt,
    updatedAt: props.data.updatedAt,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateLead(
      data.id,
      data.Name,
      data.email,
      data.Source,
      data.Status,
      data.date,
      data.Time,
      data.createdAt,
      data.updatedAt
    );
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={data.Name}
                className="form-control"
                id="Name"
                name="Name"
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={data.email}
                className="form-control"
                id="email"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Source
              </label>
              <input
                type="text"
                value={data.Source}
                className="form-control"
                id="Source"
                onChange={handleChange}
                name="Source"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Status
              </label>
              <input
                type="text"
                value={data.Status}
                className="form-control"
                id="Status"
                onChange={handleChange}
                name="Status"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control"
                id="date"
                value={data.date}
                onChange={handleChange}
                name="date"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Time
              </label>
              <input
                type="text"
                value={data.Time}
                className="form-control"
                id="Time"
                onChange={handleChange}
                name="Time"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                CreatedAt
              </label>
              <input
                type="text"
                value={data.createdAt}
                className="form-control"
                id="createdAt"
                onChange={handleChange}
                name="createdAt"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                UpdatedAt
              </label>
              <input
                type="text"
                className="form-control"
                value={data.updatedAt}
                id="updatedAt"
                onChange={handleChange}
                name="updatedAt"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <tr>
        <th scope="row">{props.data.id}</th>
        <td>{props.data.Name}</td>
        <td>{props.data.email}</td>
        <td>{props.data.Source}</td>
        <td>{props.data.Status}</td>
        <td>{props.data.date}</td>
        <td>{props.data.Time}</td>
        <td>{props.data.createdAt}</td>
        <td>{props.data.updatedAt}</td>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => deleteLead(props.data.id)}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item onClick={handleShow}>Update</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </tr>
    </>
  );
};

export default Row;
