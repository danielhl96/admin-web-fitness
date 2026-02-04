import { useEffect, useState } from 'react';
import './index.css';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  onError?: (hasError: boolean) => void;
}

export default function EmailInput({
  value,
  onChange,
  onError,
}: EmailInputProps) {
  const [touched, setTouched] = useState(false);

  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const error = Boolean(value && !validEmail(value));

  // Inform parent about error state when `value` changes
  useEffect(() => {
    if (onError) onError(error);
  }, [value, onError, error]);

  return (
    <div className="input-group relative">
      <EnvelopeIcon className="absolute left-2 top-2.5 h-5 w-5 text-white-100" />
      <input
        placeholder="E-Mail"
        type="text"
        className="w-full pl-9 pr-4 py-2 rounded-xl border border-blue-400 bg-white/10
      text-white shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400
      placeholder:text-blue-200"
        style={{
          background: 'rgba(30, 41, 59, 0.25)', // dunkles Glas
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
          border: '1.5px solid rgba(59, 130, 246, 0.25)', // blue-500
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
      />
      {error && touched && (
        <p className="text-red-500 text-xs">Please enter a valid email.</p>
      )}
    </div>
  );
}
