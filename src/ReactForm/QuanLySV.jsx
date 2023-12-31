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
      maSV: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    dsSV: [],
    editSV: null,
  };

  formValid = () => {
    // Chưa đúng format
    let inValid = false;
    Object.values(this.state.value).forEach((value) => {
      if (!value) {
        inValid = true;
      }
    });
    return inValid;
  };

  handleOnChange = (event) => {
    const { name, value, pattern } = event.target;
    const newSV = { ...this.state.value, [name]: value };
    const newError = { ...this.state.error };
    // xử lí lỗi
    if (!value.trim()) {
      // Không có value
      newError[name] = "Trường này không được để trống !";
    } else {
      // validate value nhập vào có đúng format?
      if (pattern) {
        const regex = new RegExp(pattern);
        const valid = regex.test(value);
        if (!valid) {
          newError[name] = "Vui lòng nhập đúng định dạng";
        } else {
          // có input value vào
          newError[name] = "";
        }
      }
    }
    this.setState({ value: newSV, error: newError });
  };

  handleOnBlur = (event) => {
    const { name, value, pattern } = event.target;
    const newSV = { ...this.state.value, [name]: value };
    const newError = { ...this.state.error };
    // xử lí lỗi
    if (!value.trim()) {
      // Không có value
      newError[name] = "Trường này không được để trống !";
    } else {
      // validate value nhập vào có đúng format?
      if (pattern) {
        const regex = new RegExp(pattern);
        const valid = regex.test(value);
        if (!valid) {
          newError[name] = "Vui lòng nhập đúng định dạng";
        } else {
          // có input value vào
          newError[name] = "";
        }
      }
    }
    this.setState({ value: newSV, error: newError });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const timSVIndex = this.state.dsSV.findIndex((sv) => {
      return sv.maSV === this.state.value.maSV;
    });
    if (timSVIndex !== -1) {
      alert("Mã sinh viên này đã tồn tại");
      return;
    }

    // xử lí validate form
    // if (!this.formValid()) {
    //   const newSV = [...this.state.dsSV, this.state.value];
    //   this.setState({ dsSV: newSV });
    // }
    // console.log(this.state.value);

    let valid = true;
    Object.values(this.state.error).forEach((sv) => {
      if (sv.length > 0) {
        valid = false;
      }
    });

    if (valid) {
      const newDSSV = [...this.state.dsSV, this.state.value];
      this.setState({
        dsSV: newDSSV,
        value: {
          maSV: "",
          hoTen: "",
          soDT: "",
          email: "",
        },
      });
    }
  };

  handleDelete = (maSV) => {
    const timSVIndex = this.state.dsSV.findIndex((sv) => {
      return sv.maSV === maSV;
    });
    if (timSVIndex !== -1) {
      const newDSSV = [...this.state.dsSV];
      newDSSV.splice(timSVIndex, 1);
      this.setState({ dsSV: newDSSV });
    }
  };

  handleEdit = (maSV) => {
    const timSV = this.state.dsSV.find((sv) => {
      return sv.maSV === maSV;
    });
    this.setState({ editSV: timSV, value: timSV });
  };

  handleUpdate = () => {
    const timSVIndex = this.state.dsSV.findIndex((sv) => {
      return sv.maSV === this.state.editSV.maSV;
    });
    const newDSSV = [...this.state.dsSV];
    newDSSV[timSVIndex] = this.state.value;
    this.setState({
      dsSV: newDSSV,
      value: {
        maSV: "",
        hoTen: "",
        soDT: "",
        email: "",
      },
      editSV: null,
    });
  };

  render() {
    let { value, error, dsSV, editSV } = this.state;
    let { maSV, hoTen, soDT, email } = value;
    const enabled =
      maSV.length > 0 &&
      hoTen.length > 0 &&
      soDT.length > 0 &&
      email.length > 0;

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
                    type="text"
                    value={maSV}
                    className="form-control"
                    name="maSV"
                    id="maSV"
                    placeholder="Mã SV"
                    // thực hiện input xong rồi xóa nội dung input
                    onChange={this.handleOnChange}
                    // thao tác focus out
                    onBlur={this.handleOnBlur}
                    // pattern được phép nhập
                    pattern="\b\d{5}\b"
                    disabled={editSV}
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
                  type="text"
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  id="hoTen"
                  placeholder="Họ và Tên"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
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
                    type="text"
                    value={soDT}
                    className="form-control"
                    name="soDT"
                    id="soDT"
                    placeholder="Số điện thoại"
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
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
                  type="text"
                  value={email}
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleOnChange}
                  onBlur={this.handleOnBlur}
                  pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                />
                {error.email && (
                  <span className="text text-danger">{error.email}</span>
                )}
              </div>
            </div>
            <div class="col-12 p-2">
              {editSV ? (
                <button
                  type="button"
                  onClick={this.handleUpdate}
                  class="btn btn-outline-primary"
                >
                  Cập nhật
                </button>
              ) : (
                <button
                  disabled={!enabled}
                  class="btn btn-outline-primary"
                  onClick={this.handleSubmit}
                >
                  Thêm Sinh Viên
                </button>
              )}
            </div>
          </div>
        </form>
        <DanhSachSV
          dsSV={dsSV}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
