import Code from '#models/code'
import { codeValidator } from '#validators/code'
import type { HttpContext } from '@adonisjs/core/http'

export default class CodeController {
  async show({ view }: HttpContext) {
    const test = await Code.create({
      url: 'URL',
      code: 'test',
    })
    return view.render('pages/code')
  }

  async store({ request, response }: HttpContext) {
    const { url, code } = await request.validateUsing(codeValidator)
    await Code.create({ url, code })

    return response.redirect().toRoute('code.show')
  }
}
