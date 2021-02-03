const router = require('express').Router(); 

router.get('/',(req,res)=> {
  
    res.send("This is React Native")
});

module.exports = router;