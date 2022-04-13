const contactData = {
  contactDescription:
    "We love questions and feedback and we are always happy to help! Here are some ways to contact us.",
  contactInfo: [
    "yntiasi@yahoo.com",
    "0232.210.445",
    "str. Arcu, nr. 1, bl T3, Mezanin, office 7, IASI",
  ],
  iframePath:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.585244635353!2d27.575801315579447!3d47.16597697915797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7aed19103f%3A0xe34a55fae6bd134b!2sStrada%20Arcu%201%2C%20Ia%C8%99i%20700259!5e0!3m2!1sro!2sro!4v1648471616456!5m2!1sro!2sro",
}

export default async (req, res) => {
  res.status(200).json(contactData)
}
