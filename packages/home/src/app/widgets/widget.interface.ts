

export interface IWidget {
    x: string;
    y: string;
    width: string;
    height: string;
    widgetType: string;
}

export enum WidgetType{
    weather = "widget-weather",
    settings = "widget-settings",
    move = "widget-move",
    user = 'widget-user',
}