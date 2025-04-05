import sql from "better-sqlite3";

const db = sql("meals.db");

// .run()
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

//Protext vs sql inyections
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
