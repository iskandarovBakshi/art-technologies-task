import Link from "next/link";
import React from "react";

function BackButton() {
  return (
    <Link className="text-blue-500 hover:underline" href="/">
      &lt;- Back
    </Link>
  );
}

export default BackButton;
