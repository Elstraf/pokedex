type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div style={{ maxWidth: "1440px", margin: "0 auto" }}>{children}</div>;
}
