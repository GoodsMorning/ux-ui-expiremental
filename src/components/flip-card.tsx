import '@/style/flip-card.css'

function FlipCard() {

  return (
    <>
      <div
        className="flip-card p-4 w-80 h-96 rounded-xl shadow-xl grid place-items-center hover:animate-spin duration-700 bg-gradient-to-t from-[#EAB55F] to-amber-200"
      >
        <span className="text-2xl font-semibold text-white">Premium</span>
      </div>
    </>
  );
}

export default FlipCard;
