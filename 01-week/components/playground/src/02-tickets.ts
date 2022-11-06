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

function sortAllTickets(arr:string[], criteria: string) {
    let ticketsArray: Ticket[] = [];

    for (let el of arr) {
      let [destination, price, status] = el.split('|');
      let newTicket = new Ticket(destination, +price, status)
      ticketsArray.push(newTicket);
    }
    let sorted: Ticket[] = [];
    if (criteria === 'destination' || criteria === 'status') {
      sorted = ticketsArray.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    } else if (criteria === 'price') {
      sorted = ticketsArray.sort((a, b) => a[criteria] - b[criteria])
    }

    sorted.forEach(ticket => {
      console.log(ticket);
    });

    return sorted;
}

sortAllTickets([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ], 'destination');
