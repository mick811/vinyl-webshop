import { createFileRoute } from "@tanstack/react-router";
import { signIn, useSession } from "@/lib/auth";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data } = useSession();

	return (
		<div className="bg-red-500 p-4 text-white">
			<button
				type="button"
				onClick={() =>
					signIn.social({
						provider: "github",
					})
				}
			>
				Sign In
			</button>

			{data?.user && (
				<p className="font-bold">{data.user.name}</p>
			)}
		</div>
	);
}
