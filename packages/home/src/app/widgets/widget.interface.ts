

export interface IWidget {
    x: number;
    y: number;
    width: number;
    height: number;
    widgetType: WidgetType;
}

export enum WidgetType{
    "weather"= 1
}