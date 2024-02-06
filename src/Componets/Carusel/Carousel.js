// Carousel.js
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Carousel.css';

class Item extends React.Component {
    render() {
        const { src, alt } = this.props.item;
        const className = `item level${this.props.level}`;
        return (
            <CSSTransition key={src} classNames="item" timeout={{ enter: 500, exit: 300 }}>
                <div className={className}>
                    <img src={src} alt={alt} />
                </div>
            </CSSTransition>
        );
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        };
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.autoMove = this.autoMove.bind(this);
    }

    componentDidMount() {
        this.autoMoveInterval = setInterval(this.autoMove, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.autoMoveInterval);
    }

    autoMove() {
        this.moveRight(); 
    }

    moveLeft() {
        let newActive = this.state.active - 1;
        if (newActive < 0) {
            newActive = this.state.items.length - 1;
        }
        this.setState({
            active: newActive,
            direction: 'left'
        });
    }

    moveRight() {
        let newActive = (this.state.active + 1) % this.state.items.length;
        this.setState({
            active: newActive,
            direction: 'right'
        });
    }

    generateItems() {
        const items = [];
        const itemCount = this.state.items.length;

        for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
            let index = ((i % itemCount) + itemCount) % itemCount; // Correctly wraps the index
            let item = this.state.items[index];

            if (item) {
                items.push(<Item key={item.id} item={item} level={this.state.active - i} />);
            }
        }
        return items;
    }

    render() {
        return (
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.moveLeft}>&lt;</div>
                <TransitionGroup>
                    {this.generateItems()}
                </TransitionGroup>
                <div className="arrow arrow-right" onClick={this.moveRight}>&gt;</div>
            </div>
        );
    }
}

export default Carousel;


