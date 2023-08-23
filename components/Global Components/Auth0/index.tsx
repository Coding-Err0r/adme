"use client";

interface Props {
  children: React.ReactNode;
}
const Auth0 = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Auth0;
