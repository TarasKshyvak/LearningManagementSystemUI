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