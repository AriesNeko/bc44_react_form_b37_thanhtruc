import React, { Component } from "react";
import DanhSachSV from "./DanhSachSV";

export default class QuanLySV extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    error: {
      maSV: "Mã sinh viên không được trống",
      hoTen: "Họ tên không được trống",
      soDT: "Số điện thoại không được trống",
      email: "Email không được trống",
    },
    dsSV: [
      {
        maSV: "d",
        hoTen: "w",
        soDT: "s",
        email: "a",
      },
    ],
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;
    const newSV = { ...this.state.value, [name]: value };
    this.setState({ value: newSV });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newSV = [...this.state.dsSV, this.state.value];
    this.setState({ dsSV: newSV });
    console.log(this.state.value);
  };

  render() {
    let { value, error, dsSV } = this.state;
    let { maSV, hoTen, soDT, email } = value;
    return (
      <div className="bg-body-secondary m-3 border border-primary-subtle">
        <div>
          <h3 className="p-2">Thông tin sinh viên</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="m-3">
            <div className="row p-2">
              <div className="col">
                <div>
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Mã SV <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={maSV}
                    className="form-control"
                    name="maSV"
                    id="maSV"
                    placeholder="Mã SV"
                    onChange={this.handleOnChange}
                  />
                </div>
                {error.maSV && (
                  <span className="text text-danger">{error.maSV}</span>
                )}
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Họ và Tên <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  id="hoTen"
                  placeholder="Họ và Tên"
                  onChange={this.handleOnChange}
                />
                {error.hoTen && (
                  <span className="text text-danger">{error.hoTen}</span>
                )}
              </div>
            </div>
            <div className="row p-2">
              <div className="col">
                <div>
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Số điện thoại <span className="text-danger">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={soDT}
                    className="form-control"
                    name="soDT"
                    id="soDT"
                    placeholder="Số điện thoại"
                    onChange={this.handleOnChange}
                  />
                </div>
                {error.soDT && (
                  <span className="text text-danger">{error.soDT}</span>
                )}
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={email}
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleOnChange}
                />
                {error.email && (
                  <span className="text text-danger">{error.email}</span>
                )}
              </div>
            </div>
            <div class="col-12 p-2">
              <button type="submit" class="btn btn-outline-primary">
                Thêm Sinh Viên
              </button>
            </div>
          </div>
        </form>
        <DanhSachSV dssv={dsSV} />
      </div>
    );
  }
}
