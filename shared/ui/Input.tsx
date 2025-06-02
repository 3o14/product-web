import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={props.id || label.replace(/\s+/g, '-').toLowerCase()}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={props.id || label.replace(/\s+/g, '-').toLowerCase()}
          {...props}
          className={`
            w-full px-3 py-2 
            text-sm 
            border rounded-md 
            ${error ? 'border-red-300' : 'border-gray-300'} 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${className || ''}
          `.trim()}
        />
        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

