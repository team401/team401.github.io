import * as React from "react";
import Page from "../components/Page";
import HeaderCard from "../components/HeaderCard";

export default function Outreach() {
  return (
    <>
      <Page>
        <HeaderCard title="Outreach">asdf </HeaderCard>
      </Page>
    </>
  );
}

export const OutreachMemo = React.memo(Outreach);
