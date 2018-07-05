import React, { Component } from "react";

export default class LibraryCourse extends Component {
   render() {
      return (
         <div className="library-course">
            <label className="library-course--title">Problem Solving</label>
            {/*Icon goes here*/}
            {/*Arrow goes here*/}
            {/*Action button goes here*/}
            <div className="library-course--descriptions">
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit ex eu porttitor. Ut vitae quam iaculis, placerat urna eget, pulvinar libero. Duis malesuada turpis id velit pulvinar tincidunt. Vestibulum ultricies vel sem in sodales.</p>
            </div>
         </div>
      );
   }
};