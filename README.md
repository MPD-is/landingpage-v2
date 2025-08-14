# Steps to get this working

Its not so easy

## To get supabase working

- Get the Deno extension in vsc
- Change the CORS origin to the domain in index.ts
- Verify the mpd.is or whatever sender domain on resend
- Make sure you have a project on supabase for this
- do this to deploy the function:
  
```cmd
npx supabase functions deploy sendEmail --no-verify-jwt
```

### and also Must set resend api key in supabase

```cmd
npx supabase secrets set RESEND_API_KEY=apikey
```

### Then make a .env with this

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
```

## TODO

Change the CORS domain.
Make toasts appear when sending and email with the various messages.
On main page under team add 5 blocks for advisory board.
Implement CMS for case studies.
