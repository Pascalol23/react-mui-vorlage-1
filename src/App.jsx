import React from "react";
import { VegaLite } from "react-vega"; // VegaLite importieren
import visualizationSpec from "./Beispiel.json"; // JSON-Datei importieren

function App() {
  return (
    <div>
      <h1>Meine Vega-Lite Visualisierung</h1>
      <VegaLite spec={visualizationSpec} />
    </div>
  );
}

export default App;
