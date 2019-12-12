import React from "react";
import './like.css';

class Like extends React.Component{

	constructor(props) {
    	super(props);
   	 	this.state = {value: ''};

    	this.handleClick = this.handleClick.bind(this);
  	}


	handleClick(event) {
		this.props.changeLike(this.props.likes, this.props.localIndex);
	}


	render(){
		let likeImage;

		if (this.props.like === false) {
			likeImage=(<img
				src={require("../../../../../images/not-like.png")}
				onClick={this.handleClick}
				alt="not like"/>);
		} else {
			likeImage=(<img
				src={require("../../../../../images/like.png")}
				onClick={this.handleClick}
				alt="like"/>);
		}

		return (
			<div className="Post-like-interaction">
				{likeImage}
			</div>
		);
	}   
}
export default Like;