import React, {Component} from 'react';
import * as BS from 'react-bootstrap';


class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <BS.PageHeader className="title">This is the Landing Module</BS.PageHeader>
      </div>
    );
  }
}

export {Landing};
