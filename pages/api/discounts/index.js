const discounts = [
  {
    title: "students",
    details:
      "Students benefit a 20% discount on travel vouchers or tickets for all routes. ",
  },
  {
    title: "D.G.A.S.P.C",
    details:
      "People with disabilities and their assistants benefit a 100% discount on travel vouchers or tickets. ",
  },
  {
    title: "retirees",
    details: "Retirees benefit a 50% discount on travel vouchers or tickets. ",
  },
  {
    title: "C.N.P.P",
    details:
      "People with this type of coupons benefit a 100% discount on travel vouchers or tickets. ",
  },
]

export default async (req, res) => {
  res.status(200).json(discounts)
}
