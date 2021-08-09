import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="font-bold text-red-500 bg-yellow-100 text-center rounded-full py-1 px-6 m-4">
      <h3>{alert}</h3>
    </div>
  );
};

export default Alert;
