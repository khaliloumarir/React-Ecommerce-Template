export default function RightArgument({
  children,
  title,
  productArguments,
}: {
  children: JSX.Element;
  title: string;
  productArguments: { title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col sm:flex-row space-x-8 justify-center items-center text-left sm:w-[80%] ">
      {children}
      <section className="sm:basis-1/2 flex flex-col sm:justify-between">
        <h2>{title}</h2>
        {productArguments.map((argument, index) => {
          return (
            <section key={argument.title}>
              <h3 className="text-xl font-bold">{argument.title}</h3>
              <p>{argument.description}</p>
            </section>
          );
        })}
      </section>
    </div>
  );
}
