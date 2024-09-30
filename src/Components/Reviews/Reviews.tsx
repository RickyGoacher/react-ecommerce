import { CSSProperties } from 'react';
import './style.css';

interface ReviewsInterface {
    rating: number;
    styles: CSSProperties;
}

export const Reviews = (props: ReviewsInterface) => {

    const StarList = [];

    for(let i = 0; i < Math.floor(props.rating); i++) {
        console.log(props.rating, 'ratings')
        StarList.push(<span key={i} className="star" style={props.styles}></span>)
    }

    if(props.rating % 1) {
        if(props.rating % 1) StarList.push(<span className="star-part" style={props.styles}></span>);
    }

    const GenerateStars = StarList.map(item => item);

    return (
        <div className='reviews'>
            {GenerateStars}
        </div>
    );
}