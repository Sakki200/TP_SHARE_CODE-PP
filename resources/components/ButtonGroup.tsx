import React from 'react';

interface ButtonGroupProps {
  onNightModeToggle: () => void;
  onCopyUrl: () => void;
  className?: string; // Ajout de className optionnel
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onNightModeToggle, onCopyUrl, className }) => {
  return (
    <div id="group" className={className}>
      <button onClick={onNightModeToggle}>Mode Nuit</button>
      <button onClick={onCopyUrl}>Copier URL</button>
    </div>
  );
};

export default ButtonGroup;