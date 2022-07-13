export const getGenderCode = (gender) => {
    switch (gender) {
        case 0:
            return 'Male';
        case 1:
            return 'Female';
        case 2:
            return 'Other';
        default:
            return 'Other';
    }
}

export const convertDate = (date) => {
    date = new Date(date.toDateString());
    let hoursDiff = date.getHours() - date.getTimezoneOffset() / 60;
    let minutesDiff = (date.getHours() - date.getTimezoneOffset()) % 60;
    date.setHours(hoursDiff);
    date.setMinutes(minutesDiff);
    return date;
}