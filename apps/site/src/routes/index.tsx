import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="bg-red-500 p-4 text-white">Hello "/"!</div>;
}
