import React, { Component } from "react";

export default class Arrow extends Component {  

    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    };

    toggleArrowDirection = function () {
        this.props.callback(this.state.status);

        if (this.state.status) {
            document.getElementById(this.id).classList.remove("arrow-closed");
        } else {
            document.getElementById(this.id).classList.add("arrow-closed");
        };

        this.setState({ status: !this.state.status });
    }.bind(this);

    render() {
        this.id = `arrow-${this.props.id}`;
        return (
            <a onClick={() => this.toggleArrowDirection()} className={`${this.props.className} arrow`} id={this.id}></a>
        );
    };
};