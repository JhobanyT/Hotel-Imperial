import { Router } from 'express'

const router = Router();
import * as reservaCtrl from '../controller/reserva.controller'

router.get('/', reservaCtrl.listarReserva);
router.post('/', reservaCtrl.crearReserva);
router.put('/:id', reservaCtrl.actualizarReserva);
router.delete('/:id', reservaCtrl.eliminarReserva);

export default router;