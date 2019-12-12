import React from "react";
import './addComment.css';

class AddComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    generateKey(lastKey) {
        return ++lastKey;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value !== '') {
            this.props.addComment(
                this.props.comments,
                this.generateKey(this.props.comments.length),
                this.state.value,
                this.props.localIndex);
            this.setState({value: ''});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.value !== this.state.value) {
            return true;
        } else if (nextProps.post === this.props.post) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="Post-add-comment">
                <form onSubmit={this.handleSubmit}>
                    <span className="Post-comment">
                        <input
                            onChange={this.handleChange}
                            value={this.state.value}
                            type="text"
                            placeholder="Aggiungi un commento..."/>
                    </span>
                    
                    <span className="Post-add">
                        <input type="submit" value="Pubblica"/>
                    </span>
                </form>
            </div>
        );
    }
}
export default AddComment;