import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://laskzafaqxkbjowhfkfq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2t6YWZhcXhrYmpvd2hma2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTk0OTEsImV4cCI6MTk2MDAzNTQ5MX0.VgWbVMR-cwRe7Q_wmQgn2z0XaLVYQ_Ux94GlWa2nmIw"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
