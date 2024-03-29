import { Router } from "express";
import Joi from "joi";
import { createValidator } from "express-joi-validation";
import { adminRole, isAuthenticated } from "../../middleware/auth.js";
import {
  createAlbum,
  deleteAlbum,
  getAlbum,
  getAllAlbum,
  updateAlbum,
} from "../../controllers/album/index.js";

const router = Router();
const validator = createValidator({});

// Server Side Validation
const albumSchema = Joi.object({
  name: Joi.string().min(5).max(25).required(),
  imageUrl: Joi.string().required(),
});

// When user try to register fire this function
router.post(
  "/create-album",
  validator.body(albumSchema),
  isAuthenticated,
  adminRole("admin"),
  createAlbum
);
router.get("/getAllAlbum", isAuthenticated, getAllAlbum);
router.get("/getAlbum/:id", isAuthenticated, getAlbum);
router.put("/update/:id", isAuthenticated, adminRole("admin"), updateAlbum);
router.delete("/delete/:id", isAuthenticated, adminRole("admin"), deleteAlbum);

export default router;
