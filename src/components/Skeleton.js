function Skeleton() {
    return (
        <div className="skeleton">
          <div className="skeleton__img"></div>
          <div className="skeleton__text-box">
            <div className="skeleton__text-box__lines">
              <div className="skeleton__text-box__line skeleton__text-box__line--1"></div>
              <div className="skeleton__text-box__line skeleton__text-box__line--2"></div>
              <div className="skeleton__text-box__line skeleton__text-box__line--3"></div>
            </div>
            <div className="skeleton__text-box__buttons">
              <div className="skeleton__text-box__buttons__button skeleton__text-box__buttons__button--1"></div>
              <div className="skeleton__text-box__buttons__button skeleton__text-box__buttons__button--2"></div>
              <div className="skeleton__text-box__buttons__button skeleton__text-box__buttons__button--3"></div>
            </div>
          </div>
        </div> 
    )
}

export default Skeleton