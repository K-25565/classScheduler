import React, { Component } from "react";
import Icon from "./icon";

export default class Action extends Component {
   render() {
      return (
         <div className={`${this.props.className} action`}>
            { Icon("fas fa-plus-circle") }

            {/*X Icon --> fas fa-times-circle*/}
         </div>
      );
   }
};