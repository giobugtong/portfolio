const greeting = document.getElementById("greeting");

const setGreeting = () => {
    const date = new Date();
    const dayMonth = `${date.getDate()}/${date.getMonth()}`;
    const holidayGreeting = [
        { date: "1/10", greeting: "Happy All Saint's Day!" },
        { date: "30/10", greeting: "Happy Bonifacio Day!" },
        { date: "25/11", greeting: "Happy Holidays!" },
        { date: "30/11", greeting: "Happy Rizal Day!" },
        { date: "1/0", greeting: "Happy New Year!" },
        { date: "1/1", greeting: "Happy Chinese New Year!" },
        { date: "25/1", greeting: "Happy People Power Anniversary!" },
        { date: "17/3", greeting: "Happy Easter!" },
        { date: "9/3", greeting: "Happy Day of Valor!" },
        { date: "1/4", greeting: "Happy Labor Day!" },
        { date: "12/5", greeting: "Happy Independence Day!" },
    ]
    const isHoliday = day => {
        for(let i = 0; i < holidayGreeting.length; i++) {
            if (day === holidayGreeting[i].date) {
                return holidayGreeting.greeting;
            } else return false
        }
    }

    if (isHoliday(dayMonth)) {
        return isHoliday(dayMonth);
    } else {
        switch (date.getDay()) {
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
}
greeting.innerHTML = setGreeting();

const contactSubmit = e => {
    e.preventDefault();
    console.log("contact form submitted");
}