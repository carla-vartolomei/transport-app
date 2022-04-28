import axios from "axios"

export default async function handler(req, res) {
  const { id: idRoute } = req.query

  const { data } = await axios.get(
    `https://transport-higeq2587-carla-vartolomei.vercel.app/api/bus-routes-schedule`
  )
  const busRoute = data.find((item) => item.id === idRoute)

  res.status(200).json(busRoute)
}
