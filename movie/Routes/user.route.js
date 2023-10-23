const {Router}   = require ("express");
const { signup, login, userdelete, createmovie, movieupdate, moviedelete, movierating, moviecomment, moviefilter } = require("../controllers/user.controllers");
const { signupcheck, logincheck } = require("../middlewares/user.middleware");
const router = Router();

router.post("/user/signup" , signupcheck , signup)
router.post("/user/login" , logincheck , login)
router.delete("/user/delete/:id" , userdelete)

router.post("/movie/create", createmovie);
router.patch("/movie/update/:id", movieupdate);
router.delete("/movie/delete/:id", moviedelete);
router.patch("/movie/rating/:id", movierating);
router.patch("/movie/comment/:id",moviecomment );
router.get("/movie/filter",moviefilter )

module.exports = router

