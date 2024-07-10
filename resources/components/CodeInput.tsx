import React from 'react';

interface CodeInputProps {
  code: string;
  onChange: (newCode: string) => void;
  className?: string; // Ajout de className optionnel
}

const CodeInput: React.FC<CodeInputProps> = ({ code, onChange, className }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder="Entrez votre code ici..."
    />
  );
};

export default CodeInput;