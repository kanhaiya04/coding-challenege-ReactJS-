import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "./Row";
import "./Table.css";
import Modal from "react-bootstrap/Modal";
import leadsContext from "../../content/leads/leadsContent";
import AddLead from "./AddLead";
import Button from "react-bootstrap/Button";

function Tables() {
  
  const [data, setData] = useState({
    Name: "",
    email: "",
    Source: "",
    Status: "",
    date: "",
    Time: "",
    createdAt: "",
    updatedAt: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { leadsData, addLead } = useContext(leadsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addLead(
      data.Name,
      data.email,
      data.Source,
      data.Status,
      data.date,
      data.Time,
      data.createdAt,
      data.updatedAt
    );
    setData({
      Name: "",
      email: "",
      Source: "",
      Status: "",
      date: "",
      Time: "",
      createdAt: "",
      updatedAt: "",
    });
    handleClose();
  };

  

  return (
    <>
      <Button onClick={handleShow}>Add</Button>
      <AddLead />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Lead</Modal.Title>
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
          <Button variant="primary" onClick={handleSubmit}>
            Add Lead
          </Button>
        </Modal.Footer>
      </Modal>

      <Table responsive>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Source</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead) => {
              return <Row data={lead} />;
            })}
          </tbody>
        </table>
      </Table>
    </>
  );
}

export default Tables;
