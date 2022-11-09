import { Router } from 'express'

const router = Router();
import * as eventosCtrl from '../controller/eventos.controller'

router.get('/', eventosCtrl.listarEvento);
router.post('/', eventosCtrl.crearEvento);
router.put('/:id', eventosCtrl.actualizarEvento);
router.delete('/:id', eventosCtrl.eliminarEvento);

export default router;