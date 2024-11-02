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

declare module "*.svg" {
    import * as React from "react"
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }>

    const src: string
    export default src
}
declare module "*.gif" {
    const content: string;
    export default content;
}