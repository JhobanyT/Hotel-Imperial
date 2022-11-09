import { Router } from 'express'

const router = Router();
import * as servicioCtrl from '../controller/servicios.controller'

router.get('/', servicioCtrl.listarServicio);
router.post('/', servicioCtrl.crearServicio);
router.put('/:id', servicioCtrl.actualizarServicio);
router.delete('/:id', servicioCtrl.eliminarServicio);

export default router;