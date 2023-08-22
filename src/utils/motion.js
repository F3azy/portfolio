export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
            when: "afterChildren",
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};