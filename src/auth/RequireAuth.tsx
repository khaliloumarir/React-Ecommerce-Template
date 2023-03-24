import { UserAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function RequireAuth({ children }: any) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return <>{children}</>;
}
