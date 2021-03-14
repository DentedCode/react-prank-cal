import React from "react";
import "./display.style.css";

export const Display = ({ txtDisp, total }) => {
	return <div className="input">{total || txtDisp || ".0"}</div>;
};
