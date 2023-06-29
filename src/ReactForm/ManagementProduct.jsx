import React, { Component } from "react";

export default class ManagementProduct extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-body-secondary m-3 border border-primary-subtle">
          <div>
            <h3 className="p-2">Thông tin sinh viên</h3>
          </div>

          <div className="m-3">
            <div className="row p-2">
              <div className="col">
                <div>
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Mã SV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Mã SV"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Họ và Tên"
                />
              </div>
            </div>
            <div className="row p-2">
              <div className="col">
                <div>
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="col-12 p-2">
              <button type="submit" class="btn btn-outline-primary">
                Thêm Sinh Viên
              </button>
            </div>
          </div>
        </div>

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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
