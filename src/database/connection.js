import { createClient } from '@supabase/supabase-js';
const  supabase = createClient('https://wwqkvvsyrhstkxgovaqk.supabase.co',
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cWt2dnN5cmhzdGt4Z292YXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyODE5NzIsImV4cCI6MjAyMTg1Nzk3Mn0.xfgTy_j4Mj14V4iddoRSF_7l-nuOfbbwNA5l3YCOGBw');
export default supabase;