exports.onInitialClientRender = () => {
  document.querySelectorAll('[translation-result=on]').forEach(element => {
    element.addEventListener('click', (_) => {
      let next = element.nextElementSibling
      next.hasAttribute('translation-origin') && (
        next.getAttribute('translation-origin') === 'off' ? next.setAttribute('translation-origin', 'on') : next.setAttribute('translation-origin', 'off')
      )
    })
  })
}
