import type { Metadata } from "next";

const destination = "https://ops.team401.org/";

export const metadata: Metadata = {
  title: "Team 401 Operations",
  robots: { index: false, follow: false },
};

export default function OpsRedirect() {
  return (
    <main>
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(destination)});`,
        }}
      />
      <p>
        Redirecting to <a href={destination}>Team 401 Operations</a>…
      </p>
    </main>
  );
}
