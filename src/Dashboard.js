import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setdata] = useState({});
  const [id, setId] = useState(1);
  const Url = `https://reqres.in/api/users/${id}`;
  const fetchData = async () => {
    try {
      const response = await axios.get(Url);
      console.log(data);
      setdata(response.data.data);
    } catch (er) {
      setId(1);
      alert("not other users");
      console.log("not other users");
    }
  };
  const changeUser = () => {
    setId(id + 1);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="dash-button">
        <button onClick={changeUser}>next</button>
      </div>
      <div className="dash-content">
        <p>email: {data.email} </p>
        <p>name: {data.first_name} </p>
        <p>Id: {data.id}</p>
      </div>
      <img src={data.avatar} alt="img"></img>
    </div>
  );
};
export default Dashboard;
