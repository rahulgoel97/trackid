import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fnpylpuqrgjudgriiokd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucHlscHVxcmdqdWRncmlpb2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjUzMTEsImV4cCI6MjA4OTEwMTMxMX0.jzGNBtZXCuPYUKn0EKShuvQD5ukhIsJp86-OpI5chPE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
