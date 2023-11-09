import type { Metadata } from "next";

import "./styles.css";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "./constatnts";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
