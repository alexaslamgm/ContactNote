import { Router, Request, Response } from 'express';
import Contact, { IContact } from '../models/contact';

const router: Router = Router();

router.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    const contact: IContact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/contacts', async (req: Request, res: Response) => {
  try {
    const contacts: IContact[] = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
