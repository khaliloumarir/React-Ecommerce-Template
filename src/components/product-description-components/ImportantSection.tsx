export default function ImportantSection({
  importantArgument,
}: {
  importantArgument: { icon: string; title: string; description: string }[];
}) {
  return (
    <div className="bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] w-full space-y-8 py-16">
      <div>
        <h1>Important!</h1>
        <p>
          You will Be redirected To the Download Page immediately after your
          purchase is confirmed.
        </p>
      </div>
      <a href="#" className="grid sm:grid-cols-3 gap-y-4">
        {importantArgument.map((argument) => {
          return (
            <section
              key={argument.title}
              className="flex flex-col items-center"
            >
              <img alt={argument.title} width="60px" src={argument.icon} />
              <h3>{argument.title}</h3>
              <p>{argument.description}</p>
            </section>
          );
        })}
      </a>
    </div>
  );
}
