
import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/EmployeeTable.scss";

function EployeeTable() {
  const [data, setData] = useState([]);

  async function userData() {
    let response = await axios("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
    let res = await response.data;
    setData(res);
    console.log(res);
  }
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="App">
        <div className="tableHeadlines"> <h2>Our Employee Details are here!!</h2> </div> 
      <table>   
        <tbody>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Age</th>
            <th>Date Of Birth</th>
            {/* <th>Image</th> */}
          </tr>
        </tbody>

        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.contactNumber}</td>
            <td>{item.age}</td>
            <td>{item.dob}</td>
            {/* <td>
              <img src={item.img} alt="" height={100} />
            </td> */}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default EployeeTable;
