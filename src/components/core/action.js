import React, { Component } from "react";

export default class Action extends Component {

    constructor(props) {
        super(props);
    }

    handleAction = function() {
        this.props.onClick();

        if (this.props.enrolled) {
            document.getElementById(this.id).classList.add("action-remove");
        } else {
            document.getElementById(this.id).classList.remove("action-remove");
        }
    }.bind(this);

    render() {
        this.id = `action-${this.props.id}`;

        return (
            <a 
                id={this.id}
                onClick={() => this.handleAction()}
                className={`${this.props.className} action`}>
            
            </a>
        )
    };
};