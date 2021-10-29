document.getElementById('submit').addEventListener('click', function(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('Email').value;
    var comment = document.getElementById('Comment').value;
    var address = document.getElementById('Address').value;
    var quantity5 = document.getElementById('quantity5').value;
    var quantity10 = document.getElementById('quantity10').value;
    var quantity15 = document.getElementById('quantity15').value;

    if (!firstName || !lastName || !email || !address) {
        document.getElementById('output').innerHTML = "You didn't enter your First Name, Last Name, Email or Address";
    } else {
        document.getElementById('output').innerHTML = "";
        document.getElementById('firstNameOutput').innerHTML = "First Name: " + firstName;
        document.getElementById('lastNameOutput').innerHTML = "Last Name: " + lastName;
        document.getElementById('emailOutput').innerHTML = "Email: " + email;
        document.getElementById('commentOutput').innerHTML = "Comment: " + comment;
        document.getElementById('addressOutput').innerHTML = "Address: " + address;
        document.getElementById('quantity5Output').innerHTML = "£5 Voucher: " + quantity5;
        document.getElementById('quantity10Output').innerHTML = "£10 Voucher: " + quantity10;
        document.getElementById('quantity15Output').innerHTML = "£15 Voucher: " + quantity15;

        var voucher5 = 5;
        var voucher10 = 10;
        var voucher15 = 15;
        var price = quantity5 * voucher5 + quantity10 * voucher10 + quantity15 * voucher15;
        if (price <= 0){
            document.getElementById('priceError').innerHTML = "You didn't choose vouchers";
        } else {
            document.getElementById('priceError').innerHTML = "";
            document.getElementById('priceOutput').innerHTML = "Price: " + price + "£";
        }
        
    }
});