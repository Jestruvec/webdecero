import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ProtectedRoute, AuthRoute } from "../Components";
import { Login, Profile, NotFound } from "./Views";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
