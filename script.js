const greeting = document.getElementById("greeting");

const setGreeting = () => {
    const date = new Date();
    const dayMonth = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const holidayGreeting = [
        { date: "1/10/2021", greeting: "Happy All Saint's Day!" },
        { date: "30/10/2021", greeting: "Happy Bonifacio Day!" },
        { date: "25/11/2021", greeting: "Happy Holidays!" },
        { date: "30/11/2021", greeting: "Happy Rizal Day!" },
        { date: "1/0/2022", greeting: "Happy New Year!" },
        { date: "1/1/2022", greeting: "Happy Chinese New Year!" },
        { date: "25/1/2022", greeting: "Happy People Power Anniversary!" },
        { date: "17/3/2022", greeting: "Happy Easter!" },
        { date: "9/3/2022", greeting: "Happy Day of Valor!" },
        { date: "1/4/2022", greeting: "Happy Labor Day!" },
        { date: "12/5/2022", greeting: "Happy Independence Day!" },
        { date: "21/7/2022", greeting: "Happy Ninoy Aquino Day!" },
        { date: "29/5/2022", greeting: "Happy National Heroes Day!" },
        { date: "30/10/2022", greeting: "Happy Bonifacio Day!" },
        { date: "25/11/2022", greeting: "Happy Holidays!" },
        { date: "30/11/2022", greeting: "Happy Rizal Day!" }
    ]
    const isHoliday = day => {
        let greetingContent = null;
        for(let i = 0; i < holidayGreeting.length; i++) {
            if (day === holidayGreeting[i].date) {
                greetingContent = holidayGreeting[i].greeting;
                break
            } else continue
        }
        return greetingContent;
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