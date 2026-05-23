export const isBypassRoutes = [
    "/api/polar/webhook",
    "/api/inngest(.*)",
    "/api/auth(.*)",
    "/convex(.*)"
]
export const ProtectedRoutes = [
    "/dashboard(.*)"
]

export const isPublicRoutes = [
    "/auth(.*)",
    "/"
]   