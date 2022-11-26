export default function ReviewComponent({
  img,
  name,
  review,
}: {
  img: string;
  name: string;
  review: string;
}) {
  return (
    <div className="flex flex-col items-start bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] text-left space-y-4">
      <p>"{review}"</p>
      <section className="flex justify-center items-center space-x-2">
        <img alt={`${name} icon`} width="60px" src={img} />
        <p>{name}</p>
      </section>
    </div>
  );
}
