import { useEffect, useRef } from "react";

export default function useAnimateOnScroll(delayIncrement = 0.2) {
	const elementsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
					}
				});
			},
			{
				threshold: 0.1, // Adjust this value as needed
			}
		);

		const currentElements = elementsRef.current;
		currentElements.forEach((element, index) => {
			if (element) {
				element.style.transitionDelay = `${index * delayIncrement}s`; // Adjust the delay as needed
				observer.observe(element);
			}
		});

		return () => {
			currentElements.forEach((element) => {
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [delayIncrement]);

	return elementsRef;
}
