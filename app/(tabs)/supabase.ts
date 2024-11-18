
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjqliugsujztzzgmbvkn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('SUPABASE_URL e SUPABASE_KEY devem estar definidas no arquivo .env');
  }


export const supabase = createClient(supabaseUrl, supabaseKey)