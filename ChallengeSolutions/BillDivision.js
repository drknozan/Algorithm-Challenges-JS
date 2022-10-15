function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    const totalBillExceptAnna = bill.reduce((p, n) => p+n, 0);
    const overCharge = b - (totalBillExceptAnna / 2);
    
    if (overCharge > 0) {
        console.log(overCharge);
    } else {
        console.log("Bon Appetit");
    };
}