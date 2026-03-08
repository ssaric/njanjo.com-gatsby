declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}

declare module "*.webp" {
    const content: string;
    export default content;
}

declare module "*.svg?react" {
    import * as React from "react"
    const component: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }>
    export default component
}

declare module "*.svg" {
    const src: string
    export default src
}

declare module "*.gif" {
    const content: string;
    export default content;
}
