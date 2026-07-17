import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kekudywfeexhzlmmxslz.supabase.co'
const supabaseAnonKey = 'sb_publishable_Ah_kKA29qQiEbZMrKcVcew_Iyjk_4Zz'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
