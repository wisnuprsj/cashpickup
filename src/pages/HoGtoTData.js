import React from "react";

function HoGtoTData(props) {
  return props.data.map((data, index) => {
    return (
      <tr key={index} className="table-active text-center">
        <td>{data.tanggal}</td>
        <td>{data.namaOutlet}</td>
        <td>{data.jenisHo}</td>
        <td>{data.namaTeller}</td>
        <td>{data.amount}</td>
      </tr>
    );
  });
}

export default HoGtoTData;
