const getValue=(id)=> {
    var value = document.getElementById(id).value;
    if (value == "" || isNaN(value)) {
        return 0;
    }
    else {
        return parseFloat(value);
    }
}

const calculate =()=> {
    var amt_nisaab = 88000;
    
    var amt_gold = getValue("gold-value");
    var amt_silver = getValue("silver-value");
    var amt_home = getValue("cash");
    var amt_bank = getValue("bank-cash");
    var amt_assests = getValue("assests");
    var amt_liabilities = getValue("liabilties");

    var amt_net = (amt_gold + amt_silver + amt_home + amt_bank + amt_assests) - amt_liabilities;
    var amt_eligable = 0;

    if (amt_net >= amt_nisaab) {
        amt_eligable = Math.ceil(amt_net)
    }

    var amt_zakat = Math.ceil(amt_eligable * 0.025);
    document.getElementById("display-result").value = "Rs " + amt_zakat;

}