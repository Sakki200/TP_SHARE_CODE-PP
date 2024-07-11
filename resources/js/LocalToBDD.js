document.addEventListener('DOMContentLoaded', () => {
  function getCurrentURL() {
    return window.location.href;
  }
 

  const codeTextarea = document.getElementById('code');
  const urlList = document.getElementById('urlList');
  const languageDetected = document.getElementById('languageDetected');

  function detectLanguage(code) {
    const result = hljs.highlightAuto(code);
    return result.language || 'unknown';
  }

  function updateLanguageDetection() {
    const code = codeTextarea.value;
    const detectedLanguage = detectLanguage(code);
    languageDetected.textContent = `Langage détecté: ${detectedLanguage}`;
  }

  let timeout = null;
  const form = document.getElementById('codeForm');

  function debounceSave() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      form.submit();
    }, 500);
  }

  codeTextarea.addEventListener('input', () => {
    debounceSave(); // Enregistrement automatique après chaque modification avec un délai
    updateLanguageDetection(); // Mise à jour de la détection de langage après chaque modification
  });

  // Nouvelle fonction pour afficher les URLs
  function updateUrlList() {
    urlList.innerHTML = '<h2>URLs sauvegardées :</h2>';
    // Ici, vous pouvez ajouter la logique pour afficher les URLs sauvegardées depuis la base de données, si nécessaire.
  }

  // Initialisation de la liste des URLs
  updateUrlList();
  updateLanguageDetection();

  // Ajout de la fonctionnalité de copie d'URL
  const copyUrlButton = document.getElementById('copyUrlButton');
  copyUrlButton.addEventListener('click', () => {
    const url = getCurrentURL();
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copiée !!');
    });
  });

  // Ajout de la fonctionnalité de mode nuit si nécessaire
  const nightModeToggle = document.getElementById('nightModeToggle');
  nightModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
  });
});