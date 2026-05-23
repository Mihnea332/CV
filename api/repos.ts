export default async function hander(req, res) {
  try {
    const response = await fetch(
      "https://api.github.com/users/Mihnea332/repos?sort=updated&direction=desc&per_page=100",
      {
        headers: {
          Autohorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok)
      return res.status(response.status).json({ error: "Eroare" });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Eroare interna" });
  }
}
