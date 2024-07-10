export default class URLController {
  async RedirectURL({ response }: any) {
    //Pour l'url random
    let id = ''
    const length = 3
    const patern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const paternLength = patern.length
    let counter = 0
    while (counter < length) {
      id += patern.charAt(Math.floor(Math.random() * paternLength))
      counter += 1
    }

    return response.redirect(`/${id}`)
  }

  async ShowURL({ params, view }: any) {
    const id = params.id
    return view.render('pages/home', {
      id: id,
    })
  }
}