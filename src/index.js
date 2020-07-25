import "regenerator-runtime";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/mobilemenu.js";
import "./components/footer.js";
import "./components/scroll.js";
import "./style/app.css";
import main from "./script/main.js";
import getCountryData from "./script/tabledata.js";

main();
getCountryData();
