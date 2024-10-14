import { Request, Response, Router } from "express";
import {
  createUser,
  deleteUser,
  getAlluser,
  getUser,
  permanentlyDeleted,
  updateUser,
} from "./user.services";
const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, gender } = req.body;
  try {
    const user = await createUser(name, email, gender);
    res.send({
      message: "Success create new user!",
      user,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const isDeleted: boolean = false;
    const users = await getAlluser(isDeleted);
    res.send({
      message: "Success get all users!",
      users,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.get("/del", async (req: Request, res: Response) => {
  try {
    const isDeleted: boolean = true;
    const users = await getAlluser(isDeleted);
    res.send({
      message: "Success get all users deleted!",
      users,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  try {
    const user = await getUser(userId);
    res.send({
      message: "Success get one user!",
      user,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  try {
    const user = await deleteUser(userId);
    res.send({
      message: "Successfully deleted user!",
      user,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const { name, email, gender } = req.body;
  try {
    const user = await updateUser(userId, name, email, gender);
    res.send({
      message: "Successfully update user!",
      user,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  try {
    const user = await permanentlyDeleted(userId);
    res.send({
      message: "Successfully deleted user permanently",
      user,
    });
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
