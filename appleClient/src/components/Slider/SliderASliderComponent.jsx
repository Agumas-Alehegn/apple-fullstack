function SliderASliderComponent({
  slide,
  slideLink,
  imgPath,
  slideBtnClass,
  btnContent,
  genre_title,
  genre,
  genreContent,
  titleContent,
}) {
  return (
    <>
      <div className={slide}>
        <a href={slideLink}>
          <img className="image-fluid" src={imgPath} />
          <div className="container-fluid">
            <div className="bottom-info row w-100">
              <button type="button" className={slideBtnClass}>
                {btnContent}
              </button>
              <p className={genre_title}>
                <span className={genre}>{genreContent}</span>
                {titleContent}
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
export default SliderASliderComponent;
