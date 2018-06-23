import React from "react";
import ReactDOM from "react-dom";
import { onPageLoad } from "meteor/server-render";

onPageLoad(async sink => {
  const App = (await import("/imports/ui/App.js")).default;
  ReactDOM.hydrate(
    <App from = "client" />,
    document.getElementById("app")
  );
});
