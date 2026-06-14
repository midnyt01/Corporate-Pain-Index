export function saveResults(
  data: any
) {
  localStorage.setItem(
    "results",
    JSON.stringify(data)
  );
}

export function getResults() {
  const stored =
    localStorage.getItem(
      "results"
    );

  if (!stored) return null;

  return JSON.parse(stored);
}

export function clearResults() {
  localStorage.removeItem(
    "results"
  );
}