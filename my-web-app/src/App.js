import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const Card = React.lazy(() => import("issuerPage/Card"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <h1>This is the Host!</h1>
    <h2>Remote Issuer App:</h2>
    <RemoteWrapper>
     <Card title="Micro FE" content="Issuer Page Card content" />
    </RemoteWrapper>
    <br />
    <a href="http://localhost:8083">Link to Remote App</a>
  </div>
);
export default App;