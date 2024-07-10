import Code from '#models/code'
// import { codeValidator } from '#validators/code'
import type { HttpContext } from '@adonisjs/core/http'

export default class CodeController {
  async store({ request, response }: HttpContext) {
    const data = request.only(['id', 'url', 'code'])
    const user = await Code.create(data)
    return response.redirect('/')
  }
}
