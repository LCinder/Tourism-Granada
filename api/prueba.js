

module.exports = (req, res) => {
  const { name = 'Desconocido' } = req.query
  res.status(200).send(`Que pasa ${name}!`)
}
