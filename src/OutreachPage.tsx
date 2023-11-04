import * as React from "react";
import Page from "./Page";
import HeaderCard from "./HeaderCard";

export default function Outreach() {
  return (
    <>
      <Page>
        <HeaderCard title="Outreach"></HeaderCard>
      </Page>
    </>
  );
}

export const OutreachMemo = React.memo(Outreach);
