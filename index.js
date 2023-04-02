var PSD = require("psd");

const staffCode = [
  "AAF",
  "ANE",
  "ASN",
  "BNS",
  "CED",
  "CRS",
  "DMO",
  "DAN",
  "DAW",
  "DYH",
  "EDM",
  "EJJ",
  "ERT",
  "ESH",
  "GRC",
  "GAD",
  "GEC",
  "HNF",
  "IVM",
  "JAH",
  "JNR",
  "JDJ",
  "JHG",
  "JOK",
  "JUC",
  "KHM",
  "KAP",
  "KEP",
  "KVP",
  "LRL",
  "LIW",
  "MDT",
  "MAR",
  "MFA",
  "MRR",
  "NAM",
  "NIW",
  "RAL",
  "RCM",
  "RYC",
  "RYD",
  "SBG",
  "SDA",
  "SNN",
  "SOR",
  "SUD",
  "FTT",
];

const runCode = () => {
  for (let i = 0; i < staffCode.length; i++) {
    let psd_path = `./psd/Staff Pics/2022-2023/PSD/${staffCode[i]}.psd`;

    PSD.open(psd_path)
      .then(function (psd) {
        let new_rename_path = `./renamed/${staffCode[i]}.png`;
        return psd.image.saveAsPng(new_rename_path);
      })
      .then(function () {
        console.log(`Finished ${staffCode[i]}`);
      });
  }
};
runCode();
