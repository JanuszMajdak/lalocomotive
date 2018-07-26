import React, { Component } from "react";
import "../styles/Page.css";

class Page extends Component {
  render() {
    return (
      <div class="Page-pageContainer">
        <div class="Page-header">
          <div> {this.props.page.title} </div>
        </div>
        <div class="Page-body">
          <div class="Page-pictureContainer">
            <div class="Page-picture">
              <img src="https://unsplash.com/photos/7KvC-f2HMy0" />
              {this.props.page.imageUrl}
            </div>
          </div>
          <div class="Page-questionsContainer">
            <div class="Page-questions">{this.props.page.imageUrl}</div>
          </div>
        </div>
        <div class="Page-footer">
          <div> {this.props.page.title} </div>
        </div>
      </div>
    );
  }
}

export default Page;
