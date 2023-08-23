export const fadeIn = (direction, type, delay, duration, offset = 100) => {
    return {
        hidden: {
            x: direction === "left" ? offset : direction === "right" ? -offset : 0,
            y: direction === "up" ? offset : direction === "down" ? -offset : 0,
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

export const slideIn = (direction, type, delay, duration, offset = 100) => {
    return {
        hidden: {
            x: direction === "left" ? offset : direction === "right" ? -offset : 0,
            y: direction === "up" ? offset : direction === "down" ? -offset : 0,
            when: "afterChildren",
        },
        visible: {
            x: 0,
            y: 0,
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

export const slideOut = (direction, type, delay, duration, offset = 100) => {
    return {
        visible: {
            x: 0,
            y: 0,
            when: "beforeChildren",
        },
        hidden: {
            x: direction === "left" ? -offset : direction === "right" ? offset : 0,
            y: direction === "up" ? -offset : direction === "down" ? offset : 0,
            transition: {
                when: "afterChildren",
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay, duration) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        }
    };
};

export const textReveal = (direction, type, delay, duration, offset = 100) => {
    return {
        hidden: {
            x: direction === "left" ? offset : direction === "right" ? -offset : 0,
            y: direction === "up" ? offset : direction === "down" ? -offset : 0,
            width: 0,
            when: "afterChildren",
        },
        visible: {
            x: 0,
            y: 0,
            width: "auto",
            transition: {
                when: "beforeChildren",
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        }
    };
};