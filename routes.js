const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/btc", (req, res) => {
  const url = "https://coinmarketcap.com/currencies/bitcoin/";
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        const $ = cheerio.load(response.data);
        const price = $(".sc-f70bb44c-0.jxpCgO.base-text").text();
        if (price) {
          res.json({ price: price });
        } else {
          res.json({ price: undefined });
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.json({ error });
    });
});

router.get("/btc2", (req, res) => {
  const url =
    "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=10&category=spot&centerType=all&sort=cmc_rank_advanced&direction=desc&spotUntracked=true";
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        res.json(response.data);
      } else {
        res.json({ price: undefined });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.json({ error });
    });
});

module.exports = router;
