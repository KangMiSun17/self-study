import React from "react";
import { Route, Routes } from "react-router-dom";
import TestA from "./TestA";
import TestB from "./TestB";

function TestRouter() {
  return (
    <Routes>
      <Route path="/test-A" element={<TestA />} />
      <Route path="/test-B" element={<TestB />} />
    </Routes>
  );
}

export default TestRouter;
