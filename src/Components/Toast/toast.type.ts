export interface IToastProps {
    severity: ISeverityToast;
    title: string;
    message?: string;
    enable: boolean
    style?: StleCustomProps
}

export type ISeverityToast = "success" | "error" | "info"

export const toastDefaultValues: IToastProps = {
    enable: false,
    title: "Aviso!", 
    severity: "success"
}

export interface StleCustomProps {
    position: IpositionStyle
}

export interface IpositionStyle {
    horizontal: "left" | "right"
}