import { pageMetadata } from "../../../lib/pageMetadata";

export const metadata = pageMetadata(
  "O mucah",
  "Zanimivosti o mačkah, njihovem vedenju in pozitivnem vplivu na ljudi.",
  "/o_nas/o_mucah",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
