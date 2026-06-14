import { supabase } from "@/lib/supabase";

export async function saveSurvey(
  data: any
) {
  const { error } =
    await supabase
      .from("survey_responses")
      .insert([data]);

  if (error) {
    console.error(error);
    throw error;
  }

  return true;
}