import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  // Altere para true para ATIVAR a manutenção. Mude para false para DESATIVAR.
  const IS_MAINTENANCE_MODE = true; 
  
  const { pathname } = req.nextUrl;

  // Evita loops infinitos e permite carregar arquivos estáticos (imagens, css)
  if (
    pathname.startsWith('/manutencao') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Redireciona temporariamente (Status 307) para a página de manutenção
  if (IS_MAINTENANCE_MODE) {
    return NextResponse.redirect(new URL('/manutencao', req.url));
  }

  return NextResponse.next();
}

// Configuração para garantir que o middleware rode em todas as rotas relevantes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - manutencao (maintenance page itself)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|manutencao).*)',
  ],
};
