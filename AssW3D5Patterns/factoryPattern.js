function RegularBulb(option) {
    this.lumens = option.lumens;
    this.lastFor = option.lastFor || 1;
}
function EnergySaverBulb(option) {
    this.lumens = option.lumens;
    this.lastFor = option.lastFor || 10;
    this.color = option.color || "Multiple color";
}

function bulbs(option) {
    if (option.lumens <= 40) {
        return new EnergySaverBulb(option);
    } else if (option.lumens >= 50) {
        return new RegularBulb(option);
    }
}
