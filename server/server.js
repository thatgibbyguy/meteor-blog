import React from "react";
import { onPageLoad } from "meteor/server-render";
import { renderToString } from "react-dom/server";

import AppContainer from "/imports/ui/containers/AppContainer.js";

onPageLoad(sink => {
  const html = renderToString( <AppContainer /> );
  sink.renderIntoElementById("app", html);
});
