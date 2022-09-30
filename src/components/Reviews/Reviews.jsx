import ReactReadMoreReadLess from "react-read-more-read-less";

const Reviews = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews &&
        movieReviews.map(({ author, content }) => {
          return (
            <li>
              <p>Autor:{author}</p>
                  <p>
                      <ReactReadMoreReadLess
                  charLimit={1000}
                  readMoreText={'Read more ▼'}
                  readLessText={'Read less ▲'}
                >
                  {content}
                </ReactReadMoreReadLess>
                  </p>

            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
