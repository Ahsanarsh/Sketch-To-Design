import { convexAuthNextjsMiddleware, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";
import { isBypassRoutes, isPublicRoutes, ProtectedRoutes } from "./lib/permission";
import { createRouteMatcher } from "@convex-dev/auth/nextjs/server";

const BypassMatcher = createRouteMatcher(isBypassRoutes);
const PublicMatcher = createRouteMatcher(isPublicRoutes);
const ProtectedMatcher = createRouteMatcher(ProtectedRoutes);

export default convexAuthNextjsMiddleware(
  async (request, { convexAuth }) => {
    if (BypassMatcher(request)) return;

    const authed = await convexAuth.isAuthenticated();

    // Authenticated users visiting auth/public pages → send to dashboard
    if (PublicMatcher(request) && authed) {
      return nextjsMiddlewareRedirect(request, "/dashboard");
    }
    // Unauthenticated users visiting protected pages → send to sign-in
    if (ProtectedMatcher(request) && !authed) {
      return nextjsMiddlewareRedirect(request, "/auth/sign-in");
    }
  },
  {
    cookieConfig: {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    },
  },
);

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};