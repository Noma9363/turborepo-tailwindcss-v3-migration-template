// typescript declarations for CSS modules

declare module '*.module.css'{
    const classes: {[ket: string]:string};
    export default classes;
}

declare module '*.module.scss'{
    const classes: {[ket: string]:string};
    export default classes;
}

declare module '*.module.sass'{
    const classes: {[ket: string]:string};
    export default classes;
}
