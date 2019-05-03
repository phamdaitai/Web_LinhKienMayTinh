import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-3">Quản lý thành viên</h1>
          <h2 className="lead"><b></b></h2>
          <hr className="my-2" />
          <p />
          <p className="lead">
            {/* <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button"></a> */}
          </p>
        </div>
      </div>
        );
    }
}

export default Header;