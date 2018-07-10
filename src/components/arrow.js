import React, { Component } from "react";

export default class Arrow extends Component {  

    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    };

    toggleArrowDirection = function () {
        if (this.state.status) {
            document.getElementById("arrow").classList.remove("arrow-closed");
        } else {
            document.getElementById("arrow").classList.add("arrow-closed");
        };

        this.setState({ status: !this.state.status });
    }.bind(this);

    render() {
        return (
            <a onClick={() => this.toggleArrowDirection()} className={`${this.props.className} arrow`} id="arrow"></a>
        );
    };
};