const allbtns = document.querySelectorAll(".t-btn");
let buyticket = document.querySelector("#buy-seats").innerText;
const btnmodal = document.querySelector("#btn-modal");

btnmodal.addEventListener("click", function () {
  if (parseInt(buyticket) <= 0) {
    alert("please buying any tickets");
    return;
  }
});

for (const key of allbtns) {
  key.addEventListener("click", function (e) {
    const ticketprice = 550;

    const ticketname = e.target.innerText;
    const ticketbox = document.querySelector(".childern-div");
    //   styling seat
    const ticketbtn = e.target.parentNode;

    // purcase seat
    const buyingSeat = document.querySelector("#buy-seats").innerText;
    const convertedSeat = parseInt(buyingSeat) + 1;

    buyticket = convertedSeat;

    if (convertedSeat > 4) {
      alert("you have bought ticket only four");
      return;
    }

    const grandTotal = document.querySelector("#grand_Total");
    const convertedGrandTotal = parseInt(grandTotal.innerText);

    grandTotal.innerText = convertedGrandTotal + ticketprice;

    ticketbtn.style.backgroundColor = "#1DD100";
    ticketbtn.setAttribute("disabled", "true");
    ticketbox.innerHTML += `<div class="flex justify-between pb-3">
    <p class="font-semibold text-[#03071299]">${ticketname}</p>
    <p class="font-semibold text-[#03071299]">economy</p>
    <p class="font-semibold text-[#03071299]">550</p>
    </div>`;

    const totalseat = document.getElementById("total-seat").innerText;
    const sumvalue = parseInt(totalseat) - 1;
    setInnerText("buy-seats", convertedSeat);
    setInnerText("total-seat", sumvalue);
  });
}

const cupponbtn = document.querySelector("#cupponBtn");
const cupponValue = document.querySelector("#cuppon-input");
const grandTotal = document.querySelector("#grand_Total");
const Total_box = document.querySelector(".total-box");
const Discount_price = document.querySelector("#discount-value");
const Cuppon_box = document.querySelector("#cuppon-box");
const modal_Box = document.querySelector(".modal-box");

cupponbtn.addEventListener("click", function () {
  let convertedGrandTotal = parseInt(grandTotal.innerText);
  if (cupponValue.value === "NEW15") {
    DiscountTotal = (convertedGrandTotal * 15) / 100;
    convertedGrandTotal = convertedGrandTotal - DiscountTotal;
    Discount_price.innerText = DiscountTotal;
    grandTotal.innerText = convertedGrandTotal;
    Total_box.classList.remove("hidden");
    Total_box.classList.add("flex");
    Cuppon_box.classList.add("hidden");
  } else if (cupponValue.value === "Couple 20") {
    DiscountTotal = (convertedGrandTotal * 20) / 100;
    convertedGrandTotal = convertedGrandTotal - DiscountTotal;
    Discount_price.innerText = DiscountTotal;
    grandTotal.innerText = convertedGrandTotal;
    Total_box.classList.remove("hidden");
    Total_box.classList.add("flex");
    Cuppon_box.classList.add("hidden");
  } else if (cupponValue.value === "") {
    alert("please select a seat then use cuppon");
  } else {
    alert("you inputed wrong cuppon");
  }
});

modal_Box.addEventListener("click", function (e) {});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
