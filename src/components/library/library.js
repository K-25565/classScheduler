import React, { Component } from "react";
import LibraryCourse from "./libraryCourse";

export default class Library extends Component {
   render() {
      return (
         <div className="library">
            <h1 className="library--title">Course Library</h1>
            <LibraryCourse />
            <LibraryCourse />
            <LibraryCourse />
         </div>
      );
   }
};