const { Router } = require("express");

const router = new Router();

router.get("/permutation-index/ADLUDIO", (req, res, next) => {
    function getPermutations(string) {
        let results = [];
        if (string.length === 1) 
        {
          results.push(string);
          return results;
        }
        for (let i = 0; i < string.length; i++) 
        {
          let firstChar = string[i];
          let otherChar = string.substring(0, i) + string.substring(i + 1);
          let otherPermutations = getPermutations(otherChar);
          
          for (let j = 0; j < otherPermutations.length; j++) {
            results.push(firstChar + otherPermutations[j]);
          }
        }
        return results;
      }
    let permutation = getPermutations('ODIDULA').filter((el, idx, self) =>
    (self.indexOf(el) === idx));
    console.log("Total permutation: "+permutation.length);
    console.log(permutation);
    console.log(permutation.indexOf('ADLUDIO'))
    res.json(permutation.indexOf('ADLUDIO'))
})

module.exports = router;