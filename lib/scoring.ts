export interface PainMetrics {
  frustration: number;
  frequency: number;
  dissatisfaction: number;
  willingnessToPay: number;
}

export function calculatePainScore(
  metrics: PainMetrics
) {
  const frustrationScore =
    (metrics.frustration / 5) * 100;

  const frequencyScore =
    (metrics.frequency / 5) * 100;

  const dissatisfactionScore =
    (metrics.dissatisfaction / 5) * 100;

  const willingnessScore =
    (metrics.willingnessToPay / 5) * 100;

  const score =
    frustrationScore * 0.4 +
    frequencyScore * 0.3 +
    dissatisfactionScore * 0.2 +
    willingnessScore * 0.1;

  return Math.round(score);
}