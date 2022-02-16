const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnYm50ZWpqdXJ6Y2VrcmRyc3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MzU4MzksImV4cCI6MTk2MDUxMTgzOX0.qZaB9QwYHlpqHUDJwg6BfMratKhETQ_VQ9EtN3QdHe0'
const SUPABASE_URLl = 'https://egbntejjurzcekrdrspc.supabase.co'

import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

