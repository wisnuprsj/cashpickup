import React, { Component } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";

class SetUserOutlet extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="menu-setuseroutlet">
        <h2>Setting User Outlet</h2>
        <div className="global-wrapper">
          <div className="menu-parameter">
            <div className="table-wrapper-parameter">
              <table className="table table-menu-setuseroutlet">
                <tbody>
                  <tr>
                    <td>Search NIK : </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <button type="button" className="btn btn-info">
                        <AiIcons.AiOutlineSearch />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>NIK : </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Nama : </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Jabatan : </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <button type="button" className="btn btn-info">
                        <AiIcons.AiOutlineSearch />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="btn btn-success">
              <span className="mr-3">Add Row</span>
              <AiIcons.AiOutlinePlusCircle />
            </button>
          </div>

          <div className="menu-detail">
            <div
              id="table-wrapper"
              className="table-wrapper-scroll-y my-custom-scrollbar"
            >
              <div className="hogtot-detail">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th>
                        <span className="text">NIK</span>
                      </th>
                      <th>
                        <span className="text">Nama</span>
                      </th>
                      <th>
                        <span className="text">Jabatan</span>
                      </th>
                      <th>
                        <span className="text">Nama Outlet</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.length > 0 ? (
                      ""
                    ) : (
                      <tr className="table-active text-center">
                        <td colSpan="4">No Data Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="d-flex flex-row-reverse bd-highlight">
              <button className="btn btn-danger">
                <span className="mr-3">Delete</span>
                <AiIcons.AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SetUserOutlet;
