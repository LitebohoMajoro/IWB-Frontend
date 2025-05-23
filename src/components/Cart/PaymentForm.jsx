const sendRecommendationNotification = async (purchasedItems) => {
  try {
    const response = await fetch("http://localhost:5000/api/recommendations/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ purchasedItems }),
    });

    const data = await response.json();
    localStorage.setItem("recommendations", JSON.stringify(data.recommendations));
    console.log("✅ Recommendations stored");
  } catch (err) {
    console.error("❌ Failed to get recommendations:", err);
  }
};
