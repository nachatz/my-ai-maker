import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { CoreLayout } from "~/layouts";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CoreLayout>
        <Component {...pageProps} />
      </CoreLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
