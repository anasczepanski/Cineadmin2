import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jlasoxuykhoeqkezkmum.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsYXNveHV5a2hvZXFrZXprbXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0ODk0NzQsImV4cCI6MjAyNTA2NTQ3NH0.HziNF0d85aDXr-DzHkqLJm5x1pRR1yb0BOOu4SkvMwg';
const supabase = createClient(supabaseUrl, supabaseKey);