import React, {Component} from "react";
import List from "./List";
import Title  from "./Title";
class Main extends Component{
    render(){
        return(
            <div>
                <Title text={"Tasks List"}></Title>
                <List listItems={["Wake up early", "Do yoga", "Meditation", "Study you course"]}></List>
                <List listItems={["One", "Two", "Three"]}></List>
            </div>
        )
    }
}
export default Main;