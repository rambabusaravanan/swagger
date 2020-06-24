import React from 'react';
import SwaggerUI from "swagger-ui-react"
import qs from "query-string";
import "swagger-ui-react/swagger-ui.css"

const params = qs.parse(window.location.search);
const url = params.url || "https://petstore.swagger.io/v2/swagger.json";
 
const App = () => <SwaggerUI url={url} />

export default App;
