import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://vbdszjtecjwlvwtcskzo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiZHN6anRlY2p3bHZ3dGNza3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkxOTk3OTQsImV4cCI6MTk3NDc3NTc5NH0.cVvSjVZY8kS9WAlljZ5qmFz8AL-Phj6A1BiLGe-HkCU"
);

export default supabase;
