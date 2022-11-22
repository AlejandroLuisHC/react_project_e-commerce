const arrivalTime = (shippingTime) => {
    const today = new Date();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekdayPos = () => {
        if ((today.getDay() + shippingTime) === 7) return 0
        else if ((today.getDay() + shippingTime) === 8) return 1
        else if ((today.getDay() + shippingTime) === 9) return 2
        else return (today.getDay() + shippingTime)
    }
    const day = weekday[weekdayPos()]
    const dd = String(today.getDate() + shippingTime).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const arrival = `${day} ${dd}/${mm}/${yyyy}`;
    return arrival
}
export default arrivalTime