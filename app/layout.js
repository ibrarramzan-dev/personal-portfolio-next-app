import "../styles/important.scss";
import style from "@/styles/App.module.scss";

export const metadata = {
  title: "Monster Programming",
  description: "This is my personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.body}>{children}</body>
    </html>
  );
}
