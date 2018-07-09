import React, { Component } from "react";
import Icon from '../icon';
import Arrow from "../arrow";
import Action from "../action";

export default class LibraryCourse extends Component {
   render() {
      return (
         <div className="library-course">
            <div className="library-course--title-check">
                <label className="library-course--title">{ this.props.title }</label>
                { Icon("fas fa-check", "library-course--icon") }
            </div>

            <Arrow className="library-course--arrow"/>
            <Action className="library-course--action"/>
            <div className="library-course--descriptions">
                <label>Course Description:</label>
                <p>{ this.props.description }</p>
            </div>
         </div>
      );
   }
};