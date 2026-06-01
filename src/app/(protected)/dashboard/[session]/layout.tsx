import { SubscriptionEntitlementQuery } from "@/app/convex/query.config";
import { combinedSlug } from "@/lib/utils";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/index";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const { profileName, entitlement } = await SubscriptionEntitlementQuery();
  // Temporarily bypass the redirect check to see the dashboard and navbar
  /*
  if (!entitlement._valueJSON) {
    //TODO: Remove billing hardcoded path
    redirect(`/dashboard/${combinedSlug(profileName!)}`);
  }
  */
  return (
    <div className="grid grid-cols-1">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
