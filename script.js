 //iPhone Mobile
document.getElementById('iphoneBtn').addEventListener("click", function () {
   iphone(true);
})
document.getElementById('iphoneMinusBtn').addEventListener("click", function () {
   iphone(false);
})

function iphone(isIncrease) {
  
      const iphoneInput = document.getElementById('iphoneCount');
      const iphoneCount = parseInt(iphoneInput.value);
      let newIphoneCount = iphoneCount;
      if (isIncrease == true) {
         newIphoneCount = iphoneCount + 1;
      }
      if (isIncrease == false && iphoneCount > 1) {
         newIphoneCount = iphoneCount - 1;
      }
      iphoneInput.value = newIphoneCount;
      const iphoneTotal = newIphoneCount * 1219;
      document.getElementById('iphoneTotal').innerText = '$'+iphoneTotal;
      calculateTotal() 
   
}
 //iPhone Case
document.getElementById('iphoneCaseBtn').addEventListener("click", function () {
   iphoneCase(true);
})
document.getElementById('iphoneCaseMinus').addEventListener("click", function () {
   iphoneCase(false);
})

function iphoneCase(isIncrease) {
  
   const iphoneCase = document.getElementById('iphoneCaseInput');
   const iphoneCaseInput = parseInt(iphoneCase.value);
   let newIphoneCaseInput = iphoneCaseInput;
   if (isIncrease == true) {
      newIphoneCaseInput = iphoneCaseInput + 1;
   }
   if (isIncrease == false && iphoneCaseInput > 1) {
      newIphoneCaseInput = iphoneCaseInput - 1;
   }
   iphoneCase.value = newIphoneCaseInput;
   const iphoneCaseTotal = newIphoneCaseInput * 59;
   document.getElementById('iphoneCaseTotal').innerText = '$'+ iphoneCaseTotal;
   calculateTotal()

}

function calculateTotal() {
   const iphoneInput = document.getElementById('iphoneCount');
   const iphoneCount = parseInt(iphoneInput.value);

   const iphoneCase = document.getElementById('iphoneCaseInput');
   const iphoneCaseInput = parseInt(iphoneCase.value);
   
   // iPhone & Case totalPrice
   const totalPrice = iphoneCount * 1219 + iphoneCaseInput * 59;
   document.getElementById('totalPrice').innerText = '$' + totalPrice;

   // taxTotal
   const tax = Math.round(totalPrice * 0.1);
   document.getElementById('taxPrice').innerText = '$' + tax;

   // grandTotal
   const grandTotal = (totalPrice + tax);
   document.getElementById('grandTotal').innerText = '$' + grandTotal;
}