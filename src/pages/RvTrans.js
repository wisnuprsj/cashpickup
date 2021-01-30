import React, { Component } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";

import RVTransView from "../components/RVTransView";
import RVTransCreate from "../components/RVTransCreate";

class RvTrans extends Component {
  state = {
    optionState: 1,
    stateOne: true,
    stateTwo: false,
  };

  handleViewRV = () => {
    this.setState({ optionState: 1 });
    this.setState({ stateOne: true, stateTwo: false });
  };

  handleCreateNewRV = () => {
    this.setState({ optionState: 2 });
    this.setState({ stateTwo: true, stateOne: false });
  };

  render() {
    return (
      <div className="menu-rvtrans">
        <h2 className="menu-title">RV Transfer</h2>
        <div className="global-wrapper">
          <div className="menu-parameter">
            <div className="table-wrapper-parameter">
              <table className="table table-menu-rvtrans">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">Branch Id</span>
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td colSpan="2">
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Date</span>
                    </td>
                    <td colSpan="3">
                      <input type="date" className="form-control" />
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        <span className="mr-3">Add Row</span>
                        <AiIcons.AiOutlinePlusCircle />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colSpan="4">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <span>Tanggal</span>
                            </th>
                            <th>
                              <span>Nama Bank</span>
                            </th>
                            <th>
                              <span>No VA</span>
                            </th>
                            <th>
                              <span>Nominal</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detail */}
          <div className="menu-detail">
            <div id="table-wrapper">
              <div className="rvtrans-detail">
                <div className="rvtrans-detail-option d-flex flex-row bd-highlight justify-content-start">
                  <label
                    className="form-check-label mr-5"
                    onClick={this.handleViewRV}
                  >
                    <input
                      type="radio"
                      className="form-check-input"
                      name="viewRV"
                      checked={this.state.stateOne}
                    />
                    View RV
                  </label>
                  <label onClick={this.handleCreateNewRV}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="createNewRV"
                      checked={this.state.stateTwo}
                    />
                    Create New RV
                  </label>
                </div>
                {this.state.optionState === 1 ? (
                  <RVTransView />
                ) : (
                  <RVTransCreate />
                )}
              </div>
            </div>

            <div className="d-flex flex-row bd-highlight justify-content-between mt-4">
              <div className="d-flex flex-row bd-highlight">
                <button type="button" className="btn btn-success mr-3">
                  <span className="mr-3">Save</span>
                  <FaIcons.FaSave />
                </button>
                <button type="button" className="btn btn-warning">
                  <span className="mr-3">Confirm</span>
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

export default RvTrans;
