import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.states={
            trangThaiChinhSua: true
        };
    }

    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name);
      console.log(value);
    }

    thayDoiTrangThai = () =>{
        this.setState({
            trangThaiChinhSua : !(this.states.trangThaiChinhSua)
        })
        this.states.trangThaiChinhSua = !(this.states.trangThaiChinhSua);
    }

    hienThi = () => {
        if(this.states.trangThaiChinhSua===true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng</div>;          
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}> Thêm thành viên</div>;
        }
    }

    hienThiForm = () => {
        if(this.states.trangThaiChinhSua===true){
            return (
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm thành viên</div>
                <div className="card-body text-primary">
                  {/* <h5 className="card-title" /> */}
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Tên người dùng" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Số điện thoại" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Địa chỉ" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Mật khẩu" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Chọn quyền</option>
                      <option value={1}>Admin</option>
                      <option value={2}>User</option>
                      <option value={3}>Client</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="btn btn-block btn-primary">
                      Hoàn tất
                    </div>
                  </div>
                </div>
              </div>
            )
        }
        else{}
    }

    render() {
        return (
            <div className="col-3">
            <div className="card text-left">

                {this.hienThi()}
                {this.hienThiForm()}
            </div>
          </div>
        );
    }
}

export default AddUser;