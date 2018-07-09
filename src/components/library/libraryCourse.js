import React, { Component } from "react";
import Icon from '../icon';
import Arrow from "../arrow";

export default class LibraryCourse extends Component {
   render() {
      return (
         <div className="library-course">
            <div className="library-course--title-icon">
                <label className="library-course--title">Problem Solving</label>
                { Icon("fas fa-check", "library-course--icon") }
            </div>

            <Arrow className="library-course--arrow"/>
            {/*Action button goes here*/}
            <div className="library-course--descriptions">
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit ex eu porttitor. Ut vitae quam iaculis, placerat urna eget, pulvinar libero. Duis malesuada turpis id velit pulvinar tincidunt. Vestibulum ultricies vel sem in sodales.</p>
            </div>
         </div>
      );
   }
};