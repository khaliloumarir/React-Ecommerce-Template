import { review } from "../interfaces";
export default function ReviewBubble({ review }: { review: review }) {
  return (
    <div className="min-h-[160px] space-y-6">
      <section className="p-6 bg-[#f6f8fc] border-l-4 border-l-[#ecd5d8] min-h-[150px] text-center md:min-h-[120px]">
        <p>"{review.reviewMessage}"</p>
      </section>
      <section className="flex items-center space-x-4">
        <img
          loading="lazy"
          alt={`${review.userName}`}
          width="50px"
          height="50px"
          src={review.image}
        />
        <span className="text-paragraph">{review.userName}</span>
      </section>
    </div>
  );
}
