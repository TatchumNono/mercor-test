import "./App.css";
import React, { useState, useEffect } from "react";

const Section = () => {
	const [scrollTop, setScrollTop] = useState(0);
	const [scrolling, setScrolling] = useState(false);
	const [index, setIndex] = useState(0);
	const [words, setWords] = useState({
		0: false,
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
		10: false,
		11: false,
		12: false,
		13: false,
	});

	useEffect(() => {
		const handleScroll = (e) => {
			setScrollTop(window.scrollY);
			console.log(scrollTop);

			/*
			if (scrollTop > 0) {
				setScrolling(true);
				if (scrolling) {
					setWords((prev) => ({ ...prev, [index]: true }));
					setScrollTop(0);
					setIndex((prev) => prev + 1);
				}
			}
			*/

			if (window.scrollY > scrollTop) {
				setScrolling(true);
				if (scrolling) {
					setWords((prev) => ({ ...prev, [index]: true }));
					setIndex((prev) => prev + 1);
				}
			} else if (scrollTop > window.scrollY) {
				setScrolling(true);
				if (scrolling) {
					setWords((prev) => ({ ...prev, [index]: false }));
					setIndex((prev) => prev - 1);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollTop, index, scrolling]);

	return (
		<section className="text-reveal-section">
			<div className="container">
				<div className="text-reveal-wrapper">
					<p className="title-lead leading-none text-pp font-bold text-6xl">
						<span className={words[0] ? "text-white" : "text-pp"}>In</span>{" "}
						<span className={words[1] ? "text-white" : "text-pp"}>Chronicle</span>{" "}
						<span className={words[2] ? "text-white" : "text-pp"}>everything</span>{" "}
						<span className={words[3] ? "text-white" : "text-pp"}>is</span>{" "}
						<span className={words[4] ? "text-white" : "text-pp"}>made</span>{" "}
						<span className={words[5] ? "text-white" : "text-pp"}>with</span>{" "}
						<span className={words[6] ? "text-white" : "text-pp"}>Blocks</span>{" "}
						<span className={words[7] ? "text-white" : "text-pp"}>that</span>{" "}
						<span className={words[8] ? "text-white" : "text-pp"}>come</span>{" "}
						<span className={words[9] ? "text-white" : "text-pp"}>with</span>{" "}
						<span className={words[10] ? "text-white" : "text-pp"}>pixel</span>{" "}
						<span className={words[11] ? "text-white" : "text-pp"}>perfect</span>{" "}
						<span className={words[12] ? "text-white" : "text-pp"}>design,</span>{" "}
						<span className={words[13] ? "text-white" : "text-pp"}>interactivity</span>{" "}
						<span className={words[14] ? "text-white" : "text-pp"}>and</span>{" "}
						<span className={words[15] ? "text-white" : "text-pp"}>motion</span>{" "}
						<span className={words[16] ? "text-white" : "text-pp"}>out</span>{" "}
						<span className={words[17] ? "text-white" : "text-pp"}>of</span>{" "}
						<span className={words[18] ? "text-white" : "text-pp"}>the</span>{" "}
						<span className={words[19] ? "text-white" : "text-pp"}>box.</span>{" "}
						<span className={words[20] ? "text-white" : "text-pp"}>Instead</span>{" "}
						<span className={words[21] ? "text-white" : "text-pp"}>of</span>{" "}
						<span className={words[22] ? "text-white" : "text-pp"}>designing</span>{" "}
						<span className={words[23] ? "text-white" : "text-pp"}>from</span>{" "}
						<span className={words[24] ? "text-white" : "text-pp"}>scratch,</span>{" "}
						<span className={words[25] ? "text-white" : "text-pp"}>simply</span>{" "}
						<span className={words[26] ? "text-white" : "text-pp"}>choose</span>{" "}
						<span className={words[27] ? "text-white" : "text-pp"}>the</span>{" "}
						<span className={words[28] ? "text-white" : "text-pp"}>right</span>{" "}
						<span className={words[29] ? "text-white" : "text-pp"}>one</span>{" "}
						<span className={words[30] ? "text-white" : "text-pp"}>from</span>{" "}
						<span className={words[31] ? "text-white" : "text-pp"}>our</span>{" "}
						<span className={words[32] ? "text-white" : "text-pp"}>library</span>{" "}
						<span className={words[33] ? "text-white" : "text-pp"}>of</span>{" "}
						<span className={words[34] ? "text-white" : "text-pp"}>blocks</span>{" "}
						<span className={words[35] ? "text-white" : "text-pp"}>and</span>{" "}
						<span className={words[36] ? "text-white" : "text-pp"}>see</span>{" "}
						<span className={words[37] ? "text-white" : "text-pp"}>the</span>{" "}
						<span className={words[38] ? "text-white" : "text-pp"}>magic</span>{" "}
						<span className={words[39] ? "text-white" : "text-pp"}>unfold.</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Section;
