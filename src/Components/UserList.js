import React, { Component } from 'react';
import UserData from '../connection';
//import axios from 'axios';
console.log("Kết nốt UserList");

class UserList extends Component{

  // componentDidMount() {
  //   axios.get('urlendpoint')
  //     .then(response => {
  //       console.log(response.data); 
  //     });
  // }

  render() {
    return (
      <div className="col-9">
        <table className="table table-striped table-hover ">
          <thead className="thead-inverse|thead-default">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Mật khẩu</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <script>
              <tr>
                <td scope="row">1</td>
                <td>UserData.result[0].user_name</td>
                <td>userData.result[0].user_phone</td>
                <td />fa
                <td />
                <td />
                <td>Admin</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                    <div className="btn btn-danger xoa"><i className="fa fa-edit    " />Xóa</div>
                  </div>
                </td>
              </tr>
            </script>

            <tr>
              <td scope="row">1</td>
              <td>Messi</td>
              <td>0123456789</td>
              <td />
              <td />
              <td />
              <td>Admin</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                  <div className="btn btn-danger xoa"><i className="fa fa-edit    " />Xóa</div>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Ronnaldo</td>
              <td>0777777777</td>
              <td />
              <td />
              <td />
              <td>Admin</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                  <div className="btn btn-danger xoa"><i className="fa fa-edit    " />Xóa</div>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Rakitic</td>
              <td>0444444444</td>
              <td />
              <td />
              <td />
              <td>Admin</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                  <div className="btn btn-danger xoa"><i className="fa fa-edit    " />Xóa</div>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">4</td>
              <td>Pique</td>
              <td>0333333333</td>
              <td />
              <td />
              <td />
              <td>Admin</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                  <div className="btn btn-danger xoa"><i className="fa fa-edit    " />Xóa</div>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">5</td>
              <td>Suarez</td>
              <td>0999999999</td>
              <td />
              <td />
              <td />
              <td>Admin</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sửa</div>
                  <div className="btn btn-danger xoa"><i className="fa fa-edit    " />Xóa</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserList;
