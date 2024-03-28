// FormContainer.jsx
import React from 'react';

function FormContainer({ children }) {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {children}
      </div>
    </div>
  );
}

export default FormContainer;
