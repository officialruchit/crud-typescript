import Express from "express";
import {
  createuser,
  deleteuser,
  getusers,
  updateuser,
} from "../controllers/userController";
const router = Express.Router();

router.post("/", createuser);
router.get("/", getusers);
router.put("/:id", updateuser);
router.delete("/:id", deleteuser);

export default router;
