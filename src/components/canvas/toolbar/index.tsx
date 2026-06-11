import React from "react";
import HistoryPill from "./history";
import ZoomBar from "./zoom";

const ToolBar = () => {
  return (
    <div className="fixed w-full bottom-0 grid grid-cols-3 z-50 p-5">
      <HistoryPill />
      <ZoomBar />
    </div>
  );
};

export default ToolBar;
