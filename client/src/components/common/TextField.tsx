import React from "react";

type Props = {
  placeholder: string;
  error?: string;
};

const TextField: React.FC<Props> = ({ placeholder, error }) => {
  return (
    <div className="px-1">
      <input
        className={`placeholder:text-gray-400 py-1.5 px-3 focus:outline-none focus:ring-1 ring-blue-300 rounded-md w-full text-gray-800 font-medium ${
          error
            ? "border-2 border-red-100 placeholder:text-red-300"
            : "border-none"
        }`}
        type="text"
        placeholder={placeholder}
      />
      {error && (
        <p className="ml-1 text-xs font-medium text-red-400">{error}</p>
      )}
    </div>
  );
};

export default TextField;
