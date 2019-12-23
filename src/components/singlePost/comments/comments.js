import React from "react";
import './comments.css';
import Comment from './comment/comment';

class Comments extends React.Component{

	constructor(props) {
	    super(props);

	    this.clickHandler = this.clickHandler.bind(this);
  	}

	clickHandler(event) {
		this.props.showMoreComments(true);
	}

	shouldComponentUpdate(nextProps, nextState) {
  		if (nextProps.comments === this.props.comments
  			&& nextProps.commentsState === this.props.commentsState)
  			return false;
  		return true;
  	}

	render() {
		let rows = [], index = 0;
		const commentsToShow = this.props.commentsState.commentsToShow;

		if (this.props.comments.length <= commentsToShow || this.props.commentsState.showMore === true) {
			this.props.comments.forEach(comment => {
				rows.push(<Comment
					key={index}
					nickname={comment.nickname}
					comment={comment.message}/>);
				index++
			});
		} else {
			rows.push(<input
				key={'button1'}
				type="button"
				value={"Mostra tutti e " + this.props.comments.length + " i commenti"}
				onClick={this.clickHandler}/>);
			for (index = this.props.comments.length - 1; index >= (this.props.comments.length - commentsToShow); index--) {
			  	rows.push(<Comment
			  		key={index}
			  		nickname={this.props.comments[index].nickname}
			  		comment={this.props.comments[index].message}/>);
			}
		}

		return (
			<div className="Post-comments">
				{rows}
			</div>
		);
	}   
}
export default Comments;