import ScrollVelocity from "./scrollvelocity";

export default function Scroller() {
    const velocity = 100; // Or whatever value you want to use
    return (
        <ScrollVelocity
            texts={['YOU CAN MAKE A CHANGE!', 'TOGETHER WE CAN!']}
            velocity={velocity}
            className="custom-scroll-text"
        />
    );
}