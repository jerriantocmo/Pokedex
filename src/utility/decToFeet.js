export const decToFeet = (string) => {
    var feet = Math.floor(string / 3.048);
    var inches = Math.round((string / 3.048 - feet) * 12);
    return feet + "' " + inches + '"';
};
