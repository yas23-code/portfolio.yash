declare module "gsap-trial/ScrollSmoother" {
    export class ScrollSmoother {
        static create(vars: any): ScrollSmoother;
        static refresh(soft?: boolean): void;
        scrollTop(value?: number): number;
        paused(value?: boolean): boolean | void;
        scrollTo(target: any, transition?: boolean, position?: string): void;
    }
}

declare module "gsap-trial/SplitText" {
    export class SplitText {
        constructor(target: any, vars?: any);
        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];
        revert(): void;
    }
}
