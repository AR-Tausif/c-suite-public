import { ReactNode } from "react";

export interface ComponentType {
    children: ReactNode,
    className?: string,
    styles?: React.CSSProperties,
    [key: string]: unknown
}
