interface root {
  children: React.ReactNode;
  params: { locale: string };
}

type IRoot = Readonly<root>;

export default IRoot;
