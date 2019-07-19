var dotenv = require("dotenv");
dotenv.config({ path: ".env" });
// Set any missing with defaults
dotenv.config({ path: ".env.example" });
var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var fs = require("fs");

async function Sleep(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  fs.readFile("./App.fluxion", "utf-8", (err, data) => {
    socket.emit("network", data);
  });
});

const port = process.env.PORT || 3000;
http.listen(port, function() {
  console.log("listening on *:", port);
});

const data = [
  {
    links: {
      "0": {
        direction: "->",
        source: { node: 1, port: "alpaca" },
        target: { node: 2, port: "alpaca" },
        id: 0,
        layer_id: 0,
        logging: false
      },
      "8": {
        direction: "->",
        source: { node: 18, port: "data" },
        target: { node: 14, port: "data" },
        id: 8,
        layer_id: 0,
        logging: false
      },
      "16": {
        direction: "->",
        source: { node: 3, port: "data" },
        target: { node: 17, port: "data" },
        id: 16,
        layer_id: 0,
        logging: false
      },
      "18": {
        direction: "->",
        source: { node: 17, port: "data" },
        target: { node: 18, port: "data" },
        id: 18,
        layer_id: 0
      },
      "20": {
        direction: "->",
        source: { node: 14, port: "positive" },
        target: { node: 19, port: "data" },
        id: 20,
        layer_id: 0
      },
      "21": {
        direction: "->",
        source: { node: 1, port: "alpaca" },
        target: { node: 21, port: "alpaca" },
        id: 21,
        layer_id: 0
      },
      "22": {
        direction: "->",
        source: { node: 1, port: "alpaca" },
        target: { node: 22, port: "alpaca" },
        id: 22,
        layer_id: 0
      },
      "23": {
        direction: "->",
        source: { node: 1, port: "alpaca" },
        target: { node: 3, port: "alpaca" },
        id: 23,
        layer_id: 0
      },
      "24": {
        direction: "->",
        source: { node: 4, port: "data" },
        target: { node: 3, port: "timeframe" },
        id: 24,
        layer_id: 0
      },
      "25": {
        direction: "->",
        source: { node: 5, port: "data" },
        target: { node: 3, port: "symbols" },
        id: 25,
        layer_id: 0
      },
      "27": {
        direction: "->",
        source: { node: 2, port: "data" },
        target: { node: 24, port: "data" },
        id: 27,
        layer_id: 0
      },
      "28": {
        direction: "->",
        source: { node: 22, port: "data" },
        target: { node: 25, port: "data" },
        id: 28,
        layer_id: 0,
        logging: false
      },
      "29": {
        direction: "->",
        source: { node: 21, port: "data" },
        target: { node: 26, port: "data" },
        id: 29,
        layer_id: 0,
        logging: false
      },
      "30": {
        direction: "->",
        source: { node: 14, port: "combined" },
        target: { node: 23, port: "data" },
        id: 30,
        layer_id: 0
      },
      "32": {
        direction: "->",
        source: { node: 25, port: "false" },
        target: { node: 23, port: "noPositions" },
        id: 32,
        layer_id: 0
      },
      "33": {
        direction: "->",
        source: { node: 26, port: "true" },
        target: { node: 23, port: "account" },
        id: 33,
        layer_id: 0,
        logging: false
      },
      "34": {
        direction: "->",
        source: { node: 1, port: "alpaca" },
        target: { node: 27, port: "alpaca" },
        id: 34,
        layer_id: 0
      },
      "35": {
        direction: "->",
        source: { node: 23, port: "data" },
        target: { node: 27, port: "data" },
        id: 35,
        layer_id: 0
      },
      "36": {
        direction: "->",
        source: { node: 25, port: "true" },
        target: { node: 28, port: "positions" },
        id: 36,
        layer_id: 0,
        logging: false
      },
      "38": {
        direction: "->",
        source: { node: 28, port: "positions" },
        target: { node: 29, port: "data" },
        id: 38,
        layer_id: 0,
        logging: false
      },
      "39": {
        direction: "->",
        source: { node: 14, port: "stocks" },
        target: { node: 28, port: "score" },
        id: 39,
        layer_id: 0
      },
      "41": {
        direction: "->",
        source: { node: 1, port: "alpaca" },
        target: { node: 30, port: "alpaca" },
        id: 41,
        layer_id: 0
      },
      "42": {
        direction: "->",
        source: { node: 30, port: "data" },
        target: { node: 31, port: "orders" },
        id: 42,
        layer_id: 0
      },
      "43": {
        direction: "->",
        source: { node: 31, port: "false" },
        target: { node: 27, port: "noOpenOrders" },
        id: 43,
        layer_id: 0
      },
      "44": {
        direction: "->",
        source: { node: 28, port: "noSells" },
        target: { node: 32, port: "noSells" },
        id: 44,
        layer_id: 0
      },
      "45": {
        direction: "->",
        source: { node: 26, port: "true" },
        target: { node: 32, port: "hasBuyingPower" },
        id: 45,
        layer_id: 0
      },
      "46": {
        direction: "->",
        source: { node: 31, port: "false" },
        target: { node: 32, port: "noOrders" },
        id: 46,
        layer_id: 0
      },
      "47": {
        direction: "->",
        source: { node: 14, port: "combined" },
        target: { node: 32, port: "stocks" },
        id: 47,
        layer_id: 0
      },
      "50": {
        direction: "->",
        source: { node: 31, port: "false" },
        target: { node: 29, port: "noOrders" },
        id: 50,
        layer_id: 0
      },
      "51": {
        direction: "->",
        source: { node: 29, port: "orders" },
        target: { node: 27, port: "data" },
        id: 51,
        layer_id: 0
      },
      "52": {
        direction: "->",
        source: { node: 32, port: "data" },
        target: { node: 27, port: "data" },
        id: 52,
        layer_id: 0
      },
      "66": {
        direction: "->",
        source: { node: 33, port: "ping" },
        target: { node: 1, port: "ping" },
        id: 66,
        layer_id: 0
      }
    },
    throttle: 10
  }
];
const Channel = function() {
  return new Proxy(
    {
      takes: [],
      puts: []
    },
    {
      get: function(obj, prop) {
        if (prop === "take") {
          // if puts ready (upstream)
          if (obj.puts.length) {
            return () => obj.puts.shift();
          }
          // no puts ready (might happen downstream)
          let ref;
          const prom = new Promise(resolve => (ref = resolve));
          obj.takes.push(ref);
          return () => prom;
        }
        if (prop === "put") {
          // if takes ready (upstream)
          if (obj.takes.length) {
            return obj.takes.shift();
          }
          // no takes ready (might happen downstream);
          const fn = data => {
            obj.puts.push(new Promise(resolve => resolve(data)));
          };
          return fn;
        }
      }
    }
  );
};
const engine = {
  outputs: {},
  inputs: {}
};
// Links
data.map(layer => {
  const links = layer.links;
  Object.keys(links).map(link_id => {
    console.log("Making link", link_id);
    const link = links[link_id];
    const input = new Channel();
    const output = new Channel();
    const { source, target, direction = "->" } = link;
    // animation of packet, one direction
    if (direction === "->") {
      async function leftToRightmiddleware() {
        let outputData = await output.take();
        if (link.logging) {
          console.log(outputData);
        }
        io.emit("packet:" + link_id, outputData);
        await Sleep(layer.throttle * 1000 || 0);
        input.put(outputData);
        leftToRightmiddleware.call(this).catch(() => {});
      }
      leftToRightmiddleware.call(this).catch(console.log);
    }
    // output side of link
    if (
      typeof engine.outputs[source.node] !== "undefined" &&
      typeof engine.outputs[source.node][source.port] !== "undefined"
    ) {
      // fork channel
      const pipe = new Channel();
      const originalChan = engine.outputs[source.node][source.port];
      (async () => {
        while (pipe) {
          const data = await pipe.take();
          originalChan.put(data);
          output.put(data);
        }
      })();
      engine.outputs[source.node][source.port] = pipe;
    } else {
      // new channel
      engine.outputs[source.node] = engine.outputs[source.node] || {};
      engine.outputs[source.node][source.port] = output;
    }
    // input side of link
    if (
      typeof engine.inputs[target.node] !== "undefined" &&
      typeof engine.inputs[target.port] !== "undefined"
    ) {
      const newChannel = new Channel();
      const originalChannel = engine.inputs[target.node][target.port];
      engine.inputs[target.node][target.port] = newChannel;
      (async () => {
        const data = await originalChannel.take();
        engine.inputs[target.node][target.port].put(data);
      })();
      (async () => {
        const data = await input.take();
        engine.inputs[target.node][target.port].put(data);
      })();
    } else {
      // new channel
      engine.inputs[target.node] = engine.inputs[target.node] || {};
      engine.inputs[target.node][target.port] = input;
    }
  });
});

(async () => {
  console.log("Making node", 1);
  const inputs = engine.inputs["1"];
  const outputs = engine.outputs["1"];
  const Alpaca = require("@alpacahq/alpaca-trade-api");
  let running = true;
  while (running) {
    try {
      await inputs.ping.take();
      const alpaca = new Alpaca({
        keyId: process.env.ALPACA_KEY,
        secretKey: process.env.ALPACA_SECRET,
        paper: true
      });
      outputs.alpaca.put(alpaca);
    } catch (e) {
      console.log(e);
      io.emit("problem:1", e);
    }
  }
})();
(async () => {
  console.log("Making node", 2);
  const inputs = engine.inputs["2"];
  const outputs = engine.outputs["2"];

  let running = true;
  while (running) {
    try {
      const alpaca = await inputs.alpaca.take();
      alpaca.getClock().then(outputs.data.put);
    } catch (e) {
      console.log(e);
      io.emit("problem:2", e);
    }
  }
})();
(async () => {
  console.log("Making node", 3);
  const inputs = engine.inputs["3"];
  const outputs = engine.outputs["3"];
  const timeframe = await inputs.timeframe.take();
  const symbols = await inputs.symbols.take();
  let running = true;
  while (running) {
    try {
      const alpaca = await inputs.alpaca.take();
      const group1 = symbols.slice(0, 199);
      const group2 = symbols.slice(200, 399);
      const group3 = symbols.slice(400, 505);
      const promise1 = alpaca.getBars("day", group1, {
        limit: 50,
        ...timeframe
      });
      const promise2 = alpaca.getBars("day", group2, {
        limit: 50,
        ...timeframe
      });
      const promise3 = alpaca.getBars("day", group3, {
        limit: 50,
        ...timeframe
      });

      Promise.all([promise1, promise2, promise3])
        .then(responses => {
          return responses.reduce(function(result, current) {
            return Object.assign(result, current);
          }, {});
        })
        .then(outputs.data.put);
    } catch (e) {
      console.log(e);
      io.emit("problem:3", e);
    }
  }
})();
(async () => {
  console.log("Making node", 4);
  const inputs = engine.inputs["4"];
  const outputs = engine.outputs["4"];
  const moment = require("moment");

  try {
    const start = moment()
      .hours(9)
      .minutes(30)
      .seconds(0)
      .subtract(50, "days")
      .toDate();
    const end = moment()
      .hours(9)
      .minutes(30)
      .seconds(0)
      .toDate();

    outputs.data.put({ start, end });
    running = false;
  } catch (e) {
    console.log(e);
    io.emit("problem:4", e);
  }
})();
(async () => {
  console.log("Making node", 5);
  const inputs = engine.inputs["5"];
  const outputs = engine.outputs["5"];

  try {
    if (!outputs) return;
    outputs.data.put([
      "MMM",
      "ABT",
      "ABBV",
      "ABMD",
      "ACN",
      "ATVI",
      "ADBE",
      "AMD",
      "AAP",
      "AES",
      "AMG",
      "AFL",
      "A",
      "APD",
      "AKAM",
      "ALK",
      "ALB",
      "ARE",
      "ALXN",
      "ALGN",
      "ALLE",
      "AGN",
      "ADS",
      "LNT",
      "ALL",
      "GOOGL",
      "GOOG",
      "MO",
      "AMZN",
      "AEE",
      "AAL",
      "AEP",
      "AXP",
      "AIG",
      "AMT",
      "AWK",
      "AMP",
      "ABC",
      "AME",
      "AMGN",
      "APH",
      "APC",
      "ADI",
      "ANSS",
      "ANTM",
      "AON",
      "AOS",
      "APA",
      "AIV",
      "AAPL",
      "AMAT",
      "APTV",
      "ADM",
      "ARNC",
      "ANET",
      "AJG",
      "AIZ",
      "ATO",
      "T",
      "ADSK",
      "ADP",
      "AZO",
      "AVB",
      "AVY",
      "BHGE",
      "BLL",
      "BAC",
      "BK",
      "BAX",
      "BBT",
      "BDX",
      "BRK",
      "BBY",
      "BIIB",
      "BLK",
      "HRB",
      "BA",
      "BKNG",
      "BWA",
      "BXP",
      "BSX",
      "BMY",
      "AVGO",
      "BR",
      "BF",
      "CHRW",
      "COG",
      "CDNS",
      "CPB",
      "COF",
      "CPRI",
      "CAH",
      "KMX",
      "CCL",
      "CAT",
      "CBRE",
      "CBS",
      "CE",
      "CELG",
      "CNC",
      "CNP",
      "CTL",
      "CERN",
      "CF",
      "SCHW",
      "CHTR",
      "CVX",
      "CMG",
      "CB",
      "CHD",
      "CI",
      "XEC",
      "CINF",
      "CTAS",
      "CSCO",
      "C",
      "CFG",
      "CTXS",
      "CLX",
      "CME",
      "CMS",
      "KO",
      "CTSH",
      "CL",
      "CMCSA",
      "CMA",
      "CAG",
      "CXO",
      "COP",
      "ED",
      "STZ",
      "COO",
      "CPRT",
      "GLW",
      "COST",
      "COTY",
      "CCI",
      "CSX",
      "CMI",
      "CVS",
      "DHI",
      "DHR",
      "DRI",
      "DVA",
      "DE",
      "DAL",
      "XRAY",
      "DVN",
      "FANG",
      "DLR",
      "DFS",
      "DISCA",
      "DISCK",
      "DISH",
      "DG",
      "DLTR",
      "D",
      "DOV",
      "DOW",
      "DWDP",
      "DTE",
      "DRE",
      "DUK",
      "DXC",
      "ETFC",
      "EMN",
      "ETN",
      "EBAY",
      "ECL",
      "EIX",
      "EW",
      "EA",
      "EMR",
      "ETR",
      "EOG",
      "EFX",
      "EQIX",
      "EQR",
      "ESS",
      "EL",
      "EVRG",
      "ES",
      "RE",
      "EXC",
      "EXPE",
      "EXPD",
      "EXR",
      "XOM",
      "FFIV",
      "FB",
      "FAST",
      "FRT",
      "FDX",
      "FIS",
      "FITB",
      "FE",
      "FRC",
      "FISV",
      "FLT",
      "FLIR",
      "FLS",
      "FLR",
      "FMC",
      "FL",
      "F",
      "FTNT",
      "FTV",
      "FBHS",
      "BEN",
      "FCX",
      "GPS",
      "GRMN",
      "IT",
      "GD",
      "GE",
      "GIS",
      "GM",
      "GPC",
      "GILD",
      "GPN",
      "GS",
      "GWW",
      "HAL",
      "HBI",
      "HOG",
      "HRS",
      "HIG",
      "HAS",
      "HCA",
      "HCP",
      "HP",
      "HSIC",
      "HSY",
      "HES",
      "HPE",
      "HLT",
      "HFC",
      "HOLX",
      "HD",
      "HON",
      "HRL",
      "HST",
      "HPQ",
      "HUM",
      "HBAN",
      "HII",
      "IDXX",
      "INFO",
      "ITW",
      "ILMN",
      "IR",
      "INTC",
      "ICE",
      "IBM",
      "INCY",
      "IP",
      "IPG",
      "IFF",
      "INTU",
      "ISRG",
      "IVZ",
      "IPGP",
      "IQV",
      "IRM",
      "JKHY",
      "JEC",
      "JBHT",
      "JEF",
      "SJM",
      "JNJ",
      "JCI",
      "JPM",
      "JNPR",
      "KSU",
      "K",
      "KEY",
      "KEYS",
      "KMB",
      "KIM",
      "KMI",
      "KLAC",
      "KSS",
      "KHC",
      "KR",
      "LB",
      "LLL",
      "LH",
      "LRCX",
      "LW",
      "LEG",
      "LEN",
      "LLY",
      "LNC",
      "LIN",
      "LKQ",
      "LMT",
      "L",
      "LOW",
      "LYB",
      "MTB",
      "MAC",
      "M",
      "MRO",
      "MPC",
      "MAR",
      "MMC",
      "MLM",
      "MAS",
      "MA",
      "MAT",
      "MKC",
      "MXIM",
      "MCD",
      "MCK",
      "MDT",
      "MRK",
      "MET",
      "MTD",
      "MGM",
      "MCHP",
      "MU",
      "MSFT",
      "MAA",
      "MHK",
      "TAP",
      "MDLZ",
      "MNST",
      "MCO",
      "MS",
      "MOS",
      "MSI",
      "MSCI",
      "MYL",
      "NDAQ",
      "NOV",
      "NKTR",
      "NTAP",
      "NFLX",
      "NWL",
      "NEM",
      "NWSA",
      "NWS",
      "NEE",
      "NLSN",
      "NKE",
      "NI",
      "NBL",
      "JWN",
      "NSC",
      "NTRS",
      "NOC",
      "NCLH",
      "NRG",
      "NUE",
      "NVDA",
      "ORLY",
      "OXY",
      "OMC",
      "OKE",
      "ORCL",
      "PCAR",
      "PKG",
      "PH",
      "PAYX",
      "PYPL",
      "PNR",
      "PBCT",
      "PEP",
      "PKI",
      "PRGO",
      "PFE",
      "PM",
      "PSX",
      "PNW",
      "PXD",
      "PNC",
      "RL",
      "PPG",
      "PPL",
      "PFG",
      "PG",
      "PGR",
      "PLD",
      "PRU",
      "PEG",
      "PSA",
      "PHM",
      "PVH",
      "QRVO",
      "PWR",
      "QCOM",
      "DGX",
      "RJF",
      "RTN",
      "O",
      "RHT",
      "REG",
      "REGN",
      "RF",
      "RSG",
      "RMD",
      "RHI",
      "ROK",
      "ROL",
      "ROP",
      "ROST",
      "RCL",
      "CRM",
      "SBAC",
      "SLB",
      "STX",
      "SEE",
      "SRE",
      "SHW",
      "SPG",
      "SWKS",
      "SLG",
      "SNA",
      "SO",
      "LUV",
      "SPGI",
      "SWK",
      "SBUX",
      "STT",
      "SYK",
      "STI",
      "SIVB",
      "SYMC",
      "SYF",
      "SNPS",
      "SYY",
      "TROW",
      "TTWO",
      "TPR",
      "TGT",
      "TEL",
      "FTI",
      "TFX",
      "TXN",
      "TXT",
      "TMO",
      "TIF",
      "TWTR",
      "TJX",
      "TMK",
      "TSS",
      "TSCO",
      "TDG",
      "TRV",
      "TRIP",
      "FOXA",
      "FOX",
      "TSN",
      "UDR",
      "ULTA",
      "USB",
      "UAA",
      "UA",
      "UNP",
      "UAL",
      "UNH",
      "UPS",
      "URI",
      "UTX",
      "UHS",
      "UNM",
      "VFC",
      "VLO",
      "VAR",
      "VTR",
      "VRSN",
      "VRSK",
      "VZ",
      "VRTX",
      "VIAB",
      "V",
      "VNO",
      "VMC",
      "WAB",
      "WMT",
      "WBA",
      "DIS",
      "WM",
      "WAT",
      "WEC",
      "WCG",
      "WFC",
      "WELL",
      "WDC",
      "WU",
      "WRK",
      "WY",
      "WHR",
      "WMB",
      "WLTW",
      "WYNN",
      "XEL",
      "XRX",
      "XLNX",
      "XYL",
      "YUM",
      "ZBH",
      "ZION",
      "ZTS"
    ]);
    running = false;
  } catch (e) {
    console.log(e);
    io.emit("problem:5", e);
  }
})();
(async () => {
  console.log("Making node", 14);
  const inputs = engine.inputs["14"];
  const outputs = engine.outputs["14"];
  const _ = require("lodash");
  const math = require("mathjs");
  let running = true;
  while (running) {
    try {
      const data = await inputs.data.take();
      const positives = {};
      const negatives = {};
      const neutral = {};
      const stocks = { positive: [], negative: [] };
      _.forEach(data, ({ ema, live }, symbol) => {
        if (!live.length) {
          return true;
        }
        const lastClosingPrice = live[live.length - 1];
        const lastEMAPrice = ema[ema.length - 1];
        const diff = Math.round(lastClosingPrice - lastEMAPrice);
        const means = math.mean([live, ema], 1);
        const meanTrend = Math.round(means[0] - means[1]);
        if (diff > 1 && meanTrend > 0) {
          _.set(positives, [diff, symbol], { live, ema, diff });
          stocks.positive.push(symbol);
          return true;
        }
        if (diff < -2 && lastClosingPrice <= 500 && meanTrend > 0) {
          _.set(negatives, [diff, symbol], { live, ema, diff });
          stocks.negative.push(symbol);
          return true;
        }
        neutral[symbol] = { live, ema, diff };
      });
      //console.log(positives);
      outputs.positive.put(positives);
      //outputs.negative.put(negatives)
      outputs.combined.put({ ...positives, ...negatives });
      outputs.stocks.put(stocks);
      //outputs.neutral.put(neutral);
    } catch (e) {
      console.log(e);
      io.emit("problem:14", e);
    }
  }
})();
(async () => {
  console.log("Making node", 17);
  const inputs = engine.inputs["17"];
  const outputs = engine.outputs["17"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      const stocks = await inputs.data.take();
      const closingData = {};
      _.forEach(stocks, (data, symbol) => {
        closingData[symbol] = _.map(data, "c");
      });
      outputs.data.put(closingData);
    } catch (e) {
      console.log(e);
      io.emit("problem:17", e);
    }
  }
})();
(async () => {
  console.log("Making node", 18);
  const inputs = engine.inputs["18"];
  const outputs = engine.outputs["18"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      function EMACalc(mArray, mRange) {
        var k = 2 / (mRange + 1);
        // first item is just the same as the first item in the input
        emaArray = [mArray[0]];
        // for the rest of the items, they are computed with the previous one
        for (var i = 1; i < mArray.length; i++) {
          emaArray.push(mArray[i] * k + emaArray[i - 1] * (1 - k));
        }
        return emaArray;
      }
      const data = await inputs.data.take();
      const output = {};
      _.forEach(data, (closingPrices, symbol) => {
        output[symbol] = {
          live: closingPrices,
          ema: EMACalc(closingPrices, 10)
        };
      });
      outputs.data.put(output);
    } catch (e) {
      console.log(e);
      io.emit("problem:18", e);
    }
  }
})();
(async () => {
  console.log("Making node", 21);
  const inputs = engine.inputs["21"];
  const outputs = engine.outputs["21"];

  let running = true;
  while (running) {
    try {
      const alpaca = await inputs.alpaca.take();
      alpaca.getAccount().then(outputs.data.put);
    } catch (e) {
      console.log(e);
      io.emit("problem:21", e);
    }
  }
})();
(async () => {
  console.log("Making node", 22);
  const inputs = engine.inputs["22"];
  const outputs = engine.outputs["22"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      //await inputs.marketIsOpen.take();
      const alpaca = await inputs.alpaca.take();
      alpaca.getPositions().then(data => {
        _.get(outputs, "data.put", () => {})(data);
      });
    } catch (e) {
      console.log(e);
      io.emit("problem:22", e);
    }
  }
})();
(async () => {
  console.log("Making node", 23);
  const inputs = engine.inputs["23"];
  const outputs = engine.outputs["23"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      await inputs.noPositions.take();
      const account = await inputs.account.take();
      const scoredStocks = await inputs.data.take();
      const buyingPower = account.buying_power;
      const orders = {};
      let totalValue = 0;
      let safeValue = 0;
      while (totalValue <= buyingPower) {
        _.forEach(scoredStocks, function(stocks, score) {
          _.forEach(stocks, function(stock, symbol) {
            totalValue += stock.live[stock.live.length - 1];
            if (!orders[symbol]) {
              orders[symbol] = {
                symbol,
                side: "buy",
                qty: 0
              };
            }
            if (totalValue <= buyingPower) {
              safeValue = totalValue;
              orders[symbol].qty += 1;
            }
          });
        });
      }
      console.log(totalValue, safeValue);
      console.log(orders);
      outputs.data.put(orders);
    } catch (e) {
      console.log(e);
      io.emit("problem:23", e);
    }
  }
})();
(async () => {
  console.log("Making node", 24);
  const inputs = engine.inputs["24"];
  const outputs = engine.outputs["24"];

  let running = true;
  while (running) {
    try {
      const data = await inputs.data.take();
      if (!outputs) return false;
      if (outputs[data.is_open]) {
        outputs[data.is_open].put("*");
      }
    } catch (e) {
      console.log(e);
      io.emit("problem:24", e);
    }
  }
})();
(async () => {
  console.log("Making node", 25);
  const inputs = engine.inputs["25"];
  const outputs = engine.outputs["25"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      const data = await inputs.data.take();
      if (data.length) {
        _.get(outputs, "true.put", () => {})(data);
      } else {
        _.get(outputs, "false.put", () => {})(data);
      }
    } catch (e) {
      console.log(e);
      io.emit("problem:25", e);
    }
  }
})();
(async () => {
  console.log("Making node", 26);
  const inputs = engine.inputs["26"];
  const outputs = engine.outputs["26"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      const data = await inputs.data.take();
      const hasBuyingPower = parseInt(data.buying_power) > 0;
      if (hasBuyingPower) {
        _.get(outputs, "true.put", () => {})(data);
      } else {
        _.get(outputs, "false.put", () => {})(data);
      }
    } catch (e) {
      console.log(e);
      io.emit("problem:26", e);
    }
  }
})();
(async () => {
  console.log("Making node", 27);
  const inputs = engine.inputs["27"];
  const outputs = engine.outputs["27"];
  const _ = require("lodash");
  const alpaca = await inputs.alpaca.take();

  let running = true;
  while (running) {
    try {
      await inputs.noOpenOrders.take();
      const data = await inputs.data.take();
      _.forEach(data, function(order) {
        order.type = "market";
        order.time_in_force = "day";
        console.log("Sending order", order);
        alpaca
          .createOrder(order)
          .then(console.log)
          .catch(console.log);
      });
    } catch (e) {
      console.log(e);
      io.emit("problem:27", e);
    }
  }
})();
(async () => {
  console.log("Making node", 28);
  const inputs = engine.inputs["28"];
  const outputs = engine.outputs["28"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      let positions = await inputs.positions.take();
      positions = _.keyBy(positions, "symbol");
      const scores = await inputs.score.take();
      _.forEach(scores.positive, function(symbol) {
        console.log("removing positive position", symbol);
        delete positions[symbol];
      });
      if (Object.keys(positions).length) {
        console.log("sell positions", positions);
        outputs.positions.put(positions);
      } else {
        outputs.noSells.put("*");
      }
    } catch (e) {
      console.log(e);
      io.emit("problem:28", e);
    }
  }
})();
(async () => {
  console.log("Making node", 29);
  const inputs = engine.inputs["29"];
  const outputs = engine.outputs["29"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      await inputs.noOrders.take();
      const data = await inputs.data.take();
      const orders = {};
      _.forEach(data, function(position, symbol) {
        orders[symbol] = {
          symbol,
          side: "sell",
          qty: position.qty
        };
      });
      outputs.orders.put(orders);
    } catch (e) {
      console.log(e);
      io.emit("problem:29", e);
    }
  }
})();
(async () => {
  console.log("Making node", 30);
  const inputs = engine.inputs["30"];
  const outputs = engine.outputs["30"];

  let running = true;
  while (running) {
    try {
      //await inputs.marketIsOpen.take();
      const alpaca = await inputs.alpaca.take();
      alpaca.getOrders().then(outputs.data.put);
    } catch (e) {
      console.log(e);
      io.emit("problem:30", e);
    }
  }
})();
(async () => {
  console.log("Making node", 31);
  const inputs = engine.inputs["31"];
  const outputs = engine.outputs["31"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      const orders = await inputs.orders.take();
      if (orders.length) {
        _.get(outputs, "true.put", () => {})(data);
      } else {
        _.get(outputs, "false.put", () => {})(data);
      }
    } catch (e) {
      console.log(e);
      io.emit("problem:31", e);
    }
  }
})();
(async () => {
  console.log("Making node", 32);
  const inputs = engine.inputs["32"];
  const outputs = engine.outputs["32"];
  const _ = require("lodash");
  let running = true;
  while (running) {
    try {
      await inputs.noOrders.take();
      await inputs.noSells.take();
      const scoredStocks = await inputs.stocks.take();
      const account = await inputs.hasBuyingPower.take();
      const buyingPower = account.buying_power;
      console.log("To Buy:", scoredStocks, "Buying Power:", buyingPower);
      let orders = {};
      let totalValue = 0;
      let safeValue = 0;
      while (totalValue <= buyingPower) {
        _.forEach(scoredStocks, function(stocks, score) {
          _.forEach(stocks, function(stock, symbol) {
            totalValue += stock.live[stock.live.length - 1];
            if (!orders[symbol]) {
              orders[symbol] = {
                symbol,
                side: "buy",
                qty: 0
              };
            }
            if (totalValue <= buyingPower) {
              safeValue = totalValue;
              orders[symbol].qty += 1;
            }
          });
        });
      }
      orders = _.filter(orders, order => order.qty > 0);
      console.log(totalValue, safeValue);
      console.log(orders);
      if (orders.length) {
        outputs.data.put(orders);
      } else {
        console.log("Not enough buying power");
      }
    } catch (e) {
      console.log(e);
      io.emit("problem:32", e);
    }
  }
})();
(async () => {
  console.log("Making node", 33);
  const inputs = engine.inputs["33"];
  const outputs = engine.outputs["33"];

  try {
    function ping() {
      setTimeout(() => {
        outputs.ping.put("*");
        ping();
      }, 30000);
    }
    outputs.ping.put("*");
    ping();
  } catch (e) {
    console.log(e);
    io.emit("problem:33", e);
  }
})();
