import MenuItem from "./components/MenuItem";

const Header = () => {
	const menuItems = [
		{
			text: "Services",
			link: "#",
		},
		{
			text: "Work",
			link: "#",
		},
		{
			text: "Blog",
			link: "#",
		},
		{
			text: "Contact",
			link: "#",
		},
	];
	return (
		<header className="container-fluid">
			<div className="row">
				<div className="col-3">
					<h1>Logo</h1>
				</div>
				<nav className="col d-flex align-items-center">
					<ul className="d-flex list-unstyled align-items-center gap-3">
						{menuItems.map((menuItem) => (
							<MenuItem text={menuItem.text} link={menuItem.link} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
