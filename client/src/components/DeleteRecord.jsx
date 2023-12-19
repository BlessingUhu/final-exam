import React from "react";
import axios from "axios";

const DeleteRecord = ({recordId}) => {
  const handleDeleteRecord = () => {
    axios
      .delete(`/${recordId}`)
      .then((response) => console.log("Record deleted:", response))
      .catch((error) => console.error("Error deleting record:", error));
  };

  return (
    <div>
      <h2>Delete Record</h2>
      <button onClick={handleDeleteRecord}>Delete Record</button>
    </div>
  );
};

export default DeleteRecord;
