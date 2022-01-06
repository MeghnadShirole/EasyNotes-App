import express from 'express';
import * as noteController from '../controllers/note.controller.js';
import { newNoteValidator } from '../validators/note.validator.js';
import { noteAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

//route to get all notes
router.get('', noteController.getAllNotes);

//route to create a new note
router.post('', newNoteValidator, noteController.newNote);

//route to get a single note by their note id
router.get('/:_id', noteAuth, noteController.getNote);

//route to update a single note by their note id
router.put('/:_id', noteController.updateNote);

//route to delete a single note by their note id
router.delete('/:_id', noteController.deleteNote);

export default router;