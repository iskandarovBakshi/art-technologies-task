import React from "react";

type NotFoundProps = {
  error: {
    status: number;
    message: string;
  };
};

function NotFound({
  error = { status: 404, message: "Page not found." },
}: NotFoundProps) {
  return (
    <div className="text-center mt-[50px]">
      <h1 className="text-2xl">
        {error.status} - {error.message}
      </h1>
    </div>
  );
}

export default NotFound;
