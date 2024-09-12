import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode
    style?: 'hard' | 'soft' | 'transparent';
    color?: 'sky' | 'rose' | 'stone';
    onClick?: () => void;
}