export default function handler (req, res) {
  const { productType } = req.query
  const baseUrl = req.headers.host
  const url = `http://${baseUrl}=${productType}`
  res.json({ productType, query: req.query, url })
}
