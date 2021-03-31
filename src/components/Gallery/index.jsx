import * as React from 'react';
import Masonry from 'react-masonry-component';
import Card from "../Card";
import Container from "../Container";
import "./index.css"
import Text from "../Text";

const Gallery = ({items}) => {

	return (
		<Container>
			<Text/>
			{
				items.length > 0 ?
					<Masonry
						disableImagesLoaded={false}
						updateOnEachImageLoad={true}
						style={{
							height: 500,
						}}
					>
						{
							items.map((item) => {
								return (
									<Card item={item} key={"item" + item.id}/>
								)
							})
						}
					</Masonry> :
					<div
						className="no_items"
					>
						<p>No items</p>
					</div>
			}
		</Container>
	);
}

export default Gallery;