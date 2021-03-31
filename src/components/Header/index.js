import React, {useCallback, useEffect, useRef, useState} from "react";
import ArrowBack from "../../icons/arrow-back";
import Filter from "../../icons/filter";
import AddMember from "../../icons/add-member";
import Share from "../../icons/share";
import Options from "../../icons/options";
import "./index.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = ({filterItem, filters}) => {

	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("none");

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelectFilter = (value) => {
		filterItem(value);
		setSelectedCategory(value);
		handleClose();
	}

	return (
		<div className="header">
			<ArrowBack />
			<div className="right-panel">
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					<Filter />
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem
						onClick={() => handleSelectFilter("none")}
						className={selectedCategory === "none" ? "active-item" : ""}
					>
						none
					</MenuItem>
					{
						filters.map((item) => {
							return (
								<MenuItem
									key={item}
									onClick={() => handleSelectFilter(item)}
									className={selectedCategory === item ? "active-item" : ""}
								>
									{item}
								</MenuItem>
							)
						})
					}
				</Menu>
				<div>
					<img className="avatar" src="http://www.kartina-optom.com.ua/images/stories/virtuemart/product/%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-50%D1%85502.jpg" alt=""/>
					<img className="avatar" src="http://www.kartina-optom.com.ua/images/stories/virtuemart/product/%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-50%D1%85502.jpg" alt=""/>
					<img className="avatar" src="http://www.kartina-optom.com.ua/images/stories/virtuemart/product/%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-50%D1%85502.jpg" alt=""/>
					<AddMember />
				</div>
				<Share />
				<Options />
			</div>
		</div>
	)
};

export default Header;