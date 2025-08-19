import { createClient } from "@supabase/supabase-js";

const Projecturl = "https://dyfpdhnxhtlyqdhncruf.supabase.co";
const APiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZnBkaG54aHRseXFkaG5jcnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMjk4MjksImV4cCI6MjA2ODkwNTgyOX0.pQmCPJUPPI5gLiUNoROovxTMAzz710yQuonQt8Ex85M";

export const supabase = createClient(Projecturl, APiKey);
