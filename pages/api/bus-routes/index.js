const busRoutes = {
  startPoint: {
    name: "Iasi",
    phone: "0749.999.212",
  },
  endPoint: [
    {
      name: "Suceava",
      phone: "0752.311.144",
    },
    {
      name: "Falticeni",
      phone: "0735.788.956",
    },
    {
      name: "Husi",
      phone: undefined,
    },
    {
      name: "Targu Neamt",
      phone: "0749.999.211",
    },
    {
      name: "Pascani",
      phone: "0735.788.948",
    },
    {
      name: "Targu Frumos",
      phone: "0735.521.948",
    },
    {
      name: "Rediu",
      phone: undefined,
    },
  ],
}

export default async (req, res) => {
  res.status(200).json(busRoutes)
}
