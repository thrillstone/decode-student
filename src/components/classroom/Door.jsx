import { useState } from "react";

function Door({subject, time="11:00", onEnter}) {
	const [opening, setOpening] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setOpening(true);
		setTimeout(() => {
			onEnter();
		}, 2000);
	}

	if (!opening) {
	return (
		<svg onClick={handleClick} width="auto" height="100%" viewBox="0 0 150 195" fill="none" cursor="pointer">
		<g transform="translate(10,0)">
			<path d="M126 0H5C2.23858 0 0 2.23858 0 5V195H131V5C131 2.23858 128.761 0 126 0Z" fill="#7D4E24"/>
			<path d="M5 11C5 8.23858 7.23858 6 10 6H121C123.761 6 126 8.23858 126 11V195H5V11Z" fill="#A1623F"/>
			<path d="M120.639 87H108.267C106.709 87 105.447 88.2572 105.447 89.808V118.577C105.447 120.128 106.709 121.385 108.267 121.385H120.639C122.196 121.385 123.459 120.128 123.459 118.577V89.808C123.459 88.2572 122.196 87 120.639 87Z" fill="#CA9E67"/>
			<path d="M112.327 108.999C107.162 103.318 118.963 101.834 118.341 106.905L117.593 109.255L118.736 116.181H111.879C112.13 113.461 112.327 108.999 112.327 108.999Z" fill="#575756"/>
			<path d="M117.113 93.4326H98.5015C97.6722 93.4326 97 94.102 97 94.9276V97.0089C97 97.8346 97.6722 98.5039 98.5015 98.5039H117.113C117.943 98.5039 118.615 97.8346 118.615 97.0089V94.9276C118.615 94.102 117.943 93.4326 117.113 93.4326Z" fill="#575756"/>
			<path d="M93 35L69.9364 21.1869C68.7101 20.4525 67.1851 20.4282 65.9361 21.1233L41 35" stroke="#7D4E24" storkeWidth="2"/>
			<rect x="35" y="34" width="65" height="25" rx="4" fill="#4FCFCF" stroke="#7D4E24" storkeWidth="2"/>
			<text x="68" y="53" fill="white" textAnchor="middle">{subject}</text>
			<text x="66" y="153" fill="white" textAnchor="middle">Starts at {time}</text>
		</g>
		<rect x="-10" y="192" width="170" height="4" rx="4" fill="black" stroke="black" storkeWidth="2"/>
		</svg>
	)
	} else {
		return (
			<svg width="auto" height="100%" viewBox="0 0 132 202" fill="none">
				<g mask="url(#mask0)">
				<rect x="0.400391" y="158.899" width="130.794" height="36.0661" fill="#4FCFCF"/>
				<path d="M35.0969 73.5692C37.0219 72.8842 37.0377 69.6807 35.3712 68.1422C33.9683 66.8408 30.535 67.1938 29.2904 68.7218C29.0636 62.299 18.5422 62.7205 17.0602 68.4478C14.6395 67.1253 11.8179 68.8851 10.9583 71.0348C10.0986 73.1845 11.0216 76.0245 13.3632 76.7621C9.90877 77.6895 10.6313 81.7465 12.1027 83.0585C13.996 84.7498 17.9884 84.1123 19.7129 81.6938C20.3933 85.2662 19.7446 89.2126 19.0326 92.042L20.1454 91.9155C22.0809 92.2369 21.8489 92.0683 24.0323 91.9155C26.7958 91.7206 28.0035 91.6679 30.7512 91.6679C29.9021 89.0808 29.3167 83.9542 30.1342 81.3197C31.6847 83.1112 36.6052 83.48 38.5724 80.5557C40.3814 77.8054 38.6674 73.1582 35.0969 73.5692Z" fill="#E7E8E9"/>
				<path d="M-13.7657 162.013C-13.7657 162.013 -2.91208 148.709 6.72334 118.855C11.4118 104.35 17.2711 88.8223 17.2711 88.8223C17.2711 88.8223 19.7393 90.3028 26.4003 90.3028C33.0612 90.3028 34.0685 89.6969 34.0685 89.6969C34.0685 89.6969 39.3108 110.809 42.454 123.328C49.8375 152.692 59.225 164.479 59.225 164.479C59.225 164.479 45.5814 168.641 24.122 168.293C-3.21794 167.856 -13.7657 162.013 -13.7657 162.013Z" fill="#AA7C50"/>
				<path d="M17.1182 88.4538C16.3693 88.6066 12.82 99.7081 9.29172 110.025C6.12738 119.34 2.83119 127.965 3.45879 128.176C4.78254 128.613 7.86251 119.382 9.84022 116.305C11.8179 113.228 12.4772 107.074 14.0224 108.175C15.5677 109.277 14.0224 118.502 16.8809 117.628C19.7393 116.753 19.9608 106.415 23.0408 107.733C26.1207 109.05 26.5637 124.44 29.2007 122.902C31.8376 121.363 28.1037 107.095 30.9622 107.517C33.8206 107.938 43.4244 135.442 45.6025 132.744C46.0403 132.217 41.452 118.286 38.641 107.19C35.9302 96.4731 35.2446 89.6867 34.6275 88.8226C34.0105 87.9585 31.2997 90.0555 25.7516 90.0555C18.4578 90.0555 17.8776 88.301 17.1182 88.4538Z" fill="#E31717"/>
				</g>
				<path d="M57.0167 119.359C54.6272 117.566 51.6197 114.882 50.4515 112.272C52.0451 109.652 54.3134 107.523 57.0119 106.115C51.2191 101.746 50.3356 98.6159 50.3356 98.6159C52.5804 94.0705 58.3153 90.8084 58.3153 90.8084C53.1886 86.0818 51.8659 79.445 51.8659 79.445C59.5897 74.0278 62.4862 73.6702 62.4862 73.6702C58.5808 68.3461 58.7594 60.7738 58.7594 60.7738C67.5115 59.9705 70.4996 60.6905 70.4996 60.6905C68.7618 54.4259 71.1658 47.216 71.1658 47.216C82.5585 48.5777 84.306 52.4324 84.306 52.4324C86.4204 44.5662 90.7891 42.4355 90.7891 42.4355C90.7891 42.4355 99.1647 46.5156 101.12 53.5883C101.12 53.5883 71.0982 75.2621 70.7845 76.0458C70.5431 76.6629 66.5267 124.355 55.8196 136.012C52.2425 133.103 51.8514 124.218 51.668 121.353C53.5072 120.04 56.814 119.447 57.0167 119.359Z" fill="#EA6F0A"/>
				<path d="M84.8659 140.235C84.8659 140.235 84.6052 151.823 84.8659 156.888C85.0735 160.924 84.6052 165.165 89.6064 165.704C94.3469 166.194 103.031 166.772 106.454 165.44C109.877 164.108 106.188 161.433 103.558 159.827V128.852" fill="#EA7C21"/>
				<path d="M129.833 85.3133C130.625 77.0356 129.133 54.7594 101.284 52.3594C73.4346 49.9593 60.2076 70.9719 58.1704 87.4684C56.1333 103.965 59.5414 120.285 56.1236 124.311C52.7059 128.338 42.1677 128.852 33.7439 123.244C25.3201 117.635 28.4337 130.992 31.6391 136.331C34.7962 141.587 40.9415 152.803 65.5998 153.161C65.5998 153.161 65.0736 160.106 65.3343 164.377C65.595 168.648 64.8081 170.789 71.9189 171.323C79.0296 171.856 89.8188 172.66 90.6057 171.323C91.3925 169.985 90.0795 167.052 86.3962 165.714L86.2224 151.202C86.2224 151.202 99.8211 149.913 105.875 136.733C112.102 123.18 109.823 104.014 109.823 104.014C109.823 104.014 120.357 100.806 121.935 93.5958C121.935 93.5958 129.326 90.6325 129.833 85.3133Z" fill="#FC9E22"/>
				<path d="M86.3962 105.081C93.898 107.217 105.349 105.885 109.843 104.072C110.176 105.287 115.327 124.546 109.297 137.668C103.688 149.879 88.6699 151.079 86.4928 151.191C85.8701 133.661 86.7921 121.108 86.3962 105.081Z" fill="#FFE631"/>
				<path d="M119.744 94.182C119.744 94.182 117.47 99.3984 114.212 99.6482C110.953 99.898 110.997 95.8522 110.997 95.8522C110.997 95.8522 109.21 101.201 105.262 101.074C101.313 100.946 100.787 96.6212 100.787 96.6212C100.787 96.6212 99.3819 100.804 95.52 100.54C91.4746 100.26 91.3974 95.1078 91.3974 95.1078C91.3974 95.1078 88.8099 99.6874 84.9915 98.3111C81.173 96.9347 82.5536 90.2832 82.5536 90.2832C88.3528 93.1525 94.6584 94.8178 101.1 95.1812C107.332 95.5803 113.588 95.2449 119.744 94.182V94.182Z" fill="white"/>
				<path d="M80.8592 87.3903C81.5495 87.0915 82.095 87.4883 82.5391 87.983C83.8625 89.373 85.4441 90.4834 87.1927 91.2499C91.0546 93.1161 97.0551 94.3357 101.323 94.5953C116.524 95.5308 121.921 93.6157 121.921 93.6157C121.828 94.0397 121.702 94.4557 121.544 94.8598C119.319 95.6767 117.004 96.2162 114.651 96.4663C110.523 97.0541 105.633 96.9855 101.477 96.7014C97.4433 96.4846 93.4499 95.7775 89.5823 94.5953C86.2417 93.5177 82.9495 92.0777 80.473 89.4867C80.33 89.3366 80.2244 89.1539 80.1652 88.9539C80.106 88.754 80.0948 88.5425 80.1326 88.3373C80.1704 88.1321 80.2561 87.939 80.3825 87.7742C80.5089 87.6095 80.6724 87.4778 80.8592 87.3903Z" fill="#DB6309"/>
				<path d="M81.0813 83.971C80.8399 86.2681 80.3523 88.4135 78.4745 89.9221C78.0246 90.2672 77.5502 90.5783 77.0552 90.8527C76.7938 90.9548 76.5628 91.1235 76.3842 91.3425C76.3326 91.4348 76.3021 91.5376 76.2948 91.6434C76.2875 91.7492 76.3036 91.8554 76.3421 91.954C76.3805 92.0527 76.4402 92.1414 76.5169 92.2135C76.5935 92.2857 76.6851 92.3395 76.7849 92.3711C77.1383 92.4141 77.4967 92.367 77.8276 92.2339C78.9137 91.9455 79.9092 91.3808 80.7202 90.5931C81.5311 89.8055 82.1306 88.8209 82.4619 87.7326C82.7797 86.6572 82.8393 85.5202 82.6357 84.4167C82.5681 84.0591 82.5005 83.5987 82.153 83.4028C82.048 83.3451 81.9306 83.3144 81.8112 83.3135C81.6918 83.3126 81.574 83.3415 81.4681 83.3976C81.3623 83.4537 81.2717 83.5353 81.2042 83.6353C81.1368 83.7353 81.0945 83.8505 81.0813 83.971V83.971Z" fill="#DB6309"/>
				<path d="M87.1838 81.1573C81.3478 81.1181 76.6474 76.4132 76.6851 70.6488C76.7227 64.8843 81.4843 60.2431 87.3202 60.2824C93.1562 60.3217 97.8566 65.0265 97.8189 70.791C97.7812 76.5554 93.0197 81.1966 87.1838 81.1573Z" fill="white"/>
				<path d="M110.833 79.6271C104.997 79.5878 100.297 74.8829 100.334 69.1185C100.372 63.354 105.134 58.7129 110.969 58.7521C116.805 58.7914 121.506 63.4962 121.468 69.2607C121.43 75.0251 116.669 79.6663 110.833 79.6271Z" fill="white"/>
				<path d="M82.2338 71.1661C82.118 67.5865 84.4932 64.6024 87.5389 64.5009C90.5846 64.3995 93.1475 67.2191 93.2633 70.7988C93.3791 74.3784 91.0039 77.3625 87.9582 77.4639C84.9125 77.5654 82.3496 74.7457 82.2338 71.1661Z" fill="#211E1C"/>
				<path d="M114.965 68.2488C115.689 71.7558 113.854 75.1061 110.871 75.7428C107.888 76.3796 104.885 74.0481 104.161 70.546C103.437 67.0439 105.271 63.6888 108.255 63.052C111.238 62.4153 114.241 64.7468 114.965 68.2488Z" fill="#211E1C"/>
				<path opacity="0.5" d="M62.145 128.023C60.5251 127.438 59.8104 125.259 60.5486 123.157C61.2868 121.054 63.1984 119.825 64.8183 120.41C66.4382 120.996 67.1529 123.175 66.4147 125.277C65.6765 127.379 63.7649 128.609 62.145 128.023Z" fill="#EA6F0A"/>
				<path opacity="0.5" d="M55.6699 128.925C57.0361 128.126 58.6484 128.361 59.2615 129.449C59.8745 130.536 59.2615 132.059 57.8953 132.877C56.5292 133.695 54.9168 133.446 54.3038 132.358C53.6907 131.271 54.3086 129.723 55.6699 128.925Z" fill="#EA6F0A"/>
				<path opacity="0.5" d="M80.4537 156.129C80.4296 154.659 81.342 153.42 82.4909 153.405C83.6398 153.391 84.5811 154.581 84.6053 156.07C84.6294 157.559 83.7122 158.774 82.5681 158.793C81.424 158.813 80.473 157.637 80.4537 156.129Z" fill="#EA6F0A"/>
				<path opacity="0.5" d="M62.7176 117.629C61.7075 117.337 61.1876 116.037 61.5564 114.726C61.9252 113.415 63.043 112.589 64.0531 112.881C65.0632 113.174 65.5831 114.474 65.2143 115.785C64.8455 117.096 63.7277 117.922 62.7176 117.629Z" fill="#EA6F0A"/>
				<path opacity="0.5" d="M78.3683 150.354C78.3007 149.276 78.9235 148.355 79.7538 148.301C80.5841 148.247 81.3178 149.08 81.3854 150.163C81.453 151.245 80.8303 152.161 80 152.215C79.1697 152.269 78.4456 151.436 78.3683 150.354Z" fill="#EA6F0A"/>
				<path d="M78.3683 112.046C79.3772 115.161 82.1819 116.63 86.3963 116.052C91.1561 115.396 95.6938 112.83 100.787 117.12C104.909 120.593 103.2 126.559 99.5605 124.776C94.9938 122.552 92.1553 123.728 87.801 125.844C83.5867 127.891 77.8856 126.647 76.1284 124.33" fill="#FC9E22"/>
				<path d="M77.8083 112.242C78.3586 115.46 81.2164 117.14 84.2625 117.263C87.4727 117.39 90.4657 116.009 93.6324 115.739C96.693 115.48 100.391 116.915 101.776 119.893C102.283 120.99 102.766 123.669 101.115 124.11C100.439 124.291 99.7246 123.801 99.1308 123.552C98.3027 123.198 97.438 122.94 96.553 122.783C93.3187 122.229 90.1471 123.62 87.4051 124.879C84.8421 125.951 81.9995 126.124 79.3289 125.369C78.3337 125.043 77.4013 124.546 76.5725 123.899C76.1911 123.635 75.5635 123.659 75.5491 124.277C75.5491 124.708 76.0608 125.188 76.3311 125.452C78.2379 127.299 81.1826 127.935 83.7363 127.833C85.2372 127.784 86.7137 127.434 88.0809 126.804C89.0464 126.358 89.9733 125.854 90.9484 125.432C92.287 124.79 93.7493 124.455 95.2303 124.453C96.5972 124.56 97.9312 124.933 99.1598 125.55C99.6304 125.8 100.151 125.938 100.681 125.955C101.212 125.972 101.74 125.867 102.225 125.648C103.475 125.001 104.055 123.547 104.156 122.19C104.311 119.496 102.708 117.184 100.632 115.681C98.2682 113.999 95.3597 113.298 92.5028 113.721C89.5774 114.074 86.6617 115.24 83.6832 114.926C82.2332 114.813 80.8778 114.152 79.884 113.075C79.5317 112.673 79.3144 112.188 78.9813 111.782C78.6482 111.375 77.6779 111.488 77.8083 112.242Z" fill="#EA6F0A"/>
				<path d="M110.176 105.302C113.203 106.659 118.296 110.778 118.513 116.298C118.73 121.725 115.529 122.489 112.459 122.621C110.528 122.704 110.35 124.492 108.245 124.757C106.14 125.021 104.209 120.216 106.58 116.92C108.95 113.624 111.59 114.334 111.581 114.069C111.47 111.16 110.137 105.287 110.176 105.302Z" fill="#FC9E22"/>
				<path d="M111.272 122.465C110.694 122.586 110.166 122.881 109.756 123.312C109.548 123.515 109.302 123.673 109.032 123.777C108.763 123.881 108.475 123.93 108.187 123.92C108.153 123.92 108.187 123.92 108.216 123.92C107.395 123.92 106.922 122.886 106.734 122.333C106.36 121.101 106.428 119.775 106.927 118.591C107.302 117.652 107.912 116.828 108.697 116.202C109.482 115.576 110.414 115.168 111.402 115.02C113.048 114.751 112.29 112.723 112.083 111.591C111.758 110.297 111.352 109.026 110.866 107.786C110.552 107.066 110.519 107.634 110.702 109.304C110.765 109.911 110.803 110.666 110.847 111.263C110.944 112.239 110.972 113.222 110.929 114.202C110.929 113.913 110.992 113.296 111.344 113.286C110.238 113.304 109.152 113.589 108.176 114.118C107.2 114.648 106.363 115.406 105.735 116.329C105.106 117.253 104.703 118.315 104.56 119.428C104.418 120.542 104.539 121.673 104.914 122.729C105.493 124.336 106.845 125.786 108.708 125.306C109.848 125.012 110.157 124.356 110.982 123.567C111.207 123.317 111.482 123.118 111.788 122.984C112.237 122.739 112.02 122.401 111.272 122.465Z" fill="#EA6F0A"/>
				<path d="M113.599 87.5843C113.599 88.6912 114.327 89.5876 115.221 89.5876C116.114 89.5876 116.847 88.6912 116.847 87.5843C116.847 86.4773 116.099 85.5957 115.221 85.5957C114.342 85.5957 113.599 86.4773 113.599 87.5843Z" fill="#EA6F0A"/>
				<path d="M107.28 87.5863C107.28 88.6933 108.008 89.5896 108.906 89.5896C109.804 89.5896 110.528 88.6933 110.528 87.5863C110.528 86.4793 109.799 85.583 108.906 85.583C108.013 85.583 107.28 86.4793 107.28 87.5863Z" fill="#EA6F0A"/>
				<path d="M84.2343 24.5L86.7343 32.5L76.7343 27.5L84.2343 24.5Z" fill="#E8067B"/>
				<rect x="11.2343" y="11" width="77" height="17" rx="8.5" fill="#E8067B"/>
				<path d="M23.5036 15.6016H24.6111V20.0884C24.6111 20.7007 24.4192 21.187 24.0354 21.5474C23.6545 21.9077 23.1506 22.0879 22.5237 22.0879C21.8557 22.0879 21.3401 21.9194 20.9768 21.5825C20.6135 21.2456 20.4319 20.7769 20.4319 20.1763H21.5393C21.5393 20.5161 21.6228 20.7725 21.7898 20.9453C21.9597 21.1152 22.2043 21.2002 22.5237 21.2002C22.8225 21.2002 23.0598 21.1021 23.2356 20.9058C23.4143 20.7065 23.5036 20.4326 23.5036 20.084V15.6016ZM25.5822 19.5786C25.5822 19.1128 25.6745 18.6938 25.8591 18.3218C26.0437 17.9468 26.3029 17.6597 26.6369 17.4604C26.9709 17.2583 27.3547 17.1572 27.7883 17.1572C28.4299 17.1572 28.9499 17.3638 29.3484 17.7769C29.7497 18.1899 29.9665 18.7378 29.9987 19.4204L30.0031 19.6709C30.0031 20.1396 29.9123 20.5586 29.7307 20.9277C29.552 21.2969 29.2942 21.5825 28.9572 21.7847C28.6233 21.9868 28.2365 22.0879 27.7971 22.0879C27.1262 22.0879 26.5886 21.8652 26.1843 21.4199C25.7829 20.9717 25.5822 20.3755 25.5822 19.6313V19.5786ZM26.6501 19.6709C26.6501 20.1602 26.7512 20.5439 26.9533 20.8223C27.1555 21.0977 27.4367 21.2354 27.7971 21.2354C28.1574 21.2354 28.4372 21.0947 28.6364 20.8135C28.8386 20.5322 28.9397 20.1206 28.9397 19.5786C28.9397 19.0981 28.8357 18.7173 28.6277 18.436C28.4226 18.1548 28.1428 18.0142 27.7883 18.0142C27.4397 18.0142 27.1628 18.1533 26.9577 18.4316C26.7527 18.707 26.6501 19.1201 26.6501 19.6709ZM32.0422 22H30.9743V17.2451H32.0422V22ZM30.9084 16.0103C30.9084 15.8462 30.9597 15.71 31.0622 15.6016C31.1677 15.4932 31.3171 15.439 31.5105 15.439C31.7038 15.439 31.8532 15.4932 31.9587 15.6016C32.0642 15.71 32.1169 15.8462 32.1169 16.0103C32.1169 16.1714 32.0642 16.3062 31.9587 16.4146C31.8532 16.52 31.7038 16.5728 31.5105 16.5728C31.3171 16.5728 31.1677 16.52 31.0622 16.4146C30.9597 16.3062 30.9084 16.1714 30.9084 16.0103ZM34.1999 17.2451L34.2307 17.7944C34.5822 17.3696 35.0437 17.1572 35.615 17.1572C36.6052 17.1572 37.1091 17.7241 37.1267 18.8579V22H36.0588V18.9194C36.0588 18.6177 35.9929 18.395 35.8611 18.2515C35.7321 18.105 35.5197 18.0317 35.2238 18.0317C34.7932 18.0317 34.4724 18.2266 34.2614 18.6162V22H33.1936V17.2451H34.1999ZM41.7981 16.0894V17.2451H42.6374V18.0361H41.7981V20.6904C41.7981 20.8721 41.8332 21.0039 41.9035 21.0859C41.9768 21.165 42.1057 21.2046 42.2903 21.2046C42.4133 21.2046 42.5378 21.1899 42.6638 21.1606V21.9868C42.4206 22.0542 42.1862 22.0879 41.9607 22.0879C41.1404 22.0879 40.7302 21.6353 40.7302 20.73V18.0361H39.948V17.2451H40.7302V16.0894H41.7981ZM44.5095 17.7637C44.8581 17.3594 45.299 17.1572 45.8322 17.1572C46.8459 17.1572 47.3601 17.7358 47.3747 18.8931V22H46.3069V18.9326C46.3069 18.6045 46.2351 18.373 46.0915 18.2383C45.9509 18.1006 45.7429 18.0317 45.4675 18.0317C45.0398 18.0317 44.7204 18.2222 44.5095 18.603V22H43.4416V15.25H44.5095V17.7637ZM50.552 22.0879C49.8752 22.0879 49.3259 21.8755 48.904 21.4507C48.4851 21.0229 48.2756 20.4546 48.2756 19.7456V19.6138C48.2756 19.1392 48.3664 18.7158 48.5481 18.3438C48.7326 17.9688 48.9904 17.6772 49.3215 17.4692C49.6526 17.2612 50.0217 17.1572 50.4289 17.1572C51.0764 17.1572 51.5759 17.3638 51.9275 17.7769C52.282 18.1899 52.4592 18.7744 52.4592 19.5303V19.9609H49.3523C49.3845 20.3535 49.5149 20.6641 49.7434 20.8926C49.9748 21.1211 50.2649 21.2354 50.6135 21.2354C51.1028 21.2354 51.5012 21.0376 51.8088 20.6421L52.3845 21.1914C52.1941 21.4756 51.9392 21.6968 51.6198 21.855C51.3034 22.0103 50.9475 22.0879 50.552 22.0879ZM50.4245 18.0142C50.1316 18.0142 49.8943 18.1167 49.7126 18.3218C49.5339 18.5269 49.4196 18.8125 49.3698 19.1787H51.4045V19.0996C51.3811 18.7422 51.2859 18.4727 51.1189 18.291C50.9519 18.1064 50.7204 18.0142 50.4245 18.0142ZM57.4865 21.2354C57.7531 21.2354 57.9743 21.1577 58.1501 21.0024C58.3259 20.8472 58.4196 20.6553 58.4314 20.4268H59.4377C59.426 20.7227 59.3337 20.9995 59.1609 21.2573C58.988 21.5122 58.7536 21.7144 58.4577 21.8638C58.1618 22.0132 57.8425 22.0879 57.4997 22.0879C56.8347 22.0879 56.3073 21.8726 55.9177 21.4419C55.528 21.0112 55.3332 20.4165 55.3332 19.6577V19.5479C55.3332 18.8242 55.5266 18.2456 55.9133 17.812C56.3 17.3755 56.8274 17.1572 57.4953 17.1572C58.0608 17.1572 58.5207 17.3228 58.8752 17.6538C59.2326 17.9819 59.4201 18.4141 59.4377 18.9502H58.4314C58.4196 18.6777 58.3259 18.4536 58.1501 18.2778C57.9773 18.1021 57.7561 18.0142 57.4865 18.0142C57.1408 18.0142 56.8742 18.1401 56.6867 18.3921C56.4992 18.6411 56.404 19.0205 56.4011 19.5303V19.7017C56.4011 20.2173 56.4934 20.6025 56.6779 20.8574C56.8654 21.1094 57.135 21.2354 57.4865 21.2354ZM61.3801 22H60.3122V15.25H61.3801V22ZM65.3879 22C65.341 21.9092 65.3 21.7612 65.2649 21.5562C64.925 21.9106 64.509 22.0879 64.0168 22.0879C63.5393 22.0879 63.1496 21.9517 62.8479 21.6792C62.5461 21.4067 62.3952 21.0698 62.3952 20.6685C62.3952 20.1616 62.5827 19.7734 62.9577 19.5039C63.3357 19.2314 63.8747 19.0952 64.5749 19.0952H65.2297V18.7832C65.2297 18.5371 65.1609 18.3408 65.0232 18.1943C64.8855 18.0449 64.676 17.9702 64.3947 17.9702C64.1516 17.9702 63.9524 18.0317 63.7971 18.1548C63.6418 18.2749 63.5642 18.4287 63.5642 18.6162H62.4963C62.4963 18.3555 62.5827 18.1123 62.7556 17.8867C62.9284 17.6582 63.1628 17.4795 63.4587 17.3506C63.7575 17.2217 64.0901 17.1572 64.4563 17.1572C65.0129 17.1572 65.4568 17.2979 65.7878 17.5791C66.1189 17.8574 66.2888 18.25 66.2976 18.7568V20.9014C66.2976 21.3291 66.3576 21.6704 66.4778 21.9253V22H65.3879ZM64.2146 21.231C64.4255 21.231 64.6233 21.1797 64.8078 21.0771C64.9953 20.9746 65.136 20.8369 65.2297 20.6641V19.7676H64.654C64.2585 19.7676 63.9612 19.8364 63.7619 19.9741C63.5627 20.1118 63.4631 20.3066 63.4631 20.5586C63.4631 20.7637 63.5305 20.9277 63.6653 21.0508C63.8029 21.1709 63.9861 21.231 64.2146 21.231ZM70.0813 20.708C70.0813 20.5176 70.0022 20.3726 69.844 20.2729C69.6887 20.1733 69.4294 20.0854 69.0661 20.0093C68.7029 19.9331 68.3996 19.8364 68.1565 19.7192C67.6233 19.4614 67.3567 19.0879 67.3567 18.5986C67.3567 18.1885 67.5295 17.8457 67.8752 17.5703C68.2209 17.2949 68.6604 17.1572 69.1936 17.1572C69.7619 17.1572 70.2204 17.2979 70.5691 17.5791C70.9206 17.8604 71.0964 18.2251 71.0964 18.6733H70.0285C70.0285 18.4683 69.9524 18.2983 69.8 18.1636C69.6477 18.0259 69.4455 17.957 69.1936 17.957C68.9592 17.957 68.7673 18.0112 68.6179 18.1196C68.4714 18.228 68.3982 18.373 68.3982 18.5547C68.3982 18.7188 68.467 18.8462 68.6047 18.937C68.7424 19.0278 69.0207 19.1201 69.4397 19.2139C69.8586 19.3047 70.1867 19.4146 70.424 19.5435C70.6643 19.6694 70.8415 19.8218 70.9558 20.0005C71.073 20.1792 71.1316 20.396 71.1316 20.6509C71.1316 21.0786 70.9543 21.4258 70.5998 21.6924C70.2453 21.9561 69.781 22.0879 69.2068 22.0879C68.8171 22.0879 68.4699 22.0176 68.1653 21.877C67.8606 21.7363 67.6233 21.543 67.4533 21.2969C67.2834 21.0508 67.1985 20.7856 67.1985 20.5015H68.2356C68.2502 20.7534 68.3454 20.9482 68.5212 21.0859C68.697 21.2207 68.9299 21.2881 69.2199 21.2881C69.5012 21.2881 69.7151 21.2354 69.8615 21.1299C70.008 21.0215 70.0813 20.8809 70.0813 20.708ZM74.7307 20.708C74.7307 20.5176 74.6516 20.3726 74.4934 20.2729C74.3381 20.1733 74.0788 20.0854 73.7155 20.0093C73.3523 19.9331 73.049 19.8364 72.8059 19.7192C72.2727 19.4614 72.0061 19.0879 72.0061 18.5986C72.0061 18.1885 72.1789 17.8457 72.5246 17.5703C72.8703 17.2949 73.3098 17.1572 73.843 17.1572C74.4113 17.1572 74.8698 17.2979 75.2185 17.5791C75.57 17.8604 75.7458 18.2251 75.7458 18.6733H74.6779C74.6779 18.4683 74.6018 18.2983 74.4494 18.1636C74.2971 18.0259 74.0949 17.957 73.843 17.957C73.6086 17.957 73.4167 18.0112 73.2673 18.1196C73.1208 18.228 73.0476 18.373 73.0476 18.5547C73.0476 18.7188 73.1164 18.8462 73.2541 18.937C73.3918 19.0278 73.6701 19.1201 74.0891 19.2139C74.508 19.3047 74.8362 19.4146 75.0735 19.5435C75.3137 19.6694 75.4909 19.8218 75.6052 20.0005C75.7224 20.1792 75.781 20.396 75.781 20.6509C75.781 21.0786 75.6037 21.4258 75.2492 21.6924C74.8947 21.9561 74.4304 22.0879 73.8562 22.0879C73.4665 22.0879 73.1194 22.0176 72.8147 21.877C72.51 21.7363 72.2727 21.543 72.1028 21.2969C71.9328 21.0508 71.8479 20.7856 71.8479 20.5015H72.885C72.8996 20.7534 72.9948 20.9482 73.1706 21.0859C73.3464 21.2207 73.5793 21.2881 73.8694 21.2881C74.1506 21.2881 74.3645 21.2354 74.511 21.1299C74.6574 21.0215 74.7307 20.8809 74.7307 20.708ZM77.8464 20.1147H76.9279L76.8269 15.6016H77.9519L77.8464 20.1147ZM76.7961 21.4946C76.7961 21.3276 76.8503 21.1899 76.9587 21.0815C77.0671 20.9702 77.2151 20.9146 77.4026 20.9146C77.5901 20.9146 77.738 20.9702 77.8464 21.0815C77.9548 21.1899 78.009 21.3276 78.009 21.4946C78.009 21.6558 77.9563 21.7905 77.8508 21.8989C77.7453 22.0073 77.5959 22.0615 77.4026 22.0615C77.2092 22.0615 77.0598 22.0073 76.9543 21.8989C76.8488 21.7905 76.7961 21.6558 76.7961 21.4946Z" fill="white"/>
				<rect x="2.73425" y="2.5" width="126" height="191" stroke="#A1623F" stroke-width="5"/>
				</svg>
		)
	}
}

export default Door;