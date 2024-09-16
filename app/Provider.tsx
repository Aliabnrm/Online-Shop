import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header/header";

import React from "react";

type Children = {
  children: React.ReactNode;
};

function Provider({ children }: Children) {
  return (
    <div className="flex h-screen flex-col ">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}

export default Provider;
