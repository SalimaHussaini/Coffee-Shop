function startApp() {
  const username = prompt("Enter username (admin/user):");
  const password = prompt("Enter password:");

  if ((username === "admin" || username === "user") && password === "1234") {
    const role = username === "admin" ? "admin" : "user";
    const securityLevel = role === "admin" ? "high" : "low";
    alert("Welcome " + role + "! Security level: " + securityLevel);

    const name = prompt("Enter your name:");
    const age = parseInt(prompt("Enter your age:"));
    const coffeeType = prompt("Choose coffee type: espresso, latte, cappuccino").toLowerCase();
    const quantity = parseInt(prompt("How many cups?"));

    let pricePerCup = 0;
    if (coffeeType === "espresso") pricePerCup = 2.5;
    else if (coffeeType === "latte") pricePerCup = 3.5;
    else if (coffeeType === "cappuccino") pricePerCup = 4.0;
    else {
      alert("Invalid coffee type selected!");
      return;
    }

    const originalTotal = pricePerCup * quantity;
    let discount = 0;
    if (age < 18 || age > 60) {
      discount = originalTotal * 0.1;
    }
    const finalTotal = originalTotal - discount;

    const split = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    const tipPercent = parseInt(prompt("Tip percentage? (0, 5, 10, or 15)"));
    const tipAmount = finalTotal * (tipPercent / 100);
    const totalWithTip = finalTotal + tipAmount;
    const eachPersonPays = totalWithTip / split;

    alert(
      "Hello " + name + "!\n" +
      "You ordered " + quantity + " " + coffeeType + "(s).\n" +
      "Original total: $" + originalTotal.toFixed(2) + "\n" +
      "Discount: $" + discount.toFixed(2) + "\n" +
      "Tip: $" + tipAmount.toFixed(2) + "\n" +
      "Total with Tip: $" + totalWithTip.toFixed(2) + "\n" +
      "Split between " + split + " people: $" + eachPersonPays.toFixed(2) + " each"
    );
  } else {
    alert("Access denied: Wrong username or password!");
  }
}