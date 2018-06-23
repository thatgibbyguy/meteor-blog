import React from "react";
import { onPageLoad } from "meteor/server-render";
import { renderToString } from "react-dom/server";

import App from "/imports/ui/App.js";

onPageLoad(sink => {
  const html = renderToString( <App from = "server"/> );
  sink.renderIntoElementById("app", html);
});
