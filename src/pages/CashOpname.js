import React, { Component } from "react";
import CurrencyInput from "react-currency-input-field";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";

class CashOpname extends Component {
  render() {
    return (
      <div className="menu-cashopname">
        <h2 className="menu-title">Cash Opname</h2>
        <div className="cashopname-wrapper">
          {/* left container */}
          <div className="left-container d-flex flex-column bd-highlight mb-3 border border-dark">
            {/* left top container */}
            <div className="left-top-container">
              <table className="table">
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
                      <button type="button" className="btn btn-primary ml-2">
                        <Io5Icons.IoDuplicateOutline />
                        <span>New Memo </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* left bottom container */}
            <div className="left-bottom-container">
              <table className="table table-top">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Saldo Awal Kas di Brankas
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlinePlus />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Total Handover GAS to Teller
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlineMinus />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Total Handover Teller to GAS
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlinePlus />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Total Cash Send to Bank
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlineMinus />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Selisih Rekon Sebelumnya
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlinePlus />
                      <span className="mr-2">/</span>
                      <AiIcons.AiOutlineMinus />
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="table table-upper-middle">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Saldo Akhir Cash di Brankas
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Titipan Lain-lain</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h5 className="ml-4">Hasil Cash Opname</h5>
              <table className="table table-bottom-middle">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">Jumlah Uang Kertas</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Jumlah Uang Logam</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlinePlus />
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="table table-upper-bottom">
                <tbody>
                  <tr>
                    <td>
                      <span className="align-middle">
                        Jumlah Uang Kertas dan Uang Logam
                      </span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                    <td className="align-middle">
                      <AiIcons.AiOutlineMinus />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="align-middle">Selisih</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="bottom-container">
                <label for="penjelasanSelisih">Penjelasan Selisih</label>
                <textarea
                  class="form-control"
                  id="penjelasanSelisih"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="right-container d-flex flex-column bd-highlight ml-3 mb-3 border border-dark">
            <h4>Detail Uang Kertas</h4>
            <div className="table-wrapper table-uang-kertas">
              <table className="table table-detail-uang-kertas">
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 100.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 50.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 20.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 10.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 5.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 2.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 1.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className="table">
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <span className="align-middle">Jumlah Uang Kertas</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
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
            <h4>Detail Uang Logam</h4>
            <div className="table-wrapper">
              <table className="table table-detail-uang-logam">
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 1.000,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 500,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 200,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
                        defaultValue={0}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        prefix="Rp"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <span>Lembar @ 100,-</span>
                    </td>
                    <td>
                      <CurrencyInput
                        className="form-control"
                        name="total-hogtot"
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
          </div>
        </div>
      </div>
    );
  }
}

export default CashOpname;
