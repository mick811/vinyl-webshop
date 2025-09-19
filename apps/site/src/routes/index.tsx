import { GrainGradient } from "@paper-design/shaders-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="relative min-h-screen flex items-center justify-center overflow-hidden select-none">
			<div className="absolute inset-0 -z-10">
				<GrainGradient
					className="w-full h-full"
					softness={0.89}
					intensity={0.5}
					noise={0}
					shape="corners"
					offsetX={0}
					offsetY={0}
					scale={0.76}
					rotation={0}
					speed={1.8}
					colors={["#C0E916", "#8CDD0C", "#59D102"]}
				/>
			</div>
			<div className="absolute inset-0 -z-10 bg-foreground/20" />

			<section className="px-6">
				<h1 className="text-secondary text-center text-balance font-normal tracking-tight text-8xl md:text-9xl font-serif leading-none">
					<span className="italic">passion</span> for vinyl
				</h1>

				<p className="text-secondary text-center text-balance font-normal tracking-tight text-xl md:text-2xl font-lora leading-none mt-4 max-w-xl mx-auto">
					Vinylplader er mere end bare musik. De er et stykke historie, et
					stykke kunst, et stykke kultur.
				</p>

				<div className="flex justify-center mt-8 items-center">
					<Link to="/">
						<Button
							variant="default"
							className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-secondary to-secondary/90 text-foreground"
							size="lg"
						>
							Udforsk vinyler
							<ArrowRightIcon className="w-4 h-4" />
						</Button>
					</Link>
				</div>
			</section>
		</main>
	);
}
