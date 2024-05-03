import * as React from "react";
const Icono = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="1em"
        // height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0}
        className="sm:w-[3.2rem] sm:h-[3.2rem] w-[2.2rem] h-[2.2rem]"
        viewBox="0 0 256 256"
        {...props}
        style={{
            width: props.width,
            height: props.height,
        }}
    >
        <path
            stroke="none"
            fill="#88C569"
            d="M132 0h2c1.717 2.51 3.285 5 4.813 7.625l1.36 2.332c11.184 19.67 13.717 41.665 10.577 63.855l-.4 2.874c-1.117 7.577-2.466 15.18-5.35 22.314l-2 1 .438-3.594c2.886-24.701.81-46.901-7.438-70.406h-2c-.26.877-.52 1.753-.79 2.656-8.813 24.337-33.848 40.658-54.632 53.766-26.454 16.69-50.085 33.201-58.242 65.265C17.528 160.489 17.03 173.957 16 187h2l.742-2.082c1.477-3.426 3.356-6.488 5.383-9.606l1.213-1.87C28.906 168.016 32.768 162.93 37 158l2.336-2.742c25.63-29.187 61.838-39.662 98.031-49.582 28.23-7.806 54.38-18.851 70.099-44.99C213.335 50.322 217.55 39.027 222 28l2 1a104.461 104.461 0 0 1 1.438 7.707l.379 2.386c.405 2.572.795 5.145 1.183 7.72l.406 2.656c.782 5.13 1.543 10.262 2.286 15.397.256 1.777.517 3.553.78 5.328C235.645 106.378 234.32 148.984 213 180c-17.656 21.864-40.411 32.076-67.488 37.457l-3.282.654c-12.997 2.517-26.1 4.152-39.23 5.796-25.277 3.19-52.999 6.759-73 24.093l-2-1c20.11-23.402 55.226-27.282 83.749-32.58C162.466 205.8 162.466 205.8 202 175c17.699-26.709 19.478-58.922 17.063-90l-.264-3.637C218.356 74.61 218.356 74.61 217 68l-1.215 1.836c-21.387 31.523-52.559 41.484-87.64 51.387C102.92 128.357 77.7 135.853 58 154l-1.647 1.503C47.047 164.083 39.666 173.26 33 184l-1.133 1.783c-6.79 10.8-11.628 22.534-16.527 34.274l-.826 1.962c-.75 1.787-1.494 3.577-2.236 5.367C11 230 11 230 9 231c-10.079-87.626-10.079-87.626 16.703-122.297C39.25 92.761 55.713 82.351 73.385 71.44 80.995 66.71 88.145 61.776 95 56l2.68-2.258C114.707 38.89 124.9 21.212 132 0Z"
        />
        <path
            stroke="none"
            fill="#88C469"
            d="M170 128c-9.844 7.27-19.945 13.947-30.438 20.25l-3.357 2.024C128.26 155 128.26 155 126 155v3c3.014 1.39 3.014 1.39 5.796-.336l3.384-2.039 1.844-1.097a888.065 888.065 0 0 0 5.851-3.528c15.02-9.031 15.02-9.031 22.383-13.125l3.137-1.758C171 135 171 135 174 136c-3.34 4.226-6.791 7.76-11.063 11.063l-1.77 1.386c-6.298 4.826-12.965 9.088-19.677 13.311l-2.51 1.588-2.253 1.406c-1.87 1.147-1.87 1.147-2.727 3.246 5.634-1.507 9.937-4.337 14.75-7.5 6.661-4.294 13.385-8.399 20.313-12.25l2.325-1.303C176.744 144 176.744 144 179 144c-5.074 11.293-18.228 18.193-28.203 24.79l-2.08 1.375a563.878 563.878 0 0 1-4.006 2.612c-3.404 2.083-3.404 2.083-5.711 5.223 10.387-4.85 19.78-10.57 29.25-17 2.562-1.738 5.13-3.466 7.703-5.188l1.758-1.208c1.39-.93 2.836-1.776 4.289-2.604l2 1c-16.456 19.7-38.284 39.185-64.863 42.34-5.092.184-9.58-.605-14.512-1.84-17.24-4.193-32.543.963-47.61 9.594C43.364 211.724 31.863 222.25 22 235l-2.43 3.023c-5.323 6.681-9.996 13.593-14.347 20.948C4.198 260.68 3.105 262.344 2 264H0c7.253-28.735 25.892-54.322 51-70 8.433-4.848 17.27-7.423 26.666-9.733 6.781-1.758 11.128-3.805 15.022-9.915L94 171.625c8.787-16.767 56.922-49.984 76-43.625Z"
        />
        <path
            stroke="none"
            fill="#87C468"
            d="M133 37c3.944 5.916 1.981 14.178.746 20.89-4.88 20.34-19.494 33.082-36.502 43.75-4.211 2.553-8.513 4.948-12.806 7.36C61.073 122.159 44.455 137.64 31 161c-2.216-6.648 2.89-15.07 5.75-21.125 10.793-20.697 29.716-32.714 49.217-44.14C96.845 89.358 106.945 82.883 116 74l1.965-1.89C127.208 62.481 130.239 49.65 133 37Z"
        />
        <path
            stroke="none"
            fill="#7EB45E"
            d="m35 240 2 1c-2.85 3.008-5.235 5.278-9 7l2.938-3.438 1.652-1.933A49.663 49.663 0 0 1 35 240Z"
        />
    </svg>
);
export default Icono;
