import React from "react";
import { useLocation } from "react-router-dom";
const Rawjson: React.FC<any> = () => {
  const { state } = useLocation();
  return (
    <pre data-testid="Rawjson">
      {JSON.stringify(state?.obj || "No data", null, 2)}
    </pre>
  );
};
export default Rawjson;
