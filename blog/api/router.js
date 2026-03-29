import { akcje } from "./akcje.js"; 
import { Router } from 'express'; 
const router = Router(); 
 
router.get('/api/posts/', akcje.findAllPosts);
export {router};

