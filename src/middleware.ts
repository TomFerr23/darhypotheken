import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(nl|en)/:path*", "/((?!_next|api|studio|images|fonts|animations|videos|favicon).*)"],
};
