import { Router } from 'express'

const router = Router();
import * as sucursalCtrl from '../controller/sucursales.controller'

router.get('/', sucursalCtrl.listarSucursal);
router.post('/', sucursalCtrl.crearSucursal);
router.put('/:id', sucursalCtrl.actualizarSucursal);
router.delete('/:id', sucursalCtrl.eliminarSucursal);

export default router;