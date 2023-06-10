var entrancePassword = prompt("Please,Create a Password For Registration: ");
console.log(`Your Password Is Completely Noted: ${entrancePassword} `);
var entranceBalance = prompt("Please, Add Your Balance:");
console.log(`Your Balance Is Completely Noted: ${entranceBalance} `);
var tryCount = 3;
var trs = [];
var trs2 = [];
var salary = entranceBalance;
while (tryCount > 0) {
  var password = prompt("Enter your Password: ");
  if (password === entrancePassword) {
    console.log(`Welcome,The Balance In Your Card is: ${entranceBalance} `);
    var isContinue = true;
    var isContinue2 = true;
    var K = "K";
    var P = "P";
    var choose = prompt(`Do You Want to Take money or Pay Credit: K or P `);
    if (choose === K) {
      while (entranceBalance >= 0) {
        var amount = Number(prompt("How Much Money Do You Want?"));
        if (amount <= entranceBalance) {
          entranceBalance -= amount;
          trs.push([amount, new Date()]);
          console.log(`The Balance In Your Card Is: ${entranceBalance}`);
          isContinue = confirm("Do you want to continue?");
          if (!isContinue) {
            var isShow = confirm("Do you want to see transiction? ");
            if (isShow) {
              for (const tr of trs) {
                document.write(
                  `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKING OWN MONEY <br/>`
                );
              }
            }
            console.log("THANKS FOR EVERYTHING!");
            break;
          }
        } else {
          console.log("There Is No Balance In Your Card,");
          isContinue = confirm("Do You Want Any Credit?");
          if (isContinue) {
            var credit2 = (entranceBalance * 45) / 100;
            var credit3 = credit2 - (credit2 * 2) / 100;
            console.log(`Your Credit is: ${credit3}`);
          } else {
            break;
          }
        }
        if (entranceBalance === 0) {
          console.log("There Is No Balance In Your Card,");
          isContinue = confirm("Do You Want Any Credit?");
          if (isContinue) {
            var credit2 = (salary * 45) / 100;
            var credit3 = credit2 - (credit2 * 2) / 100;
            console.log(`Your Credit is: ${credit3}`);
            var choose = prompt(
              `Do You Want to Take money or Pay Credit: K or P `
            );
            if (choose === K) {
              while (credit3 >= 0) {
                var amount = Number(prompt("How Much Money Do You Want?"));
                if (amount <= credit3) {
                  credit3 -= amount;
                  trs2.push([amount, new Date()]);
                  console.log(`The Balance In Your Card Is: ${credit3}`);
                  isContinue = confirm("Do you want to continue?");
                  if (!isContinue) {
                    var isShow = confirm("Do you want to see transiction? ");
                    if (isShow) {
                      for (const tr of trs) {
                        document.write(
                          `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKING OWN MONEY
<br/>`
                        );
                      }
                      for (const tr of trs2) {
                        document.write(
                          `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKE FROM CREDIT
<br/>`
                        );
                      }
                    }
                    console.log("THANKS FOR EVERYTHING!");
                    break;
                  }
                } else {
                  console.log(
                    "There Is No Any Chance,Thanks for your attention:"
                  );
                  break;
                }
                if (credit3 === 0) {
                  console.log("There Is No Any Credit In Your Card,");
                  break;
                }
              }
              break;
            }
            if (choose === P) {
              while (credit3 >= 0) {
                var amount = Number(
                  prompt("How Much Money Do You Want For Pay Borrow?")
                );
                if (amount <= credit3) {
                  credit3 -= amount;
                  trs.push([amount, new Date()]);
                  console.log(`The Balance In Your Card Is: ${credit3}`);
                  isContinue = confirm("Do you want to continue?");
                  if (!isContinue) {
                    var isShow = confirm("Do you want to see transiction? ");
                    if (isShow) {
                      for (const tr of trs) {
                        document.write(
                          `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKING OWN MONEY
<br/>`
                        );
                      }
                      for (const tr of trs2) {
                        document.write(
                          `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKE FROM CREDIT
<br/>`
                        );
                      }
                      for (const tr of trs) {
                        document.write(
                          `AMOUNT: ${tr[0]} DATE: ${tr[1]} PAY FOR CREDIT
BORROW <br/>`
                        );
                      }
                    }
                    console.log("THANKS FOR EVERYTHING!");
                    break;
                  }
                } else {
                  console.log(
                    "There Is No Any Chance,Thanks for your attention:"
                  );
                  break;
                }
                if (credit3 === 0) {
                  console.log("There Is No Any Credit In Your Card,");
                  break;
                }
              }
            }
            break;
          }
        }
      }
      break;
    }
    if (choose === P) {
      while (entranceBalance >= 0) {
        var amount = Number(prompt("How Much Money Do You Pay for Credit?"));
        if (amount <= entranceBalance) {
          entranceBalance -= amount;
          trs.push([amount, new Date()]);
          console.log(`The Balance In Your Card Is: ${entranceBalance}`);
          isContinue = confirm("Do you want to continue?");
          if (!isContinue) {
            var isShow = confirm("Do you want to see transiction? ");
            if (isShow) {
              for (const tr of trs) {
                document.write(
                  `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKING OWN MONEY <br/>`
                );
              }
              for (const tr of trs2) {
                document.write(
                  `AMOUNT: ${tr[0]} DATE: ${tr[1]} TAKE FROM CREDIT <br/>`
                );
              }
              for (const tr of trs) {
                document.write(
                  `AMOUNT: ${tr[0]} DATE: ${tr[1]} PAY FOR CREDIT BORROW
<br/>`
                );
              }
              for (const tr of trs) {
                document.write(
                  `AMOUNT: ${tr[0]} DATE: ${tr[1]} FROM BALANCE TO ONLY
CREDIT <br/>`
                );
              }
            }
            console.log("THANKS FOR EVERYTHING!");
            console.log();
            break;
          }
        } else {
          console.log("There Is No Balance In Your Card,");
          break;
        }
        if (entranceBalance === 0) {
          console.log("There Is No Balance In Your Card,");
          console.log("Thanks for attention!");
          break;
        }
      }
      break;
    } else {
    }
    if (!isContinue || credit3 === 0) {
      break;
    }
  } else {
    tryCount--;
    if (tryCount === 0) {
      console.log("Your Card Os blocked! Please,address Your Bank! ");
      break;
    }
    console.log(
      `Password is wrong,Please try again,number of attempts: ${tryCount}`
    );
  }
}
