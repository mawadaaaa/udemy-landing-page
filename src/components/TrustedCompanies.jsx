import React from "react";
import { trustedCompanies } from "../data/dummyData";

export function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <h3>Trusted by companies around the world</h3>
      {trustedCompanies.map((company, idx) => (
        <div key={idx}>{company}</div>
      ))}
    </section>
  );
}
