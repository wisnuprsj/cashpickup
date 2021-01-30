import React, { Component } from "react";
import CurrencyInput from "react-currency-input-field";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";

class RVTransView extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="rvtrans-view">
        <table className="table table-rvtrans-view">
          <tbody>
            <tr>
              <td>
                <span className="align-middle">Jenis Transaksi</span>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="align-middle">RV No</span>
              </td>
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
              <td>
                <span className="align-middle">RV Date</span>
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex flex-row-reverse bd-highlight mt-2 mb-2">
          <button type="button" className="btn btn-primary">
            <span className="mr-3">Add Row</span>
            <AiIcons.AiOutlinePlusCircle />
          </button>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>RV No</th>
                <th>Contract No</th>
                <th>Instl No</th>
                <th>Jenis Transaksi</th>
                <th>Doc Number</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.length > 0 ? (
                <tr>
                  <td></td>
                </tr>
              ) : (
                <tr className="table-active text-center">
                  <td colSpan="6">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="d-flex flex-row-reverse bd-highlight ">
            <div className="p-2 bd-highlight">
              <CurrencyInput
                className="form-control"
                id="total-hogtot"
                name="total-hogtot"
                placeholder="Total"
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
        </div>
      </div>
    );
  }
}

export default RVTransView;
