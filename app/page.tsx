"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap } from "lucide-react";

import Header from "@/components/Header/Header";
export default function Component() {
	const [count, setCount] = useState(0);
	const [showHeart, setShowHeart] = useState(false);
	const [ranking, setRanking] = useState([
		{ name: "ETH Maxi", count: 1559 },
		{ name: "DeFi Degen", count: 1337 },
		{ name: "NFT Collector", count: 721 },
	]);

	const buttonAnimation = useSpring({
		scale: showHeart ? 1.2 : 1,
		from: { scale: 1 },
	});

	const heartAnimation = useSpring({
		opacity: showHeart ? 1 : 0,
		transform: showHeart
			? "scale(1) translateY(0)"
			: "scale(0) translateY(50px)",
		from: { opacity: 0, transform: "scale(0) translateY(50px)" },
	});

	const imageAnimation = useSpring({
		transform: showHeart ? "scale(1.1)" : "scale(1)",
		from: { transform: "scale(1)" },
	});

	useEffect(() => {
		if (showHeart) {
			const timer = setTimeout(() => setShowHeart(false), 1000);
			return () => clearTimeout(timer);
		}
	}, [showHeart]);

	const handleClick = () => {
		setCount((prevCount) => prevCount + 1);
		setShowHeart(true);

		setRanking((prevRanking) => {
			const newRanking = [...prevRanking, { name: "You", count: count + 1 }];
			return newRanking.sort((a, b) => b.count - a.count).slice(0, 3);
		});
	};

	return (
		<>
			<Header name="GM Vitalik Powered by Digital Garbage" />
			<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 p-4 text-white">
				<Card className="w-full max-w-md bg-gray-800 border-gray-700 overflow-hidden">
					<CardContent className="flex flex-col items-center space-y-8 p-6">
						<h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							Vitalik Greeter
						</h1>

						<div className="relative w-48 h-48">
							<animated.div style={imageAnimation} className="absolute inset-0">
								<Image
									src="/vitalik.jpg"
									alt="Vitalik Buterin"
									fill
									className="rounded-full border-4 border-purple-500 object-cover"
								/>
							</animated.div>
							<animated.div
								style={heartAnimation}
								className="absolute inset-0 flex items-center justify-center"
							>
								<Heart className="text-red-500" size={64} fill="currentColor" />
							</animated.div>
						</div>
						<animated.div style={buttonAnimation}>
							<Button
								onClick={handleClick}
								className="text-xl py-6 px-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								<Zap className="mr-2" />
								Hi Vitalik!
								<span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm">
									{count}
								</span>
							</Button>
						</animated.div>
						<div className="w-full mt-8">
							<h3 className="text-2xl font-bold mb-4 text-center text-white ">
								Top Greeters
							</h3>
							<ul className="space-y-3">
								{ranking.map((user, index) => (
									<li
										key={index}
										className="flex justify-between items-center bg-gray-700 p-3 rounded-lg shadow-md"
									>
										<span className="text-lg font-semibold text-white">
											{user.name}
										</span>
										<span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
											{user.count} GM
										</span>
									</li>
								))}
							</ul>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
