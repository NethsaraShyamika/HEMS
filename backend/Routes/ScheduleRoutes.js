import express from 'express';
import { 
  createSchedule, 
  getSchedules, 
  getScheduleById, 
  patchSchedule, 
  replaceSchedule, 
  deleteSchedule 
} from '../Controllers/ScheduleControllers.js';

const router = express.Router();

// Create new schedule
router.post('/', createSchedule);

// Get all schedules
router.get('/', getSchedules);

// Get single schedule by ID
router.get('/:id', getScheduleById);

// Update schedule (PUT = full replace, PATCH = partial update)
router.patch('/:id', patchSchedule);   // partial update
router.put('/:id', replaceSchedule);   // full replace


// Delete schedule
router.delete('/:id', deleteSchedule);

export default router;
