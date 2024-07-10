import vine from '@vinejs/vine'

export const codeValidator = vine.compile(
  vine.object({
    url: vine.string().maxLength(3),
    code: vine.string(),
  })
)
