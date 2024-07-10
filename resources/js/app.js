document.addEventListener('DOMContentLoaded', () => {
  console.log('test')
  //Récupération de l'URL
  function getCurrentURL() {
    return window.location.href
  }


  async function getUrl(url) {
    const response = await fetch('.../tmp/db.sqlite3', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }

  const urlID = getCurrentURL().slice(-3)
  const savedCode = localStorage.getItem(urlID)
  const inputID = document.getElementById('url')
  inputID.value = urlID

  let codeUser = ''
  const codeTextarea = document.getElementById('code')

  //Fonction recup de l'URL
  function restoreTextareaContent() {
    if (savedCode) {
      codeTextarea.value = savedCode
    }
  }
  restoreTextareaContent()

  codeTextarea.addEventListener('input', () => {
    codeUser = codeTextarea.value
    localStorage.setItem(urlID, codeUser)
  })

  Read(StK)
})
