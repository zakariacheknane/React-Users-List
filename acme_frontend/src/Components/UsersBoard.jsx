import React, { useEffect, useState } from "react";
import { UserItem } from "./UserItem";
import search_icon from "../Assets/search.png";
import "./UsersBoard.css";

export const UsersBoard = () => {
   // State variables
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 6;
  // Fetch user data based on search term
  useEffect(() => {
    fetchUsers();
  }, [searchTerm]);
   // Function to fetch users from the API
  const fetchUsers = async () => {
    let url = `http://localhost:3001/users?search=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
   // Calculate the index range for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
   // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container py-3">
        <div className="row text-center text-white">
            <div className="col-lg-8 mx-auto">
                <h1 className="display-4">Users List</h1>
            </div>
        </div>
      </div>
        
      <div className="top-bar ">
        <input
          type="text"
          className="firstNameInput"
          placeholder="Enter FirstName"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} /> 
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="container">
      <div className="row text-center"></div>
        {currentUsers.map((user, index) => (
          <UserItem
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            image={user.image}
            gender={user.gender}
          />
        ))}
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(users.length / usersPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    index + 1 === currentPage ? "active" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                </li>)
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
