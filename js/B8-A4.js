// function handClick(event) {
//   console.log(event, target);
//   console.log(event.target.parentNode.parentNode.childNode[1].innerText);
// }
// // parentNode
// function handleSelect (){

// }
// let count = 0;
// for (const btn of allBtn){
//   btn.addEventListener('click', function(event)){
// count = count + 1;
//   }
// }

// function addKbdRow1() {
//   const chars = ["q", "w", "e", "r"];

//   // step 4
//   for (const char of chars) {
//     // step 1
//     const kbdElement = document.createElement("kbd");

//     // step 1.5
//     kbdElement.classList.add("kbd");
//     kbdElement.innerText = char;
//     kbdElement.setAttribute("id", char);

//     // step 2
//     const parentElement = document.getElementById("kbd-row-1");

//     // step 3
//     parentElement.appendChild(kbdElement);
//   }
// }
// const x = addKbdRow1();

// function play() {
//   hideElementById;
// }

// summer sale codes

let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  card.addEventListener("click", function () {
    console.log("clicked");

    // get the title and price
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    console.log(price);

    // appending title in the title container
    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title;
    titleContainer.appendChild(p);
    titleCount++;

    // calculate price
    totalPrice += price;
    console.log(totalPrice);
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    const restTotal = (document.getElementById("total").innerText = totalPrice);
  });
}

// apply discount
const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  console.log("clicked");

  // get the value from input
  const couponElement = document.getElementById("input-field").value;
  // console.log(couponElement);
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  console.log(couponCode);
  if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
      // discount calculation
      const discountElement = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2;
      discountElement.innerText = discountAmount.toFixed(2);

      // total price calculation
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPrice - discountAmount.toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("invalid coupon code");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("spend more");
    document.getElementById("input-field").value = "";
  }
});
