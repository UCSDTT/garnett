import React, {Component} from 'react';
import * as BS from 'react-bootstrap';


class About extends Component {
  render() {
    return (
      <div className="about">
        <BS.PageHeader className="title">This is the About Module</BS.PageHeader>
      </div>
    );
  }
}

export {About};
