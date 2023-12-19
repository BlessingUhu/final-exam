"use strict";

import React from "react";
import RecordsList from "./components/Recordlist";
import AddRecord from "./components/AddRecord";
import UpdateRecord from "./components/UpdateRecord";
// import DeleteRecord from "./components/DeleteRecord";

const App = () => {
  const [selectedRecordId, setSelectedRecordId] = React.useState(null);

  const handleRecordClick = (recordId) => {
    setSelectedRecordId(recordId);
  };

  return (
    <div>
      <RecordsList onRecordClick={handleRecordClick} />
      <AddRecord />
      <UpdateRecord recordId={selectedRecordId} />
    </div>
  );
};

export default App;
