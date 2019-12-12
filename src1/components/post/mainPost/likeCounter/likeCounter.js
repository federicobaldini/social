import React from "react";
import './likeCounter.css';

class LikeCounter extends React.Component{

	shouldComponentUpdate(nextProps, nextState) {
  		if (nextProps.likes === this.props.likes)
  			return false;
  		return true;
  	}

	render() {
		const listLikesByPeople = this.props.likes;
		const numberOfLikes = listLikesByPeople.length;

		return (
			<div className="Post-like-counter">
				<span>
					Piace a
				</span>

				<span className="Post-last-like">
					<img
						src={require("../../../../images" + listLikesByPeople[numberOfLikes - 1].photo)}
						align="middle"
						alt="icon"/>
				</span>

				<span>
					e <strong>ad altri {numberOfLikes}</strong>
				</span>
			</div>
		);
	}   
}
export default LikeCounter;