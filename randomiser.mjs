const generateTicketID = () => {
    const ticket = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];
    let getRandomNumber = () => {
        return Math.floor(Math.random() * ticket.length);
    }
    let ticketNumber = "#";
    for (i=0; i<6; i++) {
        ticketNumber += ticket[getRandomNumber()];
    }
    return ticketNumber;
}
