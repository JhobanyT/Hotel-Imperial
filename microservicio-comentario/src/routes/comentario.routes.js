import { Router } from 'express'

const router = Router();
import * as comentarioCtrl from '../controller/comentario.controller'

router.get('/', comentarioCtrl.listarComentario);
router.post('/', comentarioCtrl.realizarComentario);
router.put('/:id', comentarioCtrl.actualizarComentario);
router.delete('/:id', comentarioCtrl.eliminarComentario);

export default router;