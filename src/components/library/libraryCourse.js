import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import Icon from './icon';
import Arrow from "./arrow";
import Action from "../core/action";

import AnimateHeight from 'react-animate-height';

class LibraryCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            closed: true,
            height: 0,
        };
    };

    handleCallback = function (closed) {
        let height = this.state.height == 0 ? 'auto' : 0;

        if (!closed) {
            document.getElementById(this.id).classList.add("library-course--selected");
        } else {
            document.getElementById(this.id).classList.remove("library-course--selected");
        };

        this.setState({
            closed,
            height,
        });
    }.bind(this);

     render() {
        this.id = `library-course-${this.props.id}`;
        this.closed = false;
        return (
            <div id={this.id} className="library-course">
                <div className="library-course--title-check">
                    <div className="library-course--title">{ this.props.title }</div>
                    { Icon("fas fa-check", "library-course--icon") }
                </div>
                <Arrow 
                    id={this.props.id}
                    callback={closed => this.handleCallback(closed)}
                    className="library-course--arrow"
                />
                <Action
                    id={this.props.id}
                    onClick={() => this.props.toggleEnrolled(this.props.id)}
                    className="library-course--action"
                />
                <AnimateHeight
                    duration={ 300 }
                    height={ this.state.height }
                >
                    <div className="library-course--description">
                        <label>Course Description:</label>
                        <p>{ this.props.description }</p>
                    </div>
                </AnimateHeight>
            </div>
        );
    };
};

export default connect(null, actions)(LibraryCourse);