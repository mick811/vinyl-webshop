import { Link } from "@tanstack/react-router";
import { useId } from "react";
import { signIn, useSession } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
	const { data: session } = useSession();

	return (
		<header className="relative flex items-center justify-end p-6 z-10">
			<div className="flex items-center">
				<div
					id={useId()}
					className="flex items-center group"
				>
					{session ? (
						// link to profile page
						<Link to="/">
							<Avatar>
								<AvatarImage
									src={session.user.image || ""}
									alt={session.user.name || ""}
								/>
								<AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
							</Avatar>
						</Link>
					) : (
						<button
							type="button"
							className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
							onClick={() => signIn.social({ provider: "github" })}
						>
							Login
						</button>
					)}
				</div>
			</div>
		</header>
	);
}
