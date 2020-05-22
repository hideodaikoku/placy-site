import React from "react";
import { Helmet } from "react-helmet";

export default function Prefetch({ rel, href }) {
  return (
    <Helmet>
      <link rel={rel} href={href}></link>
    </Helmet>
  );
}
