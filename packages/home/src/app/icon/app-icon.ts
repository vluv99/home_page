
export class AppIcon extends HTMLElement {
    public static observedAttributes = [];

    get fillColor() {
        return this.getAttribute("fillColor");
    }

    public aspectRatio = 4/5; //5:4

    get width():number {
        const w = Number.parseInt(this.getAttribute("width"));

        if(w){
            return w
        }
        return 40;
    }

    get height():number {
        return this.width * this.aspectRatio;
    }

    private margin = this.width-this.height;

    get iconPath() {
        return this.getAttribute("iconPath");
    }


    connectedCallback() { // its not working for some reason :(
        this.innerHTML = `
            <div style="display: flex;">
                <svg fill="${this.fillColor}" xmlns="http://www.w3.org/2000/svg"
                style="margin-left:${this.margin}; margin-top:${this.margin}; margin-bottom:${this.margin};"  
                viewBox="0 0 640 512" width="${this.width}" height="${this.height}" ><path d="${this.iconPath}"/></svg>
            </div>
        `;


        //<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
    }
}

customElements.define('app-icon', AppIcon);


export enum IconPaths{
    "cloud-sun-rain" = "M137.9 3c-4.5-3.2-10.3-3.9-15.4-1.8s-8.8 6.7-9.7 12.2L98.7 98.7 13.4 112.8c-5.5 .9-10.1 4.6-12.2 9.7S-.2 133.4 3 137.9l50.3 70.3L3 278.5c-3.2 4.5-3.9 10.3-1.8 15.4s6.7 8.8 12.2 9.7l85.3 14.1L112.8 403c.9 5.5 4.6 10.1 9.7 12.2s10.9 1.4 15.4-1.8l55.2-39.5c-19.9-21.9-32.3-50.8-33.1-82.6c-17.6-10.2-32.2-26.1-40.6-46.3c-20.3-49 3-105.1 52-125.4c29.4-12.2 61.4-8.7 86.7 6.7c13.1-21.8 32.5-39.4 55.8-50.3L303.6 13.4c-.9-5.5-4.6-10.1-9.7-12.2S282.9-.2 278.5 3L208.2 53.3 137.9 3zM291.4 415.9c-2.5 .6-5.1 .6-7.6-.1c1.4 0 2.8 .1 4.2 .1h3.5zm-46.3-260c-17.3-12.2-40.4-15.6-61.5-6.9c-32.7 13.5-48.2 51-34.6 83.6c3.6 8.7 8.9 16.1 15.3 22.2c10.6-39.7 39.9-71.8 77.8-86.4c.8-4.3 1.8-8.4 3-12.5zM277.4 420c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm74.5-116.1c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C433.3 114.6 402.8 96 368 96c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6c0 53 43 96 96 96H559.9c44.2 0 80-35.8 80-80z"

    ,"gears" = "M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"

    ,"gear" = "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"

    ,"people-carry-box" = "M176 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM144 241.7v65.1l51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7V186.6c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5V160c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32v76.2l10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6v88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51V241.7l-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8H256.7c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 96c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm77.9 252.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z"

    ,"user" = "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"


}
