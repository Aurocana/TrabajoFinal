import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const EnhancedSwipeableViews = bindKeyboard(autoPlay(virtualize(SwipeableViews)));

const [movies, useMovies] = useState([]);

function moviesScroll(params) {
    const { index, key } = params;
    useMovies(movies.slice(index * 20, (index + 1) * 20));

    switch (mod(index, 3)) {
        case 0:
            style = styles.slide1;
            break;

        case 1:
            style = styles.slide2;
            break;

        case 2:
            style = styles.slide3;
            break;

        default:
            break;
    }

    return (
        <div style={Object.assign({}, styles.slide, style)} key={key}>
            {`slide n°${index + 1}`}
        </div>
    );
}

function DemoHocs() {
    return <EnhancedSwipeableViews slideCount={10} slideRenderer={slideRenderer} />;
}

export default DemoHocs;