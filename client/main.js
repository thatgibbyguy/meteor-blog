import React from "react";
import ReactDOM from "react-dom";
import { onPageLoad } from "meteor/server-render";

onPageLoad(async sink => {
  const App = (await import("/imports/ui/containers/AppContainer.js")).default;
  ReactDOM.hydrate(
    <AppContainer />,
    document.getElementById("app")
  );
});
