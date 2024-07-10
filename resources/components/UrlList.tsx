import React from 'react';

interface UrlListProps {
  urls: string[];
  className?: string; // Ajout de className optionnel
}

const UrlList: React.FC<UrlListProps> = ({ urls, className }) => {
  return (
    <div id="urlList" className={className}>
      <h2>URLs sauvegardées :</h2>
      {urls.map((url, index) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ))}
    </div>
  );
};

export default UrlList;