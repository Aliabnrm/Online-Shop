import React from "react";
import Header from "./components/Header";
type Children = {
  children: React.ReactNode;
};

function Provider({ children }: Children) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
