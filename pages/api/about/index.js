const iconSectionList = [
  {
    title: 240,
    subtitle: "destinations",
  },
  {
    title: 60,
    subtitle: "daily routes",
  },
  {
    title: 303,
    subtitle: "tickets sold",
  },
  {
    title: 42,
    subtitle: "employees",
  },
  {
    title: 23,
    subtitle: "autobuses",
  },
]

export default async (req, res) => {
  res.status(200).json(iconSectionList)
}
