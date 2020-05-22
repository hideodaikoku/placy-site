import React from "react";
import { Helmet } from "react-helmet";

export default function Prefetch({ rel, href, probability }) {
  return (
    <Helmet>
      <link rel={rel} href={href} crossOrigin pr={probability || 0.5}></link>
    </Helmet>
  );
}
