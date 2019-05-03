import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Hr from './Hr';
import UserList from './UserList';
import AddUser from './AddUser';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <div className="searchForm">
        <div className="container">
          <div className="row">
                  <Search/>
                  <Hr/>
                <UserList />
                <AddUser/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
