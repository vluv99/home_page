import './app/app.element.ts';
import './app/background/app.background';
import './app/layout/app.layout';
import './app/grid-layout/app.grid-layout';
import {sortable} from'./app/grid-layout/app.grid-layout';

sortable( document.getElementById('list'), function (item){
    /* console.log(item); */
});