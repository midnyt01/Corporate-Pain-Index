export function calculatePainScore(
  answers: Record<string, any>
) {
  const frustration =
    Number(
      answers.frustration
    ) || 0;

  const frequency =
    Number(
      answers.frequency
    ) || 0;

  const satisfaction =
    Number(
      answers.satisfaction
    ) || 0;

  const willingnessToPay =
    Number(
      answers.willingness_to_pay
    ) || 0;

  /*
    Convert everything to 0-100
  */

  const frustrationScore =
    (frustration / 5) * 100;

  const frequencyScore =
    (frequency / 5) * 100;

  /*
    Invert satisfaction

    5 satisfied → 0 pain
    1 dissatisfied → 100 pain
  */

  const dissatisfactionScore =
    ((6 - satisfaction) / 5) *
    100;

  const willingnessScore =
    (willingnessToPay / 5) *
    100;

  const finalScore =
    frustrationScore * 0.4 +
    frequencyScore * 0.3 +
    dissatisfactionScore * 0.2 +
    willingnessScore * 0.1;

  return Math.round(
    finalScore
  );
}