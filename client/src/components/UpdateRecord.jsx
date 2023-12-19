import React, {useState} from "react";
import axios from "axios";

const UpdateRecord = ({recordId}) => {
  const [updatedRecord, setUpdatedRecord] = useState({name: "", position: "", level: ""});

  const handleUpdateRecord = () => {
    axios
      .post(`/update/${recordId}`, updatedRecord)
      .then((response) => console.log("Record updated:", response))
      .catch((error) => console.error("Error updating record:", error));
  };

  return (
    <div>
      <h2>Update Record</h2>
      <input type="text" placeholder="Name" onChange={(e) => setUpdatedRecord({...updatedRecord, name: e.target.value})} />
      <input type="text" placeholder="Position" onChange={(e) => setUpdatedRecord({...updatedRecord, position: e.target.value})} />
      <input type="text" placeholder="Level" onChange={(e) => setUpdatedRecord({...updatedRecord, level: e.target.value})} />
      <button onClick={handleUpdateRecord}>Update Record</button>
    </div>
  );
};

export default UpdateRecord;
