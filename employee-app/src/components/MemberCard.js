import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemberCard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Member Card</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {employees.map((employee) => (
          <div key={employee._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px' }}>
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Joining Date: {new Date(employee.joiningDate).toLocaleDateString()}</p>
            <p>Designation: {employee.designation}</p>
            <p>Contact: {employee.contact}</p>
            {employee.workProfile && (
              <img src={`http://localhost:5000/uploads/${employee.workProfile}`} alt="Work Profile" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;
