// interface iTicket {
//     destination: string;
//     price: number;
//     status: string;
// }

class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function sortAllTickets(array:string[]) {
    let ticketsArray: Ticket[] = [];
  array.forEach((element) => {
    let arraySplitted = element.split('|');
    let destination = arraySplitted[0];
    let price = Number(arraySplitted[1]);
    let status = arraySplitted[2];
    let ticket = new Ticket(destination, price, status);
    console.log(ticket);
    ticketsArray.push(ticket);
  });
}

sortAllTickets([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ]);
