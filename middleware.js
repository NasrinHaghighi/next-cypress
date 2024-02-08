import { NextResponse ,NextRequest} from 'next/server'
 


const protectedRoutes =['/addProduct/nasrin']

const session = false
export function middleware(request) {
    if(!session && protectedRoutes.includes(request.nextUrl.pathname)){
const absoluteUrl = new URL('/', request.nextUrl.origin)
return NextResponse.redirect(absoluteUrl.toString())
    }
  
}
