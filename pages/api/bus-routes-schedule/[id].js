import axios from "axios"

export default async function handler(req, res) {
  const { id: idRoute } = req.query

  const { data } = await axios.get(
    "https://transport-api-94aef37b9efd.herokuapp.com/bus-routes-schedule"
  )
  const busRoute = data.find((item) => item.id === idRoute)

  res.status(200).json(busRoute)
}
