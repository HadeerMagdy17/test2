import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function UsersList() {
  let [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  let [userId, setUserId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setUserId(id);
  };

  let getUsers = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/users");
      setUsers(response?.data?.users);
    } catch (error) {
      console.log(error);
    }
  };
  let deleteUser = async (id) => {
    // alert("delete user");
    try {
      let response=await axios.delete(`https://dummyjson.com/users/${userId}`);
     console.log(response)
     handleClose()
     toast.success("deleted successfully")
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
    <ToastContainer/>
      <div className="d-flex justify-content-between p-3">
        <h3>Users list</h3>
        <button className="btn btn-warning text-white">Add New User</button>
      </div>
      <hr />
      <div className="p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index) => (
              <tr key={index}>
                <th scope="row">
                  <img className="w-25" src={user.image} />
                </th>
                <th scope="row">{user.firstName}</th>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td className="text-warning p-3 ">
                  <FaUserEdit className="mx-2" />
                  <FaTrashAlt onClick={() => handleShow(user.id)} />
                  {/* delete modall */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      Are you sure you need to delete this user!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={deleteUser}>
                        Delete
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        No
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  {/* delete modall */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
