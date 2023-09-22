import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export function checkTokenCookies(){
  const nextCookies = cookies();
  const token = nextCookies.get('TOKEN');

  if(!token) {
    return redirect('/pages/useraccess');
  }

  return token.value;
}