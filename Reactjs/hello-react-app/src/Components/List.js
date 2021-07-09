import React, {Component} from "react";
class List extends Component{
    render(){
        return(
        <ol>
            { this.props.listItems.map((item, indx) => <li key={indx}> {item} </li>) }
        </ol>
        );
    }
}

export default List;