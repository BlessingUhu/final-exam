"use strict"

import React from "react";
import RecordsList from "./components/Recordlist";
import AddRecord from "./components/AddRecord";

const App = () => {
  return (
    <div>
      <RecordsList />
      <AddRecord />
    </div>
  );
};

export default App;
