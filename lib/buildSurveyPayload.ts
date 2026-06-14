import { calculatePainScore } from "./CalculatePainScore";

export function buildSurveyPayload(
  answers: Record<string, any>
) {
  const lead =
    answers.lead_capture || {};

  const painScore =
    calculatePainScore(
      answers
    );

  return {
    // Lead capture
    name:
      lead.name || null,

    email:
      lead.email || null,

    phone:
      lead.phone || null,

    interview_interest:
      lead.interview || false,

    beta_tester:
      lead.betaTester || false,

    // Demographics
    role:
      answers.role || null,

    experience:
      answers.experience || null,

    income:
      answers.income || null,

    // Main problem
    biggest_problem:
      answers.biggest_problem || null,

    // Pain metrics
    frustration:
      answers.frustration || null,

    frequency:
      answers.frequency || null,

    satisfaction:
      answers.satisfaction || null,

    willingness_to_pay:
      answers.willingness_to_pay || null,

    pain_score:
      painScore,

    // Current solution
    current_solution:
      answers.current_solution || null,

    paid_before:
      answers.paid_before || null,

    open_feedback:
      answers.open_feedback || null,

    // Ranking question
    ranking:
      answers.ranking || null,

    // Status
    completion_status:
      "completed",

    // Raw backup of all answers
    answers: answers,
  };
}