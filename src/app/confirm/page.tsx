import React from "react";

export default function Confirm({
  searchParams,
}: {
  searchParams: { email: string };
}) {
  return (
    <div className="grid place-items-center h-dvh">
      <div>
        <h2>Confirm Page</h2>
        <p>Email: {searchParams.email}</p>
      </div>
    </div>
  );
}
