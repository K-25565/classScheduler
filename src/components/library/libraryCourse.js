import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import Icon from '../icon';
import Arrow from "../arrow";
import Action from "../action";
import ScheduleCourse from "../schedule/scheduleCourse";

class LibraryCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            closed: true,
        };
    };

    renderDescription = function() {
        if (!this.state.closed) {
            return (
                <div className="library-course--description">
                    <label>Course Description:</label>
                    <p>{ this.props.description }</p>
                </div>
            );
        };
    }.bind(this);

    handleCallback = function (closed) {
        this.setState({ closed });

        if (!closed) {
            document.getElementById(this.id).classList.add("library-course--selected");
        } else {
            document.getElementById(this.id).classList.remove("library-course--selected");
        };
    }.bind(this);

     render() {
        this.id = `library-course-${this.props.id}`;
        this.closed = false;
        return (
            <div id={this.id} className="library-course">
                <div className="library-course--title-check">
                    <label className="library-course--title">{ this.props.title }</label>
                    { Icon("fas fa-check", "library-course--icon") }
                </div>
                <div className="library-course--line"></div>
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
                { this.renderDescription() }
            </div>
        );
    };
};

export default connect(null, actions)(LibraryCourse);