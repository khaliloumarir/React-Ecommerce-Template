import { UserAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function LeaveOnAuth({ children }: any) {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to="/asteria-videos" />;
  }
  return <>{children}</>;
}
