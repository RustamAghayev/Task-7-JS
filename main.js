var userBalance = 1000;

var userPassword = "123";

var tryCount = 3;

var isContinue;

var trs = [];

var creditLimit = (userBalance / 100) * 45;

var creditCommision = (creditLimit / 100) * 2;

while (tryCount > 0) {
  var passWord = prompt("Please Add Your Password");

  if (passWord === userPassword) {
    console.log(`Card Balance: ${userBalance}`);
    while (userBalance >= 0) {
      var amount = Number(prompt("Enter The Amount"));

      if (amount <= userBalance) {
        if (amount <= 0) {
          continue;
        }
        userBalance -= amount;
        trs.push([amount, new Date()]);
        console.log(`Card Balance: ${userBalance}`);

        isContinue = confirm("Go To?");
        if (userBalance <= 0) {
          var credit = confirm("Do you want a loan? limits 450azn");
          if (credit === true) {
            var creditFrom = Number(prompt("Enter The Credit"));
            creditLimit - creditFrom;
            userBalance + creditFrom;
            userBalance - creditCommision;
          }
        }

        if (!isContinue) {
          var isShow = confirm("Show in transactions?");

          if (isShow) {
            for (const tr of trs) {
              console.log(`Amount: ${tr[0]} Date: ${moment(tr[1]).calendar()}`);
            }
          }
          console.log("Thank You :)");
        }
      } else {
        console.log("There are not enough funds in the balance");
      }
      if (userBalance === 0 && creditLimit === 0) {
        console.log("Balance Is Over");
        break;
      }
    }
    if (userBalance === 0 || creditLimit === 0 || !isContinue) {
      break;
    }
  } else {
    tryCount--;
    if (tryCount === 0) {
      console.log("Card Blocked Bank Call The Bank");
      break;
    }
    console.log(`Password Wrong, Remaining try count: ${tryCount}`);
  }
}
