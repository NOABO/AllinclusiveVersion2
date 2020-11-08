const router = require("express").Router();
const Event = require("../../db/database/Schema/Events.js");

router.get("/", async (req, res) => {
  try {
    await Event.find({}, (err, data) => {
      res.json(data);
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  await Event.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});
router.post("/companyId", async (req, res) => {
  await Event.find({companyId: req.body.companyId}, (err, data) => {
    res.json(data);
  });
});

router.post("/add", async (req, res,next) => {
  console.log(req.body,'attempt2')
  const newEvent = new Event({
    Etype: req.body.Etype ,
    Ename: req.body.Ename ,
    Edescription: req.body.Edescription ,
    Edate: req.body.Edate ,
    Eplace: req.body.Eplace,
    ElocURL: req.body.ElocURL ,
    Eprice: req.body.Eprice ,
    EvidURL:req.body.EvidURL,
    Esignature: req.body.Esignature ,
    companyId:req.body.companyId
  });
  await newEvent.save(() => {
    
    console.log(newEvent)
    res.json(newEvent);
  })
  
});

router.post("/addmany", async (req, res) => {
  await Event.insertMany(req.body);
  res.json(" all data saved");
});

router.delete("/", async (req, res) => {
  await Event.deleteMany(req.params.id, req.body);
  res.json({ message: "all data deleted" });
});

router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id, req.body);
  res.json({ message: "specific data deleted" });
});

router.put("/:id", async (req, res) => {
  await Event.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
