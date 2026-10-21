import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Shows up in the browser console during dev if .env.local is missing
  console.error(
    'Missing Supabase env vars. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local (local) or Vercel → Settings → Environment Variables (production).'
  )
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '', {
  auth: {
    // Public lead form only — no user logins, so skip session storage
    persistSession: false,
    autoRefreshToken: false,
  },
})

/**
 * Insert a quote request into the `leads` table.
 * Note: we deliberately do NOT chain .select() — the public key is
 * insert-only under RLS, so asking for the row back would be rejected.
 */
export async function submitLead({ name, phone, email, service, message }) {
  const { error } = await supabase.from('leads').insert({
    name: name.trim(),
    phone: phone.trim(),
    email: email?.trim() || null,
    service,
    message: message?.trim() || null,
  })
  if (error) throw error
}
