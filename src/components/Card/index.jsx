import * as React from "react";
import LazyLoad from 'react-lazyload';
import "./index.css"
import Hearth from "../../icons/heath";
import Comment from "../../icons/comment";

const Card = ({item}) => {

	return (
		<div className="card">
			<LazyLoad height={300}>
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
						{/*<Avatar*/}
						{/*    src={item.ownerImage}*/}
						{/*    style={{*/}
						{/*        width: 18,*/}
						{/*        height: 18,*/}
						{/*        marginRight: 7*/}
						{/*    }}*/}
						{/*/>*/}
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

export default Card