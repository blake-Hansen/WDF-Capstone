//home page welcome and log out button is below this line 
$(function () {
    let pageCheck = $('title').html();
    let name = "";
    if (pageCheck == "Sparo Foundation") {
        if (localStorage.getItem('Accounts')) {
            arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
            for (let i = 0; i < arrOfAccounts.length; i++) {
                if (arrOfAccounts[i].loggedIn === true) {
                    name = arrOfAccounts[i].name
                    $(".welcome").html(`<div class="purpleTxt">Welcome ${name},<div>`)
                    $('.rmvLogIn').css('display', 'none')
                    $('.logIn').css('display', 'block')
                }
            }
        }
    } else if (pageCheck == "Education" || pageCheck == "Health" || pageCheck == "Finance" || pageCheck == "Community") {
        if (localStorage.getItem('Accounts')) {
            arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
            for (let i = 0; i < arrOfAccounts.length; i++) {
                if (arrOfAccounts[i].loggedIn === true) {
                    $('.rmvLogIn').css('display', 'none')
                    $('.logIn').css('display', 'block')
                }
            }
        }
    }
    $('.logIn').on("click", function () {
        arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
        for (let i = 0; i < arrOfAccounts.length; i++) {
            arrOfAccounts[i].loggedIn = false;
            localStorage.setItem("Accounts", JSON.stringify(arrOfAccounts));
            $('.rmvLogIn').css('display', 'block')
            $('.logIn').css('display', 'none')
        }
    });
});
// if no one is logged in, dynamically put this on the 4 supporting pages
// community, medical, finance, education
$(function () {
    let supportPageCheck = $('title').html();
    if (supportPageCheck == "Community" || supportPageCheck == "Finance" || supportPageCheck == "Education" || supportPageCheck == "Health") {
        if (localStorage.getItem('Accounts')) {
            arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
            for (let i = 0; i < arrOfAccounts.length; i++) {
                if (arrOfAccounts[i].loggedIn == true) {
                    $(".tellToSignUp").html(``);
                    break;
                } else {
                    $(".tellToSignUp").html(`<div class="text-center welcomeStyles">By creating an account we can help 
                    you find support and resources for you according to your home county.<div>`)
                }
            }
        }
    }
});
// constructor function for all objects to be put dynamically onto support pages
function DynamicEvents(title, description, address, county, type, image) {
    this.title = title,
        this.description = description,
        this.address = address,
        this.county = county || "Marin",
        this.type = type,
        this.image = image
}
let evNT1 = new DynamicEvents("Concord Water Park", "A great place to bring your kids on a hot days, huge water slides, entry fee $6.00", "1200 Water Park Way Concord CA", "Contra Costa", "Community", "../../media/images/waterSlide.jpeg");
let evNT2 = new DynamicEvents("Broadway Plaza Shopping", "Downtown Walnut Creek Great Shopping", "650 Mt. Diablo Blvd, Walnut Creek CA", "Contra Costa", "Community", "../../media/images/walnutcreekshopping.jpeg");
let evNT3 = new DynamicEvents("Movie In The Park", "Oak Park Free Movies in the park first Saturday of each month", "1515 Stone Valley rd. Alamo Ca", "Contra Costa", "Community", "../../media/images/movies.png");
let evNT4 = new DynamicEvents("Lake Merritt Art Fest", "Saturday and Sunday enjoy free food and games for parents and kids.", "1273 Lake Merrit Way Oakland Ca", "Alameda", "Community", "../../media/images/parade.jpeg");
let evNT5 = new DynamicEvents("Alameda County Fair", "Enjoy great food, rides and horse racing", "Pleasanton Ca", "Alameda", "Community", "../../media/images/concert.jpeg");
let evNT6 = new DynamicEvents("Oakland A's Baseball", "Go see the oakland As play baseball tickets starting at $6.00", "Hagenberger rd. Oakland Ca", "Alameda", "Community", "../../media/images/baseball.jpeg");
let evNT7 = new DynamicEvents("Pier 39", "Enjoy food and entertainment for whole family", "Pier 39 Wharf Way, San Fransisco Ca", "San Francisco", "Community", "../../media/images/pier39.jpeg");
let evNT8 = new DynamicEvents("Golden Gate Park", "Enjoy a picnic and hiking at Golden Gate Park", "Golden Gate Park Rd. SF, Ca", "San Francisco", "Community", "../../media/images/Golden_Gate_Park,_San_Francisco,_CA.jpeg");
let evNT9 = new DynamicEvents("Golden State Warriors", "Enjoy a basketball game with the family, tickets starting at $75.00", "Chase Center Bld. SF CA", "San Francisco", "Community", "../../media/images/basketball.jpeg");
let evNT10 = new DynamicEvents("Aragon Gardens", "Rent a community garden space for you and your family", "435 Alameda de las pulgas, San Mateo Ca", "San Mateo", "Community", "../../media/images/festival.jpeg");
let evNT11 = new DynamicEvents("San Mateo Art and Wine Fest", "Enjoy beautiful art for all ages", "Redwood City Ca", "San Mateo", "Community", "../../media/images/festival.jpeg");
let evNT12 = new DynamicEvents("Half Moon Bay Hiking", "Fun family hiking trails along the water", "Half Moon Bay Ca", "San Mateo", "Community", "../../media/images/halfmoon.jpeg");
let evNT13 = new DynamicEvents("Winchester Mystery House", "Go to the Winchester Mystery house for a day of scary fun!", "3030 Winchester Drive, San Jose, Ca", "San Jose", "Community", "../../media/images/winchester.jpg");
let evNT14 = new DynamicEvents("Santana Row", "Upscale shopping for family fun", "1 Santana Row Way, San Jose Ca", "San Jose", "Community", "../../media/images/Santana_Row_sign.jpeg");
let evNT15 = new DynamicEvents("49ers Football", "Enjoy a football game with the kids", "800 Levi Way Santa Clara Ca", "San Jose", "Community", "../../media/images/49ers.jpeg");
let evNT16 = new DynamicEvents("Solano County Fair", "Enjoy rides animals and food for the family", "Fairgrounds Drive Vallejo Ca", "Solano", "Community", "../../media/images/concert.jpeg");
let evNT17 = new DynamicEvents("Six Flags", "Enjoy a day with the kids at Six flags marine world", "Vallejo Ca", "Solano", "Community", "../../media/images/Six_Flags_logo.svg.png");
let evNT18 = new DynamicEvents("Solano art and cheese festival", "Enjoy a day of fun in the sun with your kids", "Vallejo Ca", "Solano", "Community", "../../media/images/cows.jpeg");
let evNT19 = new DynamicEvents("Napa County Fair", "Enjoy time with your kids on rides and eating great food", "Fairgrounds Drive Napa Ca", "Napa", "Community", "../../media/images/countyfair.jpeg");
let evNT20 = new DynamicEvents("Silver Oak Winery", "Enjoy wine tasting with the kids", "1 Silver Oak Way Napa Ca", "Napa", "Community", "../../media/images/silver.jpeg");
let evNT21 = new DynamicEvents("Napa County pumpkin patch", "Take your kids to the states largest pumkin patch", "Napa Ca", "Napa", "Community", "../../media/images/random.jpeg");
let evNT22 = new DynamicEvents("Sausalito Boat Show", "See luxury boat show free of charge for parent s and their kids", "Sausalito Ca", "Marin", "Community", "../../media/images/sailing.jpeg");
let evNT23 = new DynamicEvents("Mt. Tamalpais Park", "Enjoy a day of hiking and fun with the kids", "Mt Tamalpais Way Marin Ca", "Marin", "Community", "../../media/images/mt.tamalpais.jpeg");
let evNT24 = new DynamicEvents("Marin Art and Wine Fest", "Enjoy a day of great food in Sausalito", "121 Shorline Way", "Marin", "Community", "../../media/images/festival.jpeg");
let evNT25 = new DynamicEvents("Walnut Creek Therapy Group", "Medical covered therapy, and counseling for kids and families", "Walnut Creek CA", "Contra Costa", "Health", "../../media/images/waterSlide.jpeg");
let evNT26 = new DynamicEvents("John Muir Medical", "Downtown Walnut Creek medical support", "650 Mt. Diablo Blvd, Walnut Creek CA", "Contra Costa", "Health", "../../media/images/taxessigniture.jpeg");
let evNT27 = new DynamicEvents("Movie In The Park", "Oak Park Free Movies in the park first Saturday of each month", "1515 Stone Valley rd. Alamo Ca", "Contra Costa", "Health", "../../media/images/movies.png");
let evNT28 = new DynamicEvents("Covered CA", "Signup for medical in Downtown Oakland", "1273 Telegraph Oakland Ca", "Alameda", "Health", "../../media/images/winchester.jpg");
let evNT29 = new DynamicEvents("Alameda County Fair", "Enjoy great food, rides and horse racing", "Pleasanton Ca", "Alameda", "Health", "../../media/images/flamingoskinyy.jpeg");
let evNT30 = new DynamicEvents("Kaiser Permanente", "Free rehab for single parents in Alameda County", "Hagenberger rd. Oakland Ca", "Alameda", "Health", "../../media/images/baseball.jpeg");
let evNT31 = new DynamicEvents("USF Medical Support", "Enjoy food and entertainment for whole family", "Pier 39 Wharf Way, San Fransisco Ca", "San Francisco", "Health", "../../media/images/pier39.jpeg");
let evNT32 = new DynamicEvents("Golden Gate Park", "Enjoy a picnic and hiking at Golden Gate Park", "Golden Gate Park Rd. SF, Ca", "San Francisco", "Health", "../../media/images/Golden_Gate_Park,_San_Francisco,_CA.jpeg");
let evNT33 = new DynamicEvents("UCSF Medical", "Some of the best medical care in the world", "UCSF Blvd. SF CA", "San Francisco", "Health", "../../media/images/basketball.jpeg");
let evNT34 = new DynamicEvents("Aragon Gardens", "Rent a community garden space for you and your family", "435 Alameda de las pulgas, San Mateo Ca", "San Mateo", "Health", "../../media/images/festival.jpeg");
let evNT35 = new DynamicEvents("San Mateo Art and Wine Fest", "Enjoy beautiful art for all ages", "Redwood City Ca", "San Mateo", "Health", "../../media/images/festival.jpeg");
let evNT36 = new DynamicEvents("Half Moon Bay Hiking", "Fun family hiking trails along the water", "Half Moon Bay Ca", "San Mateo", "Health", "../../media/images/halfmoon.jpeg");
let evNT37 = new DynamicEvents("Winchester Mystery House", "Go to the Winchester Mystery house for a day of scary fun!", "3030 Winchester Drive, San Jose, Ca", "San Jose", "Health", "../../media/images/guyworkingoutSkinny.jpeg");
let evNT38 = new DynamicEvents("Santana Row", "Upscale shopping for family fun", "1 Santana Row Way, San Jose Ca", "San Jose", "Health", "../../media/images/Santana_Row_sign.jpeg");
let evNT39 = new DynamicEvents("49ers Football", "Enjoy a football game with the kids", "800 Levi Way Santa Clara Ca", "San Jose", "Health", "../../media/images/49ers.jpeg");
let evNT40 = new DynamicEvents("Solano County Fair", "Enjoy rides animals and food for the family", "Fairgrounds Drive Vallejo Ca", "Solano", "Health", "../../media/images/foodMedium.jpeg");
let evNT41 = new DynamicEvents("Six Flags", "Enjoy a day with the kids at Six flags marine world", "Vallejo Ca", "Solano", "Health", "../../media/images/Six_Flags_logo.svg.png");
let evNT42 = new DynamicEvents("Solano art and cheese festival", "Enjoy a day of fun in the sun with your kids", "Vallejo Ca", "Solano", "Health", "../../media/images/footballskinny.jpeg");
let evNT43 = new DynamicEvents("Napa County Med", "County Medical Help", "Fairgrounds Drive Napa Ca", "Napa", "Health", "../../media/images/countyfair.jpeg");
let evNT44 = new DynamicEvents("Napa County Veterans Affair Hospice", "Find help for veterans", "1 Silver Oak Way Napa Ca", "Napa", "Health", "../../media/images/fireworks.jpeg");
let evNT45 = new DynamicEvents("Therapy First", "Low cost therapy for individuals and families", "Napa Ca", "Napa", "Health", "../../media/images/LibraaryMedium.jpeg");
let evNT46 = new DynamicEvents("Sausalito Boat Show", "See luxury boat show free of charge for parent s and their kids", "Sausalito Ca", "Marin", "Health", "../../media/images/sailing.jpeg");
let evNT47 = new DynamicEvents("Mt. Tamalpais Park", "Enjoy a day of hiking and fun with the kids", "Mt Tamalpais Way Marin Ca", "Marin", "Health", "../../media/images/mt.tamalpais.jpeg");
let evNT48 = new DynamicEvents("Marin Regional Medical Center", "Enjoy a day of great food in Sausalito", "121 Shorline Way", "Marin", "Health", "../../media/images/Latin_dictionary.jpeg");
let evNT49 = new DynamicEvents("DVC Community College", "Help your kids get low cost education", "Diablo Valley Way Concord CA", "Contra Costa", "Education", "../../media/images/muslimkidslearning.jpeg");
let evNT50 = new DynamicEvents("College Tutoring", "Get help with all levels of education", "650 Mt. Diablo Blvd, Walnut Creek CA", "Contra Costa", "Education", "../../media/images/toddlerReadingKidBook.jpeg");
let evNT51 = new DynamicEvents("SRVUSD Education Help", "Go to free after school help in SRVUSD", "San Ramon Ca", "Contra Costa", "Education", "../../media/images/movies.png");
let evNT52 = new DynamicEvents("Oakland Educational Support", "Find support for low incoe environments for tutoring", "1273 Lake Merrit Way Oakland Ca", "Alameda", "Education", "../../media/images/parade.jpeg");
let evNT53 = new DynamicEvents("Piedmont High Tutors", "Get highschool help from locals", "Pleasanton Ca", "Alameda", "Education", "../../media/images/concert.jpeg");
let evNT54 = new DynamicEvents("CAL Berkeley Tutors", "Take your kids to Berkeley tutoring camps", "Berkeley Ca", "Alameda", "Education", "../../media/images/baseball.jpeg");
let evNT55 = new DynamicEvents("Learn at USF ", "Get free highschool tutoring by med students at USF", "USF San Fransisco Ca", "San Francisco", "Education", "../../media/images/pier39.jpeg");
let evNT56 = new DynamicEvents("Get Local Spanish Tutoring", "Kids learn for free at SF Spanish Tutors.com", "Downtown SF, Ca", "San Francisco", "Education", "../../media/images/Golden_Gate_Park,_San_Francisco,_CA.jpeg");
let evNT57 = new DynamicEvents("Bishop O'Dowd", "Private School Scholarships available for eager kids", "Chase Center Bld. SF CA", "San Francisco", "Education", "../../media/images/todlerPlayblocks.jpeg");
let evNT58 = new DynamicEvents("Aragon High", "Free tutoring at Aragon High", "435 Alameda de las pulgas, San Mateo Ca", "San Mateo", "Education", "../../media/images/festival.jpeg");
let evNT59 = new DynamicEvents("Get afterschool help at Aragon", "Help for all ages in math english and spanish", "Burlingame Ca", "San Mateo", "Education", "../../media/images/festival.jpeg");
let evNT60 = new DynamicEvents("San Mateo Tutoring", "Get help with your kids education", "Redwood City Ca", "San Mateo", "Education", "../../media/images/halfmoon.jpeg");
let evNT61 = new DynamicEvents("Winchester Mystery House", "Go to the Winchester Mystery house for a day of scary fun!", "3030 Winchester Drive, San Jose, Ca", "San Jose", "Education", "../../media/images/winchester.jpg");
let evNT62 = new DynamicEvents("Santa Clara College Tutors", "Get your kids the right education", "121 Santana Row Way, San Jose Ca", "San Jose", "Education", "../../media/images/Santana_Row_sign.jpeg");
let evNT63 = new DynamicEvents("Stanford Tutoring", "Take your kids to Stanford to learn college level mathmatics", "800 Levi Way Santa Clara Ca", "San Jose", "Education", "../../media/images/49ers.jpeg");
let evNT64 = new DynamicEvents("8th Grade HighSchool Prep", "Get your kids ready for HighSchool", "Main St. Vallejo Ca", "Solano", "Education", "../../media/images/concert.jpeg");
let evNT65 = new DynamicEvents("College Prep", "UC ready college prep", "Vallejo Ca", "Solano", "Education", "../../media/images/stackofbooks.jpeg");
let evNT66 = new DynamicEvents("Local Bay Area Spanish Tutoring", "Help your kids learn spanish", "Vallejo Ca", "Solano", "Education", "../../media/images/cows.jpeg");
let evNT67 = new DynamicEvents("Tutor Sessions", "Buy ten tutoring sessions get 3 free!", "Fairgrounds Drive Napa Ca", "Napa", "Education", "../../media/images/countyfair.jpeg");
let evNT68 = new DynamicEvents("HighSchool After School Groups", "Let your kids learn more after school", "1 Silver Oak Way Napa Ca", "Napa", "Education", "../../media/images/silver.jpeg");
let evNT69 = new DynamicEvents("Algebra Math Tutors", "Help your kids learn math", "Napa Ca", "Napa", "Education", "../../media/images/random.jpeg");
let evNT70 = new DynamicEvents("Marin County School District", "Informational meetings on helping children keep pace", "Sausalito Ca", "Marin", "Education", "../../media/images/muslimkidslearning.jpeg");
let evNT71 = new DynamicEvents("Algebra Tutoring", "Help your highschool children with math", "Mt Tamalpais Way Marin Ca", "Marin", "Education", "../../media/images/mt.tamalpais.jpeg");
let evNT72 = new DynamicEvents("SAT Prep Study", "Once weekly SAT prep course", "121 Shorline Way", "Marin", "Education", "../../media/images/profesionalPeople.jpeg");
let evNT73 = new DynamicEvents("Coldwell Banker", "Realtor Advise", "Walnut Creek CA", "Contra Costa", "Finance", "../../media/images/bankdude.jpeg");
let evNT74 = new DynamicEvents("California tax advise", "Find tax credits for single parents", "Martinez CA", "Contra Costa", "Finance", "../../media/images/calculatorStudy.jpeg");
let evNT75 = new DynamicEvents("Federal Grants", "Find monetary assistance for low income families", "Waters Ave, Pittsburg Ca", "Contra Costa", "Finance", "../../media/images/taxessigniture.jpeg");
let evNT76 = new DynamicEvents("Oakland Child Services", "Help get custody of your kids", "1212 Broadway Oakland Ca", "Alameda", "Finance", "../../media/images/schoolKidsHavingFun.jpeg");
let evNT77 = new DynamicEvents("Alameda County Tax Incentives", "What tax deductions do you qualify for?", "Pleasanton Ca", "Alameda", "Finance", "../../media/images/foodMedium.jpeg");
let evNT78 = new DynamicEvents("Oakland A's Single Parent Support", "Go see the how to A's are supporting their local community", "Hagenberger rd. Oakland Ca", "Alameda", "Finance", "../../media/images/baseball.jpeg");
let evNT79 = new DynamicEvents("Castro District Support Team", "Helping single fathers gain custody of their kids", "Castro District, San Francisco Ca", "San Francisco", "Finance", "../../media/images/pier39.jpeg");
let evNT80 = new DynamicEvents("S.F. County GA Support", "Find food stamps in the city", "Golden Gate Park Rd. SF, Ca", "San Francisco", "Finance", "../../media/images/Golden_Gate_Park,_San_Francisco,_CA.jpeg");
let evNT81 = new DynamicEvents("Find Housing", "Supplying single parents with low rent community support", "Chase Center Bld. SF CA", "San Francisco", "Finance", "../../media/images/teensstudying.jpeg");
let evNT82 = new DynamicEvents("San Mateo GA Bill", "Learn about general assistance in San Mateo", "435 Alameda de las pulgas, San Mateo Ca", "San Mateo", "Finance", "../../media/images/bluerose.jpeg");
let evNT83 = new DynamicEvents("Financial Support College", "Redwood College Grants", "Redwood City Ca", "San Mateo", "Finance", "../../media/images/flamingoskinyy.jpeg");
let evNT84 = new DynamicEvents("San Mateo Council of Finance", "Find tax incentives in San Mateo", "Half Moon Bay Ca", "San Mateo", "Finance", "../../media/images/halfmoon.jpeg");
let evNT85 = new DynamicEvents("Parental Financial Support", "Helping support parents with money", "3030 Winchester Drive, San Jose, Ca", "San Jose", "Finance", "../../media/images/stackObooks.jpeg");
let evNT86 = new DynamicEvents("Single Parent Support Group", "Learn what Santa Clara is doing to support single parents", "777 Santana Row Way, Santa Clara Ca", "San Jose", "Finance", "../../media/images/Santana_Row_sign.jpeg");
let evNT87 = new DynamicEvents("Google Single Parent Community Union", "Find out how Google is supporting single parents", "Google Way Santa Clara Ca", "San Jose", "Finance", "../../media/images/49ers.jpeg");
let evNT88 = new DynamicEvents("Solano County Tax deductions", "Find how you can save on taxes in Solano", "Leftfoot Drive Vallejo Ca", "Solano", "Finance", "../../media/images/stockmarket.jpeg");
let evNT89 = new DynamicEvents("Six Men Financiers", "Finding solutions for single parents in debt", "Vallejo Ca", "Solano", "Finance", "../../media/images/winedrinkingpeple.jpeg");
let evNT90 = new DynamicEvents("Marina Investments", "Learn where single parents can find investments in Vallejo", "Vallejo Ca", "Solano", "Finance", "../../media/images/stockmarket.jpeg");
let evNT91 = new DynamicEvents("Napa County GA bills", "Find out if you qualify for general assistance", "Downtown 5th Street Napa Ca", "Napa", "Finance", "../../media/images/taxessigniture.jpeg");
let evNT92 = new DynamicEvents("Napa County Small Business Grants", "Find federal grants applicable to the valley", "1001 Vineyard Way, Napa Ca", "Napa", "Finance", "../../media/images/todlerPlayblocks.jpeg");
let evNT93 = new DynamicEvents("Napa Valley Investor", "Find companies in the valley to invest in", "Napa Ca", "Napa", "Finance", "../../media/images/winedrinkingpeple.jpeg");
let evNT94 = new DynamicEvents("Marin County Low Income Support", "Learn about what Marin county has to offer low income families", "Sausalito Ca", "Marin", "Finance", "../../media/images/womanAlone.jpeg");
let evNT95 = new DynamicEvents("Marin Investments", "Learn about Marin county tax incentives", "Mt Tamalpais Way Marin Ca", "Marin", "Finance", "../../media/images/mt.tamalpais.jpeg");
let evNT96 = new DynamicEvents("Bank Of America Mortgages", "Low rates for first time buyers", "1000 Trailine Ave", "Marin", "Finance", "../../media/images/womanrunning.jpeg");


function act() {
    let currentPage = $('title').html();
    let currentPageEvents = [];
    let finalToPage = [];
    let arrOfEvents = [evNT1, evNT2, evNT3, evNT4, evNT5, evNT6, evNT7, evNT8, evNT9, evNT10,
        evNT11, evNT12, evNT13, evNT14, evNT15, evNT16, evNT17, evNT18, evNT19,
        evNT20, evNT21, evNT22, evNT23, evNT24, evNT25, evNT26, evNT27, evNT28, evNT29,
        evNT30, evNT31, evNT32, evNT33, evNT34, evNT35, evNT36, evNT37, evNT38, evNT39, evNT40,
        evNT41, evNT42, evNT43, evNT44, evNT45, evNT46, evNT47, evNT48, evNT49,
        evNT50, evNT51, evNT52, evNT53, evNT54, evNT55, evNT56, evNT57, evNT58, evNT59, evNT60,
        evNT61, evNT62, evNT63, evNT64, evNT65, evNT66, evNT67, evNT68, evNT69,
        evNT70, evNT71, evNT72, evNT73, evNT74, evNT75, evNT76, evNT77, evNT78, evNT79,
        evNT80, evNT81, evNT82, evNT83, evNT84, evNT85, evNT86, evNT87, evNT88, evNT89, evNT90,
        evNT91, evNT92, evNT93, evNT94, evNT95, evNT96];

    const objOfCountyOrder = {
        "Contra Costa": ["Contra Costa", "Alameda", "Solano", "Marin", "San Francisco", "San Jose", "San Mateo", "Napa"],
        "Alameda": ["Alameda", "Contra Costa", "San Jose", "San Francisco", "Solano", "Marin", "San Mateo", "Napa"],
        "San Jose": ["San Jose", "Alameda", "San Mateo", "Contra Costa", "San Francisco", "Solano", "Marin", "Napa"],
        "San Mateo": ["San Mateo", "San Jose", "San Francisco", "Alameda", "Contra Costa", "Solano", "Marin", "Napa"],
        "San Francisco": ["San Francisco", "San Mateo", "Marin", "San Jose", "Alameda", "Contra Costa", "Solano", "Napa"],
        "Marin": ["Marin", "San Francisco", "Napa", "Solano", "San Mateo", "Alameda", "Contra Costa", "San Jose"],
        "Napa": ["Napa", "Marin", "San Francisco", "Solano", "San Mateo", "Alameda", "Contra Costa", "San Jose"],
        "Solano": ["Solano", "Marin", "Contra Costa", "San Francisco", "Napa", "San Mateo", "Alameda", "San Jose"],
    }

    for (let i = 0; i < arrOfEvents.length; i++) {
        if (arrOfEvents[i].type === currentPage) {
            currentPageEvents.push(arrOfEvents[i])
        }
    }
    //get user account
    let user = {county:"Marin"};
    if (localStorage.getItem('Accounts')) {
        arrOfAccounts = JSON.parse(localStorage.getItem('Accounts'));
        for (let i = 0; i < arrOfAccounts.length; i++) {
            if (arrOfAccounts[i].loggedIn === true) {
                user = arrOfAccounts[i]
                break;
            } else {
                user = {
                    lname: "",
                    email: "email",
                    pass: "pass",
                    county: "Contra Costa",
                    loggedIn: true
                }
            }
        }
    }
    // compare user county to object of counties to figure out the order to present on page
    let userProp = user.county;
    let newArr3 = objOfCountyOrder[userProp];

    for (let i = 0; i < newArr3.length; i++) {
        let checkToPush = newArr3[i]
        for (let j = 0; j < currentPageEvents.length; j++) {
            if (currentPageEvents[j].county == checkToPush) {
                finalToPage.push(currentPageEvents[j]);
            }
        }
    }
    //display cards supporting on pages
    for (let i = 0; i < finalToPage.length; i++) {
        let applyToPage = finalToPage[i];
        $('.pushData').append(`<div class="col-lg-3 col-md-6 pt-3">
            <div class="card boxStyles">
                <div class="card-body createSpacingForBoxes justify-items-center">
                    <h5 class="card-title">${applyToPage.title}</h5>
                    <p class="inBoxFontBig">${applyToPage.description} </p>
                    <p class="inBoxFontSmall">${applyToPage.address} </p>
                    <div class="img-fluid justify-content-sm-center">
                        <img class="img-fluid rounded imageSizes " src="images/${applyToPage.image}">
                    </div>
                </div>
            </div>
            </div>`)
    }
}
act();
// Date Object below for main page
let today = new Date();
let currentMonth = today.getMonth();
let day = today.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"]
$(".showTime").html(`Today is ${months[currentMonth]}  ${day}`)