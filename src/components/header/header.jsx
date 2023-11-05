import React, {useState} from "react";
import "./header.css";
import {
	AccountCircleRounded,
	Menu,
	Notifications,
	Search,
} from "@mui/icons-material";
// import { Menu } from "@mui/material";
function Header() {
	const [profile, setProfile] = useState(false);
	const [menu, setShowMenu] = useState(true);
	return (
		<div className="header-general-container">
			<div className="header-container">
				<span className="header-logo">Thrift Union</span>
				<ul className="header-list first">
					<li>Overview</li>
					<li>Transactions</li>
					<li>Deposits</li>
					<li>Payments</li>
				</ul>
				<div className="header-search">
					<span className="search-container">
						<span className="search-icon">
							<Search />
						</span>
						<input
							className="search-input"
							type="search"
							placeholder="Search"
						/>
					</span>
					<span className="menu">
						<Menu onClick={() => setShowMenu(!menu)} />
						{menu && (
							<ul className="header-list first">
								<li>Overview</li>
								<li>Transactions</li>
								<li>Deposits</li>
								<li>Payments</li>
							</ul>
						)}
					</span>
					<ul className="header-list">
						<li>
							<Notifications />
						</li>

						<li
							className="account-circle-icon"
							onClick={() => setProfile(!profile)}
						>
							<AccountCircleRounded />

							{profile && (
								<ul className="profile-data">
									<li>dsfgdg</li>
									<li>agadsg</li>
									<li>adgsdas</li>
									<li>adg</li>
									<li>Log out</li>
								</ul>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="welcome">
				<h1>
					Hi Ayo, <span className="welcome-message">Welcome!</span>
				</h1>
				<p>SFDGTRRE54345456</p>
			</div>
		</div>
	);
}

export default Header;
