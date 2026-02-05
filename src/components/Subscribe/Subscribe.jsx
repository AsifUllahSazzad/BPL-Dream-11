import './Subscribe.css'

const Subscribe = ({handleTheValue, setValue, value}) => {

    return (
        <div className="rounded-3xl border-2 border-white  bg-[#ffffff15] md:p-6 p-4 max-md:mx-5">

  <div className="newsletter rounded-3xl flex flex-col justify-center items-center gap-y-4 border border-[#d6dddd] text-center p-6">

    <h3 className="font-bold text-2xl md:text-3xl">
      Subscribe to our Newsletter
    </h3>

    <p className="newFont text-base md:text-xl text-[#13131370] font-medium">
      Get the latest updates and news right in your inbox!
    </p>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className="w-full text-base px-5 py-3 md:px-7 md:py-4 rounded-xl border border-[#E5E5E5] inset-shadow-2xs"
      />

      <button
        onClick={handleTheValue}
        className="btnStyle w-full sm:w-auto text-base font-bold px-6 py-3 md:px-7 rounded-xl
        shadow-[inset_0px_10px_10px_rgba(0,0,0,0.1),inset_-10px_0px_10px_rgba(0,0,0,0.1),inset_0px_-10px_10px_rgba(0,0,0,0.1),inset_10px_0px_10px_rgba(0,0,0,0.1)]"
      >
        Subscribe
      </button>

    </div>
  </div>
</div>

    );
};

export default Subscribe;