// This allows us to eecute ANY server side code here.
// Any code we write here will never end up in client-side code bundles and never exposed to any visitors to the site.
// So we can use secret keys here and they will remain secure. However if we are pushing to Github then we should still use .env

const PRIVATE_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const listID = "URFZpY"; // LF Landing Page

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const options = {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        profiles: [{ email: userEmail }],
      }),
    };

    let submitData = await fetch(
      `https://a.klaviyo.com/api/v2/list/${listID}/subscribe?api_key=${PRIVATE_API_KEY}`,
      options
    );

    try {
      let submitDataJson = await submitData.json();
      res.status(200).json(submitDataJson);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  } else {
    res.status(500).json({ message: "Invalid" });
  }
}

export default handler;
