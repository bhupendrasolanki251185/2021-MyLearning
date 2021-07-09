import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from "./Components/Main";
// const arrList = ["Wake up early", "Do yoga", "Meditation", "Study you course"];
// const element = React.createElement("ol", null, arrList.map((item, indx) =>
//     React.createElement("li", {key: indx}, item)));

// const element = 
// <div>
//     <h1>Task List</h1>
//     <ol>
//         { arrList.map((item, indx) => 
//                                 <li key={indx}> {item} </li>) }
//     </ol>
// </div>

// class List extends Component{
//     render(){
//         return(
//         <ol>
//             { this.props.listItems.map((item, indx) => <li key={indx}> {item} </li>) }
//         </ol>
//         );
//     }
// }

// class Title extends Component{
//     render(){
//         return (
//             <h1>{this.props.text}</h1>
//         )
//     }
// }

// class Main extends Component{
//     render(){
//         return(
//             <div>
//                 <Title text={"Tasks List"}></Title>
//                 <List listItems={["Wake up early", "Do yoga", "Meditation", "Study you course"]}></List>
//                 <List listItems={["One", "Two", "Three"]}></List>
//             </div>
//         )
//     }
// }

ReactDOM.render(<Main/>, document.getElementById('root'));