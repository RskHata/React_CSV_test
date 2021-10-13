import React from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";
import "./styles.css";

const handleForce = (data, fileInfo) => {
  console.log(data, fileInfo);

  for (let i = 0; i < data.length; i++) {
    gps.innerHTML +=
      data[i].date + "->" + data[i].lat + "/" + data[i].lon + "<br />";
  }
};

const gps = document.getElementById("gps");

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_")
};

const reader = (
  <div className="container">
    <CSVReader
      cssClass="react-csv-input"
      label="Select CSV with secret Death Star statistics"
      onFileLoaded={handleForce}
      parserOptions={papaparseOptions}
    />
    <p>and then open the console</p>
  </div>
);

ReactDOM.render(reader, document.getElementById("root"));
