import CodeController from '#controllers/code_controller'
import URLController from '#controllers/url_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [URLController, 'RedirectURL'])
router.get('/:id', [URLController, 'ShowURL'])

router.post('/code/send', [CodeController, 'store']).as('code.store')
