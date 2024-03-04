const CarouselItem = () => {
  return (
    <div className="flex flex-col bg-slate  dark:bg-black dark:text-white p-4 rounded-lg border border-slate dark:border-white">
      <div className="flex items-center gap-3">
        <div className="flex gap-3 items-center w-fit h-10 bg-white  dark:bg-black dark:text-white rounded-lg border border-grayStroke dark:border-white px-2">
          <div className="w-7 h-7 rounded-full bg-green"></div>
          <span>Mar 25 2023</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-lightestGray flex items-center justify-center text-white">
          K
        </div>
        <span>Katie Edward</span>
      </div>

      <p className="my-3">
        I had the pleasure of working with the professionals at Acme Solutions
        on a complex project. Their expertise and dedication were outstanding.
        They delivered on time and within budget. I'm very satisfied with the
        results. I can't say enough good things about the service at PQR
        Restaurant.
      </p>
    </div>
  );
};

export default CarouselItem;
