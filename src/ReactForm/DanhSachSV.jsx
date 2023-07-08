import React, { Component } from "react";

export default class DanhSachSV extends Component {
  render() {
    const { dsSV, handleDelete, handleEdit } = this.props;

    return (
      <div className="bg-body-secondary m-3 border border-primary-subtle">
        <div>
          <h3 className="p-2">Danh sách sinh viên</h3>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {dsSV.map((sv) => {
              return (
                <tr key={sv.id}>
                  <th scope="row">{sv.maSV}</th>
                  <td>{sv.hoTen}</td>
                  <td>{sv.soDT}</td>
                  <td>{sv.email}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2 btn-sm"
                      onClick={() => handleEdit(sv.maSV)}
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(sv.maSV)}
                      className="btn btn-danger mx-2 btn-sm"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
