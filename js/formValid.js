// Sign Up Form Validation below
$(document).ready(function () {
    let firstCheck = $(".firstN").val();
    let lastCheck = $(".lastN").val();
    const validEmail = /.@.[a-z]*[.][a-z]*/;
    let emailCheck = $(".emailN").val();
    let passwordCheck = $(".passwordN").val();

    $(".firstN").on("blur", function () {
        firstCheck = $(".firstN").val();
        if (firstCheck.length === 0) {
            $(".firstWarning").html("Please enter a name");
        } else if (firstCheck.length !== 0) {
            $(".firstWarning").html("");
        }
    });
    $(".lastN").on("blur", function () {
        lastCheck = $(".lastN").val();
        if (lastCheck.length === 0) {
            $(".lastWarning").html("Please enter a name");
        } else if (lastCheck.length !== 0) {
            $(".lastWarning").html("");
        }
    });
    $(".emailN").on("blur", function () {
        emailCheck = $(".emailN").val();
        if (!validEmail.test(emailCheck)) {
            $(".emailWarning").html("Please enter a valid email address")
        } else if (validEmail.test(emailCheck)) {
            $(".emailWarning").html("")
        }
    });
    $(".passwordN").on("blur", function () {
        passwordCheck = $(".passwordN").val();
        if (passwordCheck.length < 4) {
            $(".passwordWarning").html("Password is not 4 digits");
        } else if (passwordCheck.length > 4) {
            $(".passwordWarning").html("Password is not 4 digits");
        } else if (passwordCheck.length === 4) {
            $(".passwordWarning").html("");
        }
    });
    $(".contraCosta").on("click", function () {
        let selection = $(".contraCosta").html();
        $(".countyDisplay").html(selection);
    });
    $(".marin").on("click", function () {
        let selection = $(".marin").html();
        $(".countyDisplay").html(selection);
    });
    $(".sanFransisco").on("click", function () {
        let selection = $(".sanFransisco").html();
        $(".countyDisplay").html(selection);
    });
    $(".solano").on("click", function () {
        let selection = $(".solano").html();
        $(".countyDisplay").html(selection);
    });
    $(".alameda").on("click", function () {
        let selection = $(".alameda").html();
        $(".countyDisplay").html(selection);
    });
    $(".sanJose").on("click", function () {
        let selection = $(".sanJose").html();
        $(".countyDisplay").html(selection);
    });
    $(".sanMateo").on("click", function () {
        let selection = $(".sanMateo").html();
        $(".countyDisplay").html(selection);
    });
    $(".napa").on("click", function () {
        let selection = $(".napa").html();
        $(".countyDisplay").html(selection);
    });
    function NameObject(name, lname, email, pass, county, loggedIn) {
        this.name = name,
            this.lname = lname,
            this.email = email,
            this.pass = pass,
            this.county = county,
            this.loggedIn = loggedIn
    }
    function submitForm() {
        let name1 = $(".firstN").val();
        let last1 = $(".lastN").val();
        let email1 = $(".emailN").val();
        let pass1 = $(".passwordN").val();
        let county1 = countyYouChoose;
        let loggedIn = true;
        let newAccount = new NameObject(name1, last1, email1, pass1, county1, loggedIn);
        let arrOfAccounts = [];
        if (localStorage.getItem('Accounts')) {
            arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
        }
        arrOfAccounts.push(newAccount);
        localStorage.setItem("Accounts", JSON.stringify(arrOfAccounts));
        window.location = "../index.html";       
    }
    let countyYouChoose = "";
    $('#countyChoices').on('change', function (e) { countyYouChoose = e.target.value })
    $(".submit").click(function () {
        let county2 = countyYouChoose;
        let emailChek = $(".emailN").val();
        let arrOfAccounts = [];
        if (localStorage.getItem('Accounts')) {
            arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
        }
        if (county2.length < 3) {
            $(".mustComplete").html("Please Pick A County To Create Account");
            return
        } else {
            $(".mustComplete").html("");
        }
        if (passwordCheck.length === 4 && validEmail.test(emailCheck)) {
            for (let i = 0; i < arrOfAccounts.length; i++) {
                if (emailChek === arrOfAccounts[i].email) {
                    $(".mustComplete").html("An account already has that email");
                    return
                }
            }
        } else if (emailChek.length < 3 && passwordCheck < 4) {
            $(".mustComplete").html("Please enter a correct email and password");
            return
        }
        submitForm();
    });


    //Sign IN Page STARTS HERE
    let emailCheck2 = $(".emailSignIn").val();
    let passwordCheck2 = $(".passwordSignIn").val();
    $(".emailSignIn").on("blur", function () {
        emailCheck = $(".emailSignIn").val();
        if (!validEmail.test(emailCheck)) {
            $(".emailWarning2").html("Please enter a valid email address")
        } else if (validEmail.test(emailCheck)) {
            $(".emailWarning2").html("")
        }
    });
    $(".passwordSignIn").on("blur", function () {
        passwordCheck2 = $(".passwordSignIn").val();
        if (passwordCheck2.length < 4) {
            $(".passwordWarning2").html("Password is not 4 digits");
        } else if (passwordCheck2.length > 4) {
            $(".passwordWarning2").html("Password is not 4 digits");
        } else if (passwordCheck2.length === 4) {
            $(".passwordWarning2").html("");
        }
    });
    $(".submit2").click(function () {
        arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
        for (let i = 0; i < arrOfAccounts.length; i++) {
            arrOfAccounts[i].loggedIn = false;
            localStorage.setItem("Accounts", JSON.stringify(arrOfAccounts));
        }
        let loginEmail = $(".emailSignIn").val();
        let loginPassword = $(".passwordSignIn").val();
        if (passwordCheck2.length === 4 && validEmail.test(loginEmail)) {
            $(".mustComplete2").html("");
            if (localStorage.getItem('Accounts')) {
                arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
                for (let i = 0; i < arrOfAccounts.length; i++) {
                    if (arrOfAccounts[i].email == loginEmail && arrOfAccounts[i].pass == loginPassword) {
                        arrOfAccounts[i].loggedIn = true;
                        localStorage.setItem("Accounts", JSON.stringify(arrOfAccounts));
                        window.location = "../index.html";
                    }
                }
            }
        } else {
            $(".mustComplete2").html("Please enter a correct email and password");
        }
    });
});


