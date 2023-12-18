import React, {useState} from "react";
import axios from "axios";

const AddRecord = () => {
  const [newRecord, setNewRecord] = useState({name: "", position: "", level: ""});

  const handleAddRecord = () => {
    axios
      .post("/record/add", newRecord)
      .then((response) => console.log("Record added:", response))
      .catch((error) => console.error("Error adding record:", error));
  };

  return (
    <div>
      <h2>Add Record</h2>
      <input type="text" placeholder="Name" onChange={(e) => setNewRecord({...newRecord, name: e.target.value})} />
      <input type="text" placeholder="Position" onChange={(e) => setNewRecord({...newRecord, position: e.target.value})} />
      <input type="text" placeholder="Level" onChange={(e) => setNewRecord({...newRecord, level: e.target.value})} />
      <button onClick={handleAddRecord}>Add Record</button>
    </div>
  );
};

export default AddRecord;
