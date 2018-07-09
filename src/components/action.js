import React, { Component } from "react";
import Icon from "./icon";

export default class Action extends Component {
   render() {
      return (
         <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
            { Icon("fas fa-plus-circle") }

            {/*X Icon --> fas fa-times-circle*/}
         </button>
      );
   }
};