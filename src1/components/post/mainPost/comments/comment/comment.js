import React from "react";
import './comment.css';

class Comment extends React.Component{

	shouldComponentUpdate(nextProps, nextState) {
  		if (nextProps.nickname === this.props.nickname
  			&& nextProps.comment === this.props.comment)
  			return false;
  		return true;
  	}

	render() {
		const nickname = this.props.nickname;
		const comment = this.props.comment;

		return (
			<div className="Post-caption">
				<strong>{nickname}</strong> {comment}
			</div>
		);
	}   
}
export default Comment;