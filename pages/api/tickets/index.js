const tickets = []

export default function async(req, res) {
  if (req.method === "GET") res.status(200).json(tickets)
  else if (req.method === "POST") {
    const ticket = req.body.ticket
    const newTicket = {
      id: Math.random(),
      ticket: ticket,
    }
    tickets.push(newTicket)
    res.status(201).json(newTicket)
  }
}
