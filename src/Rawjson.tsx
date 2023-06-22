import React from "react";
import { useLocation } from "react-router-dom";

const Rawjson: React.FC<any> = () => {
  const { state } = useLocation();
  console.log("state", state);

  return <pre>{JSON.stringify(state.obj, null, 2)}</pre>;
};
export default Rawjson;
