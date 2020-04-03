import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../scss/Categories_mob.scss";

class Categories__mob extends Component {
  handleClick(e) {
    this.props.slide(true);
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="categories__container">
        <div className="center">
          <div className="categories__wrapper">
            {categories.map((item, i) => (
              <Link
                to={item.link}
                onClick={e => this.handleClick(e)}
                className="card"
                key={i}
              >
                <img src={item.src} alt={item.headline} />
                <div className="card__body">
                  <div className="card__title">{item.headline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass
});

const mapDispatch = ({ shutter: { slide } }) => ({
  slide
});

export default connect(mapState, mapDispatch)(Categories__mob);
