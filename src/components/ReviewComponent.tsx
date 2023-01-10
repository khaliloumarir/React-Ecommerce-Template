export default function ReviewComponent({
  img,
  name,
  review,
  pdtImg,
}: {
  img: string;
  name: string;
  review: string;
  pdtImg: string;
}) {
  return (
    <div className=" p-4 flex flex-col sm:items-start  items-center bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] text-left space-y-4">
      <p>"{review}"</p>
      {pdtImg.length > 0 && (
        <img
          loading="lazy"
          src={pdtImg}
          className="max-w-[300px] rounded-md "
        />
      )}
      <section className="flex justify-center items-center space-x-2">
        <img alt={`${name} icon`} width="60px" src={img} />
        <p>{name}</p>
      </section>
    </div>
  );
}
