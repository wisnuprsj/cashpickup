import React, { Component } from "react";
import CurrencyInput from "react-currency-input-field";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";

class HoTtoG extends Component {
  render() {
    return (
      <div className="menu-hottog">
        <h2 className="menu-title">HandOver Cash - Teller to GAS</h2>
        <div className="global-wrapper">
          {/* Parameter */}
          <div className="menu-parameter">
            <div className="table-wrapper-parameter">
              <table className="table table-menu-hottog-left">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">Date</span>
                    </td>
                    <td colSpan="2">
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Branch Id</span>
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Outlet</span>
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-menu-hottog-right">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">Memo No</span>
                    </td>
                    <td colSpan="2">
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <button type="button" className="btn btn-info">
                        <AiIcons.AiOutlineSearch />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        <span className="mr-3">New Memo</span>
                        <AiIcons.AiOutlinePlusCircle />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Nama Teller</span>
                    </td>
                    <td colSpan="2">
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
                      <span className="align-middle">Nama Gas</span>
                    </td>
                    <td colSpan="2">
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
          </div>

          {/* Detail */}
          <div className="menu-detail">
            <div id="table-wrapper">
              <div className="hottog-detail">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="align-middle">
                          HandOver Gas to Teller
                        </span>
                      </td>
                      <td>
                        <CurrencyInput
                          className="form-control"
                          name="total-hogtot"
                          placeholder="Grand Total"
                          defaultValue={0}
                          decimalsLimit={2}
                          allowNegativeValue={false}
                          prefix="Rp"
                        />
                      </td>
                      <td>
                        <AiIcons.AiOutlinePlus />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="align-middle">
                          Total Penerimaan RV
                        </span>
                      </td>
                      <td>
                        <CurrencyInput
                          className="form-control"
                          name="total-hogtot"
                          placeholder="Grand Total"
                          defaultValue={0}
                          decimalsLimit={2}
                          allowNegativeValue={false}
                          prefix="Rp"
                        />
                      </td>
                      <td>
                        <AiIcons.AiOutlinePlus />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className="align-middle">
                          Total Penerimaan PV
                        </span>
                      </td>
                      <td>
                        <CurrencyInput
                          className="form-control"
                          name="total-hogtot"
                          placeholder="Grand Total"
                          defaultValue={0}
                          decimalsLimit={2}
                          allowNegativeValue={false}
                          prefix="Rp"
                        />
                      </td>
                      <td>
                        <AiIcons.AiOutlineMinus />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="align-middle">
                          Total Uang di Teller
                        </span>
                      </td>
                      <td>
                        <CurrencyInput
                          className="form-control"
                          name="total-hogtot"
                          placeholder="Grand Total"
                          defaultValue={0}
                          decimalsLimit={2}
                          allowNegativeValue={false}
                          prefix="Rp"
                        />
                      </td>
                      <td>
                        <AiIcons.AiOutlinePlus />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="align-middle">
                          Uang yang Diserahkan ke GAS
                        </span>
                      </td>
                      <td>
                        <CurrencyInput
                          className="form-control"
                          name="total-hogtot"
                          placeholder="Grand Total"
                          defaultValue={0}
                          decimalsLimit={2}
                          allowNegativeValue={false}
                          prefix="Rp"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-flex flex-row bd-highlight justify-content-between mt-4">
                <div className="d-flex flex-row bd-highlight">
                  <button type="button" className="btn btn-success mr-3">
                    <span className="mr-3">Save</span>
                    <FaIcons.FaSave />
                  </button>
                  <button type="button" className="btn btn-warning">
                    <span className="mr-3">Receive GAS</span>
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
      </div>
    );
  }
}

export default HoTtoG;
