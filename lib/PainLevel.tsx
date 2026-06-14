export function getPainLevel(
  score: number
) {
  if (score <= 20) {
    return {
      label: "Very Low",
      color: "#22c55e",
    };
  }

  if (score <= 40) {
    return {
      label: "Low",
      color: "#84cc16",
    };
  }

  if (score <= 60) {
    return {
      label: "Medium",
      color: "#eab308",
    };
  }

  if (score <= 80) {
    return {
      label: "High",
      color: "#f97316",
    };
  }

  return {
    label: "Very High",
    color: "#c084fc",
  };
}