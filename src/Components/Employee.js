import React, { useState, useEffect } from "react";
import "../Styles/Employee.scss";
import axios from "axios";

const Employee = () => {
  const [data, setData] = useState([]);
  
  async function userData() {
    let response = await axios.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
    let res = await response.data;
    setData(res);
    console.log(res);
  }

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className="employeePage">
        <h2>Our Employees Details</h2>
        <hr />
        <hr />

        {data &&
          data.map((item) => {
            return (
              <>
                <div className="container">
                  <div className="cardBox">
                    <div className="card">
                      <div className="count">{item.id}</div>
                      {/* <img src={item.imageUrl} /> */}
                      <h3>
                        {" "}
                        Name: {item.firstName} {item.lastName}
                      </h3>
                      <h4>D.O.B: {item.dob}</h4>
                      <h5>Age: {item.age}</h5>
                      <h5>Email: {item.email}</h5>
                      <h5>Phone: {item.contactNumber}</h5>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Employee;

// {
//   data && data.map(item=>{
//     return <>
//     <p>{item.name} </p>
//     <p>{item.id} </p>

//      </>

//   })
// }
