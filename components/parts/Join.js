import React from 'react';
import ReactDOM from 'react-dom';

export default class Join extends React.Component{

	join(){
		var memberName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name: memberName});	
	}

	render(){
		return (
			<form action="javascript:void(0)" onSubmit={this.join.bind(this)}>
				<label>Full name</label>
				<input ref="name" className="form-control" placeholder="Enter user name" required/>
				<button className="btn btn-primary">Join</button>
			</form>
		);
	}	
}