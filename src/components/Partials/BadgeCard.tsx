interface Props {
  hasFooter: boolean;
}

const BadgeCard = ({ hasFooter = true }: Props) => {
  return (
    <div
      className={`bg-slate dark:bg-black dark:text-white border border-slate dark:border-white p-2 md:p-4 ${
        !hasFooter ? "md:rounded-full" : "md:rounded-lg"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="w-11 h-11 rounded-full bg-green"></div>

        <div className="col-span-3 flex flex-col">
          <span className="font-bold">Google Reviews</span>
          <span className="flex flex-wrap items-center gap-4">
            <span>(4.0)</span>
            <svg
              width="121"
              height="19"
              viewBox="0 0 121 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7734 6.75752C18.7142 6.5833 18.6053 6.43022 18.4602 6.31717C18.315 6.20412 18.1399 6.13606 17.9565 6.12138L12.5909 5.69509L10.269 0.556119C10.1951 0.390603 10.0748 0.250022 9.92274 0.151342C9.77065 0.0526613 9.59325 9.96355e-05 9.41195 1.41511e-07C9.23065 -9.93525e-05 9.05319 0.0522676 8.90099 0.150781C8.7488 0.249294 8.62837 0.389744 8.55425 0.555178L6.2324 5.69509L0.866835 6.12138C0.68656 6.13566 0.514217 6.20157 0.370424 6.31122C0.22663 6.42087 0.117475 6.56961 0.0560174 6.73967C-0.00544027 6.90972 -0.0165983 7.09387 0.0238784 7.2701C0.0643551 7.44633 0.154752 7.60716 0.284256 7.73337L4.24937 11.5982L2.84704 17.6697C2.80446 17.8535 2.81811 18.0458 2.88621 18.2218C2.95431 18.3977 3.07373 18.5491 3.22897 18.6563C3.3842 18.7636 3.56808 18.8217 3.75675 18.8231C3.94542 18.8245 4.13017 18.7692 4.28702 18.6644L9.41165 15.2484L14.5363 18.6644C14.6966 18.7708 14.8857 18.8256 15.078 18.8214C15.2704 18.8172 15.4569 18.7541 15.6124 18.6408C15.7679 18.5274 15.8849 18.3692 15.9478 18.1874C16.0107 18.0055 16.0163 17.8088 15.964 17.6236L14.2426 11.601L18.5117 7.75972C18.7913 7.50752 18.8939 7.11417 18.7734 6.75752Z"
                fill="#FFD51A"
              />
              <path
                d="M44.3164 6.75752C44.2572 6.5833 44.1483 6.43022 44.0031 6.31717C43.858 6.20412 43.6828 6.13606 43.4994 6.12138L38.1339 5.69509L35.812 0.556119C35.7381 0.390603 35.6178 0.250022 35.4657 0.151342C35.3136 0.0526613 35.1362 9.96355e-05 34.9549 1.41511e-07C34.7736 -9.93525e-05 34.5962 0.0522676 34.444 0.150781C34.2918 0.249294 34.1713 0.389744 34.0972 0.555178L31.7754 5.69509L26.4098 6.12138C26.2295 6.13566 26.0572 6.20157 25.9134 6.31122C25.7696 6.42087 25.6604 6.56961 25.599 6.73967C25.5375 6.90972 25.5264 7.09387 25.5668 7.2701C25.6073 7.44633 25.6977 7.60716 25.8272 7.73337L29.7923 11.5982L28.39 17.6697C28.3474 17.8535 28.3611 18.0458 28.4292 18.2218C28.4973 18.3977 28.6167 18.5491 28.7719 18.6563C28.9272 18.7636 29.1111 18.8217 29.2997 18.8231C29.4884 18.8245 29.6731 18.7692 29.83 18.6644L34.9546 15.2484L40.0792 18.6644C40.2396 18.7708 40.4286 18.8256 40.621 18.8214C40.8134 18.8172 40.9999 18.7541 41.1554 18.6408C41.3109 18.5274 41.4279 18.3692 41.4908 18.1874C41.5536 18.0055 41.5593 17.8088 41.507 17.6236L39.7856 11.601L44.0547 7.75972C44.3342 7.50752 44.4368 7.11417 44.3164 6.75752Z"
                fill="#FFD51A"
              />
              <path
                d="M69.8632 6.75752C69.8041 6.5833 69.6952 6.43022 69.55 6.31717C69.4048 6.20412 69.2297 6.13606 69.0463 6.12138L63.6807 5.69509L61.3589 0.556119C61.2849 0.390603 61.1647 0.250022 61.0126 0.151342C60.8605 0.0526613 60.6831 9.96355e-05 60.5018 1.41511e-07C60.3205 -9.93525e-05 60.143 0.0522676 59.9908 0.150781C59.8386 0.249294 59.7182 0.389744 59.6441 0.555178L57.3222 5.69509L51.9567 6.12138C51.7764 6.13566 51.6041 6.20157 51.4603 6.31122C51.3165 6.42087 51.2073 6.56961 51.1459 6.73967C51.0844 6.90972 51.0732 7.09387 51.1137 7.2701C51.1542 7.44633 51.2446 7.60716 51.3741 7.73337L55.3392 11.5982L53.9369 17.6697C53.8943 17.8535 53.908 18.0458 53.9761 18.2218C54.0442 18.3977 54.1636 18.5491 54.3188 18.6563C54.474 18.7636 54.6579 18.8217 54.8466 18.8231C55.0353 18.8245 55.22 18.7692 55.3769 18.6644L60.5015 15.2484L65.6261 18.6644C65.7864 18.7708 65.9755 18.8256 66.1679 18.8214C66.3603 18.8172 66.5467 18.7541 66.7022 18.6408C66.8577 18.5274 66.9748 18.3692 67.0376 18.1874C67.1005 18.0055 67.1062 17.8088 67.0539 17.6236L65.3325 11.601L69.6016 7.75972C69.8811 7.50752 69.9837 7.11417 69.8632 6.75752Z"
                fill="#FFD51A"
              />
              <path
                d="M95.414 6.75752C95.3549 6.5833 95.246 6.43022 95.1008 6.31717C94.9556 6.20412 94.7805 6.13606 94.5971 6.12138L89.2315 5.69509L86.9097 0.556119C86.8357 0.390603 86.7155 0.250022 86.5634 0.151342C86.4113 0.0526613 86.2339 9.96355e-05 86.0526 1.41511e-07C85.8713 -9.93525e-05 85.6938 0.0522676 85.5416 0.150781C85.3894 0.249294 85.269 0.389744 85.1949 0.555178L82.873 5.69509L77.5075 6.12138C77.3272 6.13566 77.1548 6.20157 77.011 6.31122C76.8673 6.42087 76.7581 6.56961 76.6966 6.73967C76.6352 6.90972 76.624 7.09387 76.6645 7.2701C76.705 7.44633 76.7954 7.60716 76.9249 7.73337L80.89 11.5982L79.4877 17.6697C79.4451 17.8535 79.4587 18.0458 79.5268 18.2218C79.5949 18.3977 79.7144 18.5491 79.8696 18.6563C80.0248 18.7636 80.2087 18.8217 80.3974 18.8231C80.586 18.8245 80.7708 18.7692 80.9276 18.6644L86.0523 15.2484L91.1769 18.6644C91.3372 18.7708 91.5263 18.8256 91.7187 18.8214C91.911 18.8172 92.0975 18.7541 92.253 18.6408C92.4085 18.5274 92.5256 18.3692 92.5884 18.1874C92.6513 18.0055 92.6569 17.8088 92.6046 17.6236L90.8833 11.601L95.1524 7.75972C95.4319 7.50752 95.5345 7.11417 95.414 6.75752Z"
                fill="#FFD51A"
              />
              <path
                d="M120.949 6.75752C120.89 6.5833 120.781 6.43022 120.636 6.31717C120.491 6.20412 120.316 6.13606 120.132 6.12138L114.767 5.69509L112.445 0.556119C112.371 0.390603 112.251 0.250022 112.099 0.151342C111.946 0.0526613 111.769 9.96355e-05 111.588 1.41511e-07C111.406 -9.93525e-05 111.229 0.0522676 111.077 0.150781C110.925 0.249294 110.804 0.389744 110.73 0.555178L108.408 5.69509L103.043 6.12138C102.862 6.13566 102.69 6.20157 102.546 6.31122C102.402 6.42087 102.293 6.56961 102.232 6.73967C102.17 6.90972 102.159 7.09387 102.2 7.2701C102.24 7.44633 102.331 7.60716 102.46 7.73337L106.425 11.5982L105.023 17.6697C104.98 17.8535 104.994 18.0458 105.062 18.2218C105.13 18.3977 105.25 18.5491 105.405 18.6563C105.56 18.7636 105.744 18.8217 105.933 18.8231C106.121 18.8245 106.306 18.7692 106.463 18.6644L111.587 15.2484L116.712 18.6644C116.872 18.7708 117.061 18.8256 117.254 18.8214C117.446 18.8172 117.633 18.7541 117.788 18.6408C117.944 18.5274 118.061 18.3692 118.124 18.1874C118.186 18.0055 118.192 17.8088 118.14 17.6236L116.418 11.601L120.688 7.75972C120.967 7.50752 121.07 7.11417 120.949 6.75752Z"
                fill="#DFDFDF"
              />
            </svg>
          </span>
        </div>

        <div className="col-span-2">1824 reviews</div>
      </div>

      {hasFooter && (
        <span className="mt-4 flex justify-between text-sm">
          <span className="text-lightGray">Would you recommend?</span>
          <span className="font-semibold cursor-pointer">
            Leave Review {">"}{" "}
          </span>
        </span>
      )}
    </div>
  );
};

export default BadgeCard;