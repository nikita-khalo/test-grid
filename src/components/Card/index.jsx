import * as React from "react";
import LazyLoad from 'react-lazyload';
import "./index.css"
import Hearth from "../../icons/heath";
import Comment from "../../icons/comment";
import PropTypes from 'prop-types';

const Card = ({item}) => {

	return (
		<div className="card">
			<LazyLoad height={250}>
				<div>
					{item.image && <img
						className="card_image"
						src={item.image}
						alt={item.text}
					/>}
				</div>
			</LazyLoad>
			<div className="card_info">
				<p className="card_text">
					{item.text}
				</p>
				<div
					className="card_additional"
				>
					<div className="card_owner">
						<img src={item.ownerImage} alt={item.ownerName} className="avatar"/>
						<span>{item.ownerName}</span>
					</div>
					<div className="card_icons_container">
						<div className="card_icons_numbers">
							<Hearth className="favorite_icon"/>
							<span>{item.likes}</span>
						</div>
						<div className="card_icons_numbers">
							<Comment className="comment_icon"/>
							<span>{item.comments}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	item: PropTypes.shape({
		comments: PropTypes.number,
		likes: PropTypes.number,
		ownerName: PropTypes.string,
		ownerImage: PropTypes.string,
		image: PropTypes.string,
		text: PropTypes.string
	})
}

export default Card

