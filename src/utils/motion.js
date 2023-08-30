export const fadeIn = (direction, type, duration, offset = 100) => {
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
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const textFadeIn = (direction, type, duration, delay, offset = 100) => {
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

export const slideIn = (direction, type, duration, delay = 0, offset = 100) => {
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

export const slideOut = (direction, type, duration, delay = 0, offset = 100) => {
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

export const zoomIn = (duration, delay = 0) => {
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

export const textReveal = (direction, type, duration, delay = 0, offset = 100) => {
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

export const staggerContainer = (staggerChildren, delayChildren, staggerDir = 1) => {
    return {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren || 0,
            staggerDirection: staggerDir,
          },
        }
    };
};