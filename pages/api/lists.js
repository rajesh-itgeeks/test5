// This allows us to eecute ANY server side code here.
// Any code we write here will never end up in client-side code bundles and never exposed to any visitors to the site.
// So we can use secret keys here and they will remain secure. However if we are pushing to Github then we should still use .env

const PRIVATE_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

async function handler(req, res) {
  if (req.method === "GET") {
    const options = { method: "GET", headers: { Accept: "application/json" } };

    let dataRes = await fetch(
      `https://a.klaviyo.com/api/v2/lists?api_key=${PRIVATE_API_KEY}`,
      options
    );

    let dataResJSON = await dataRes.json();

    res.status(200).json(dataResJSON);
  } else {
    res.status(500).json({ message: "Invalid" });
  }
}

export default handler;
