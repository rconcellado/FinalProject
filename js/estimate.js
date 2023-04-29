const button = document.getElementById("btn-menu");
const nav = document.getElementById("nav");

function toggleMenu() {
  nav.classList.toggle("active");
  if (button.innerText == "X") {
    button.innerText = "☰";
  } else {
    button.innerText = "X";
  }
}
function ComputeEstimate() {
  let Service1 = document.getElementById("Service1").value;
  let Service2 = document.getElementById("Service2").value;
  let Service3 = document.getElementById("Service3").value;
  let Service4 = document.getElementById("Service4").value;
  let Service5 = document.getElementById("Service5").value;
  let Service6 = document.getElementById("Service6").value;
  let Service7 = document.getElementById("Service7").value;
  let Service8 = document.getElementById("Service8").value;
  let Service9 = document.getElementById("Service9").value;
  let Service10 = document.getElementById("Service10").value;
  let Service11 = document.getElementById("Service11").value;
  let Service12 = document.getElementById("Service12").value;

  console.log(Service1);

  let priceItem1 = 10;
  let priceItem2 = 0.003;
  let priceItem3 = 0.004;
  let priceItem4 = 0.004;
  let priceItem5 = 0.001;
  let priceItem6 = 0.007;
  let priceItem7 = 0.003;
  let priceItem8 = 5;
  let priceItem9 = 40;
  let priceItem10 = 10;
  let priceItem11 = 10;
  let priceItem12 = 80;

  let LandscapeAmt = document.getElementById("LandscapeAmt");
  let TreatmentAmt = document.getElementById("TreatmentAmt");
  let LawnAmt = document.getElementById("LawnAmt");
  let GrassCuttingAmt = document.getElementById("GrassCuttingAmt");
  let MulchingAmt = document.getElementById("MulchingAmt");
  let SeedingAmt = document.getElementById("SeedingAmt");
  let AerationAmt = document.getElementById("AerationAmt");
  let TreehealthAmt = document.getElementById("TreehealthAmt");
  let TreetrimmingAmt = document.getElementById("TreetrimmingAmt");
  let ShrubAmt = document.getElementById("ShrubAmt");
  let WeedManageAmt = document.getElementById("WeedManageAmt");
  let TreeremovalAmt = document.getElementById("TreeremovalAmt");
  let total = document.getElementById("total");

  console.log(LandscapeAmt);

  LandscapeAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service1 * priceItem1);
    TreatmentAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service2 * priceItem2);
    LawnAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service3 * priceItem3);
    GrassCuttingAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service4 * priceItem4);
    MulchingAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service5 * priceItem5);
    SeedingAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service6 * priceItem6);
    AerationAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service7 * priceItem7);
    TreehealthAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service8 * priceItem8);
    TreetrimmingAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service9 * priceItem9);
    ShrubAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service10 * priceItem10);
    WeedManageAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service11 * priceItem11);
    TreeremovalAmt.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(Service12 * priceItem12);

  total.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(
    Service1 * priceItem1 +
    Service2 * priceItem2 +
    Service3 * priceItem3 +
    Service4 * priceItem4 +
    Service5 * priceItem5 +
    Service6 * priceItem6 +
    Service7 * priceItem7 +
    Service8 * priceItem8 +
    Service9 * priceItem9 +
    Service10 * priceItem10 +
    Service11 * priceItem11 +
    Service12 * priceItem12
  );
  console.log(total);
}