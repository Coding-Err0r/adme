"use client";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
  pageProps: any;
}
const Auth0 = ({ children, pageProps }: Props) => {
  return <div>{children}</div>;
};

export default Auth0;
