import React, { Component } from "react";
import { connect } from "react-redux";

import Gradient from "./gradient";
import ScheduleCourse from "./scheduleCourse";
import ProgressTracker from "./progressTracker";

class Schedule extends Component {

    renderCourses() {
        const data = this.props.courses;

        return data.map((course, index) => {
            if (course.enrolled && this.amountEnrolled != 5) {
                this.amountEnrolled++;
                return <ScheduleCourse {...course} key={index} />
            }
        })
    }
   
    render() {
        this.amountEnrolled = 0;
        this.amountPossible= 5;

        return (
             <div className="schedule">
                <h1 className="schedule--title">My Schedule</h1>
                { this.renderCourses() }
                <ProgressTracker amountPossible={this.amountPossible} amountEnrolled={this.amountEnrolled}/>
                <Gradient />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
};

export default connect(mapStateToProps)(Schedule);