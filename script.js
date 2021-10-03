const greeting = document.getElementById("greeting");

const setGreeting = () => {
    let day = new Date().getDay();
    switch (day) {
        case 0:
            return "Sunday! The weekend is almost over!"
        case 1:
            return "Hope you're having a meaningful manic Monday!"
        case 2:
            return "Tuesday: it's like Monday but better."
        case 3:
            return "Happy Humpday Wednesday!"
        case 4:
            return "Happy Thirst...I mean Thursday"
        case 5:
            return `"Salamat Hesus At Biyernes Ulit"`
        case 6:
            return "A Sober Saturday is a Sexy Saturday"
    }
}
greeting.innerHTML = setGreeting();

const contactSubmit = e => {
    e.preventDefault();
    console.log("contact form submitted");
}