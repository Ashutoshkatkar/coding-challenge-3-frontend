import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [data, setData] = useState([]);
  const [showdata, setShowdata] = useState(false);
  useEffect(() => {
    //   fdata();
    axios
      .get("https://csb-yo4h5j-qh5zkbo4z-ashutoshkatkar.vercel.app/")
      .then(function (response) {
        console.log(response);
        setData(response.data);
        setShowdata(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1>Hello </h1>
      <h2>this data is fetched from nodejs backend</h2>
      {showdata ? (
        <>
          <h1>name is:{data.employee.name}</h1>
          <h2>ID is :{data.employee.id}</h2>
          <p>Salary is:{data.employee.salary}</p>
        </>
      ) : (
        "no"
      )}
    </div>
  );
}
