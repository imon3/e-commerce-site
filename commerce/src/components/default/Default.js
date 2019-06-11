import React from "react";

class Default extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Page Not Found</h3>
      </div>
    );
  }
}

export default Default;
