import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export const Chart = () => {
  const [graphData, setGraphData] = useState({ x: [], y: [] });

  useEffect(() => {
    async function loadAndRunPyodide() {
      try {
        const pyodideModule = await import(
          "https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.mjs"
        );
        const pyodide = await pyodideModule.loadPyodide();
        console.log("Pyodide loaded");

        const response = await fetch("/src/python/graph.py");
        const pythonCode = await response.text();

        pyodide.runPython(pythonCode);
        const result = pyodide.runPython("get_graph_data()");

        setGraphData(JSON.parse(result));
      } catch (error) {
        console.error("Error to load Pyodide:", error);
      }
    }

    loadAndRunPyodide();
  }, []);

  return (
    <div className="w-full max-w-full p-4 mb-14 text-white">
      <Plot
        data={[
          {
            type: "bar",
            x: graphData.x,
            y: graphData.y,
            marker: { color: "blue" },
          },
        ]}
        layout={{
          xaxis: { title: "Skills" },
          yaxis: { title: "Level" },
          autosize: true,
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
        }}
        style={{ width: "100%", height: "100%", color: "white" }}
        config={{ responsive: true, displayModeBar: false }}
      />
    </div>
  );
};
