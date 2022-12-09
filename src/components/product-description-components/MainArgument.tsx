export default function MainArgument({
  children,
  paragraph,
  title,
}: {
  children?: JSX.Element;
  paragraph: string;
  title: string;
}) {
  return (
    <>
      <h2 className="">{title}</h2>
      {children}

      <p>{paragraph}</p>
    </>
  );
}
