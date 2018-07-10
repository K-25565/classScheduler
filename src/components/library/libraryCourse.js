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
            status: true,
        };
    };

    renderDescription = function() {
        if (!this.state.status) {
            return (
                <div className="library-course--description">
                    <label>Course Description:</label>
                    <p>{ this.props.description }</p>
                </div>
            );
        };
    }.bind(this);

    handleCallback = function (status) {
        this.setState({ status });
    }.bind(this);

     render() {
        this.status = false;
        return (
            <div className="library-course">
                <div className="library-course--title-check">
                    <label className="library-course--title">{ this.props.title }</label>
                    { Icon("fas fa-check", "library-course--icon") }
                </div>

                <div className="library-course--line"></div>

                <Arrow 
                    className="library-course--arrow"
                    id={this.props.id}
                    callback={status => this.handleCallback(status)}
                />
                <Action
                    onClick={() => this.props.toggleEnrolled(this.props.id)}
                    className="library-course--action"
                />

                { this.renderDescription() }
            </div>
        );
    };
};

export default connect(null, actions)(LibraryCourse);