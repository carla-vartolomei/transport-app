const tickets = []

export default function async(req, res) {
  if (req.method === "GET") res.status(200).json(tickets)
  else if (req.method === "POST") {
    const ticket = req.body
    const newTicket = {
      id: "TK" + Math.floor(Math.random() * 1000),
      ticket: { ...ticket },
    }
    tickets.push(newTicket)
    res.status(201).json(newTicket)
  }
}
