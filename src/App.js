import "./styles.css";
import React from 'react';
import axios from 'axios';
class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: "abc@gmail.com",
      name: "sainath",
      imgUrl: "img",
      id : "2"
    }
  }
 
  async componentDidMount(){
    const response = await axios.get(`https://reqres.in/api/users/${this.state.id}`);
    const data = response.data.data;
    console.log(data);
    
    this.setState({
      email : data.email,
      name : data.first_name,
      imgUrl : data.avatar
    })
    
  }
  changeUser(ev){
    const ids = ev.target.value;
    console.log(ids);
    
    // this.setState({
    //   id:ids
    // });
  }
  render(){
    console.log("render");
    
    return(
      <div>
        <div className="dash-button">
        <button value="1" onClick={this.changeUser}>1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="100">100</button>
        </div>
        <div className="dash-content">
        <p>email: {this.state.email} </p>
        <p>name: {this.state.name} </p>
        </div>
        <img src={this.state.imgUrl} alt="img"></img>
      </div>
    )
  }
}

export default Dashboard;
