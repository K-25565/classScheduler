import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import Icon from '../icon';
import Arrow from "../arrow";
import Action from "../action";
import ScheduleCourse from "../schedule/scheduleCourse";

class LibraryCourse extends Component {
   render() {
      return (
         <div className="library-course">
            <div className="library-course--title-check">
                <label className="library-course--title">{ this.props.title }</label>
                { Icon("fas fa-check", "library-course--icon") }
            </div>

            <Arrow className="library-course--arrow"/>
            <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course--action"/>
            <div className="library-course--descriptions">
                <label>Course Description:</label>
                <p>{ this.props.description }</p>
            </div>
         </div>
      );
   }
};

export default connect(null, actions)(LibraryCourse);