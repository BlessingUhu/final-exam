import React, {useState, useEffect} from "react";
import axios from "axios";

const RecordsList = ({onRecordClick}) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("/record")
      .then((response) => setRecords(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Records List</h2>
      <ul>
        {records.map((record) => (
          <li key={record._id} onClick={() => onRecordClick(record._id)}>
            {record.name}, {record.position}, {record.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordsList;
