function Door({subject, time="11:00"}) {
	return (
		<svg width="auto" height="100%" viewBox="0 0 150 195" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer">
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
}

export default Door;