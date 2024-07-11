document.addEventListener('DOMContentLoaded', () => {
  //Récupération de l'URL
  function getCurrentURL() {
    return window.location.href
  }
  const urlID = getCurrentURL().slice(-3)
  const savedCode = localStorage.getItem(urlID)

  let codeUser = ''
  const codeTextarea = document.getElementById('code')
  const urlList = document.getElementById('urlList')

  //Fonction recup de l'URL
  // function restoreTextareaContent() {
  //   if (savedCode) {
  //     codeTextarea.value = savedCode
  //   }
  // }
  // restoreTextareaContent()

  codeTextarea.addEventListener('input', () => {
    codeUser = codeTextarea.value
    localStorage.setItem(urlID, codeUser)
    updateUrlList() // Mise à jour de la liste des URLs après chaque modification
  })

  // Nouvelle fonction pour afficher les URLs
  function updateUrlList() {
    urlList.innerHTML = '<h2>URLs sauvegardées :</h2>'
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key.length === 3) {
        // Vérifie si la clé a 3 caractères
        const url = `${window.location.origin}/${key}`
        const link = document.createElement('a')
        link.href = url
        link.textContent = url
        urlList.appendChild(link)
      }
    }
  }

  // Initialisation de la liste des URLs
  updateUrlList()

  // Ajout de la fonctionnalité de copie d'URL
  const copyUrlButton = document.getElementById('copyUrlButton')
  copyUrlButton.addEventListener('click', () => {
    const url = getCurrentURL()
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copiée !!')
    })
  })

  // Ajout de la fonctionnalité de mode nuit si nécessaire
  const nightModeToggle = document.getElementById('nightModeToggle')
  nightModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode')
  })
})
