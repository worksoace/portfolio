import { useEffect, useRef } from "react";

export default function MouseTrail() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number }>>([]);
	const mouseRef = useRef({ x: 0, y: 0 });
	const animationRef = useRef<number>(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
			// Add new particle
			particlesRef.current.push({
				x: e.clientX,
				y: e.clientY,
				vx: (Math.random() - 0.5) * 1.3,
				vy: (Math.random() - 0.5) * 1.3,
				life: 1,
				maxLife: 1,
			});
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			particlesRef.current = particlesRef.current.filter(particle => {
				particle.x += particle.vx;
				particle.y += particle.vy;
				particle.life -= 0.06;
				const alpha = particle.life;
				ctx.fillStyle = `rgba(92, 58, 40, ${alpha * 0.4})`;
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
				ctx.fill();
				
				return particle.life > 0;
			});
			
			animationRef.current = requestAnimationFrame(animate);
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		window.addEventListener("mousemove", handleMouseMove);
		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 pointer-events-none z-10"
			style={{ background: "transparent" }}
		/>
	);
}