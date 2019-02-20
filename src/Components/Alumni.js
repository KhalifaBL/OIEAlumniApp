import React from "react";
import "./Alumni.css";
const Alumni = ({ alumniJsonList, deleteAlumni }) => {
  const alumniHTMList = alumniJsonList.map(alumni => {
    if (alumni.age > 0) {
      return (
        <tr className="AlumniElement" key={alumni.id}>
          <th className="CapitalLetter" scope="row">
            {alumni.id}
          </th>
          <td className="CapitalLetter">{alumni.name}</td>
          <td className="CapitalLetter">{alumni.lastName}</td>
          <td> {alumni.age}</td>
          <td> {alumni.graduation}</td>
          <td>{alumni.email}</td>
          <td>
            <button
              className="fontaweButton"
              onClick={() => {
                deleteAlumni(alumni.id);
              }}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </td>
        </tr>
      );
    } else {
      return null;
    }
  });
  return alumniHTMList;
};

export default Alumni;
