import React from "react";
const NoMatch = ({ location }) => (

  <div className="container">
    <h1 className="text-white">
      Nothing to see here <code>{location.pathname}</code>
    </h1>
  </div>
);
export default NoMatch;
