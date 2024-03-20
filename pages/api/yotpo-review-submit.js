// pages/api/submitReview.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { appkey, sku, product_title, product_url, display_name, email, review_content, review_title, review_score } = req.body;

    const response = await fetch("https://api.yotpo.com/v1/widget/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appkey,
        sku,
        product_title,
        product_url,
        display_name,
        email,
        review_content,
        review_title,
        review_score,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ message: "An error occurred while submitting the review." });
    }

    return res.status(200).json(data);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
