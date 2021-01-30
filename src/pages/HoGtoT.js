import React, { Component } from "react";
import CurrencyInput from "react-currency-input-field";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";

import HoGtoTData from "./HoGtoTData";

class HoGtoT extends Component {
  state = {
    data: [
      {
        tanggal: "01-01-2021",
        namaOutlet: "Yos Sudarso-Mojokerto",
        jenisHo: "BPKB",
        namaTeller: "Mawarizkar Radhya",
        amount: 10000,
      },
      {
        tanggal: "01-01-2021",
        namaOutlet: "Yos Sudarso-Mojokerto",
        jenisHo: "BPKB",
        namaTeller: "Mawarizkar Radhya",
        amount: 10000,
      },
      {
        tanggal: "01-01-2021",
        namaOutlet: "Yos Sudarso-Mojokerto",
        jenisHo: "BPKB",
        namaTeller: "Mawarizkar Radhya",
        amount: 10000,
      },
    ],
  };

  render() {
    return (
      <div className="menu-hogtot">
        <h2 className="menu-title">HandOver Cash - Gas to Teller</h2>
        <div className="global-wrapper">
          <div className="menu-parameter">
            <div className="table-wrapper-parameter">
              <table className="table table-menu-hogtot-left">
                <tbody>
                  <tr>
                    <td>Date : </td>
                    <td colSpan="2">
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Branch Id : </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Outlet : </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-menu-hogtot-right">
                <tbody>
                  <tr>
                    <td>Memo No : </td>
                    <td colSpan="2">
                      <input type="text" className="form-control" />
                    </td>
                    <td colSpan="2">
                      <button type="button" className="btn btn-info">
                        <AiIcons.AiOutlineSearch />
                      </button>
                      <button type="button" className="btn btn-primary ml-2">
                        <Io5Icons.IoDuplicateOutline />
                        <span>New Memo </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nama Gas : </td>
                    <td colSpan="2">
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <button type="button" className="btn btn-info">
                        <AiIcons.AiOutlineSearch />
                      </button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="menu-detail">
            <div
              id="table-wrapper"
              className="table-wrapper-scroll-y my-custom-scrollbar"
            >
              <div id="hogtot-detail">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th>
                        <span className="text">Tanggal</span>
                      </th>
                      <th>
                        <span className="text">Nama Outlet</span>
                      </th>
                      <th>
                        <span className="text">Jenis HandOver</span>
                      </th>
                      <th>
                        <span className="text">Nama Teller</span>
                      </th>
                      <th>
                        <span className="text">Uang Yang Diserahkan</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.length > 0 ? (
                      <HoGtoTData data={this.state.data} />
                    ) : (
                      <tr className="table-active text-center">
                        <td colSpan="5">No Data Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="p-2 bd-highlight">
                <CurrencyInput
                  className="form-control"
                  id="total-hogtot"
                  name="total-hogtot"
                  placeholder="Grand Total"
                  defaultValue={0}
                  decimalsLimit={2}
                  allowNegativeValue={false}
                  prefix="Rp"
                />
              </div>
              <div className="p-2 bd-highlight">
                <span className="align-middle">Total : </span>
              </div>
            </div>

            <div className="d-flex flex-row bd-highlight justify-content-between mt-4">
              <div className="d-flex flex-row bd-highlight">
                <button type="button" className="btn btn-success mr-3">
                  <span className="mr-3">Save</span>
                  <FaIcons.FaSave />
                </button>
                <button type="button" className="btn btn-warning">
                  <span className="mr-3">Receive Teller</span>
                  <FaIcons.FaCheck />
                </button>
              </div>
              <div className="d-flex flex-row bd-highlight">
                <button type="button" className="btn btn-danger mr-3">
                  <span className="mr-3">Cancel</span>
                  <MdIcons.MdBlock />
                </button>
                <button type="button" className="btn btn-secondary">
                  <span className="mr-3">Clear</span>
                  <AiIcons.AiOutlineClear />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HoGtoT;
