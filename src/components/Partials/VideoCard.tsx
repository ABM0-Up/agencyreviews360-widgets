const VideoCard = () => {
  return (
    <div className="bg-slate dark:bg-black dark:text-white border border-slate dark:border-white rounded-xl p-4 flex flex-col gap-4">
      <div className="h-[214px] rounded-xl bg-orange-200 flex items-center justify-center">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.3" cx="27" cy="27" r="27" fill="white" />
          <circle cx="27" cy="27" r="21.3652" fill="white" />
          <path
            d="M32.663 25.0755C34.1127 25.9143 34.1127 28.0856 32.663 28.9244L23.9099 33.989C22.501 34.8042 20.7695 33.7431 20.7695 32.0645L20.7695 21.9354C20.7695 20.2568 22.501 19.1957 23.9099 20.0109L32.663 25.0755Z"
            fill="#161616"
          />
        </svg>
      </div>

      <span className="font-bold uppercase">
        Dalton Letorney, Marketing consultant
      </span>

      <span className="text-sm text-lightGray">-at kiyan jwels</span>
    </div>
  );
};

export default VideoCard;
