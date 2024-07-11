document.addEventListener('DOMContentLoaded', () => {
  const codeTextarea = document.getElementById('code')
  if (codeTextarea.value === 'undefined') {
    codeTextarea.value = null
  }
})
