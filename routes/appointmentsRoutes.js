const router = require('express').Router();
const ctrl = require('../controllers');

// ROUTES
router.get('/', ctrl.appointments.index);
router.get('/:id', ctrl.appointments.show);
router.post('/', ctrl.appointments.create);
router.put('/:id', ctrl.appointments.update);
router.delete('/:id', ctrl.appointments.destroy);

module.exports = router;  