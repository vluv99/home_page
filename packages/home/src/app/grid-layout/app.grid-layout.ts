import './app.grid-layout.scss';


export class AppGridLayout extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const container = document.createElement("section");
        container.id = 'list';
        //container.classList.add("layout--container");

        for (let i = 0; i < 10; i++) {
            const item = document.createElement("div");
            item.id = 'grid-item_' + i;
            item.classList.add("item");
            item.classList.add("empty");
            item.classList.add("noselect");
            item.classList.add("transition");
            item.innerText = "item " + (i+1).toString();

            // test with different tile layouts
            const rand = Math.floor(Math.random() * 3);
            switch (rand) {
                case 0:
                    item.classList.add("divRec");
                    break;
                case 1:
                    item.classList.add("divCard");
                    break;
                case 2:
                    item.classList.add("divQuad");
                    break;

            }

            container.appendChild(item);
        }

        this.appendChild(container);

        /*
            this.innerHTML = `
            <section id="list">
  <div id='div1' class='item divRec'><div class='inside'>item 1</div></div>
  <div id='div2' class='item divQuad'><div class='inside'>item 2</div></div>
  <div id='div3' class='item divCard'><div class='inside'>item 3</div></div>
  <div id='div4' class='item divRec'><div class='inside'>item 4</div></div>
  <div id='div5' class='item divCard'><div class='inside'>item 5</div></div>
  <div id='div6' class='item divRec'><div class='inside'>item 6</div></div>
  <div id='div7' class='item divQuad'><div class='inside'>item 7</div></div>
  <div id='div8' class='item divRec'><div class='inside'>item 8</div></div>
</section>`;*/

        this.sortable( document.getElementById('list'), function (item){
            /* console.log(item); */
        });
    }

    sortable(section, onUpdate){
        let dragEl, nextEl, newPos;
    
        const oldPos = [...section.children].map(item => {
            item.draggable = true
            const pos = document.getElementById(item.id).getBoundingClientRect();
            return pos;
        });
    
        function _onDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
    
            const target = e.target;
            if (target && target !== dragEl && target.nodeName == 'DIV') {
                if (target.classList.contains('inside')) {
                    e.stopPropagation();
                } else {
                    //getBoundinClientRect contains location-info about the element (relative to the viewport)
                    const targetPos = target.getBoundingClientRect();
                    //checking that dragEl is dragged over half the target y-axis or x-axis. (therefor the .5)
                    const next = (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) > .5 || (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) > .5;
                    section.insertBefore(dragEl, next && target.nextSibling || target);
    
                    /*  console.log("oldPos:" + JSON.stringify(oldPos));
                     console.log("newPos:" + JSON.stringify(newPos)); */
                    /* console.log(newPos.top === oldPos.top ? 'They are the same' : 'Not the same'); */
    
                    //console.log(oldPos);
                }
            }
        }
    
        function _onDragEnd(evt) {
            evt.preventDefault();
            newPos = [...section.children].map(child => {
                const pos = document.getElementById(child.id).getBoundingClientRect();
                return pos;
            });
            //console.log(newPos);
            dragEl.classList.remove('ghost');
            section.removeEventListener('dragover', _onDragOver, false);
            section.removeEventListener('dragend', _onDragEnd, false);
    
            nextEl !== dragEl.nextSibling ? onUpdate(dragEl) : false;
        }
    
        section.addEventListener('dragstart', function (e) {
            dragEl = e.target;
            nextEl = dragEl.nextSibling;
            /* dragGhost = dragEl.cloneNode(true);
            dragGhost.classList.add('hidden-drag-ghost'); */
    
            /*  document.body.appendChild(dragGhost);
             e.dataTransfer.setDragImage(dragGhost, 0, 0); */
    
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', dragEl.textContent);
    
            section.addEventListener('dragover', _onDragOver, false);
            section.addEventListener('dragend', _onDragEnd, false);
    
            setTimeout(function () {
                dragEl.classList.add('ghost');
            }, 0)
    
        });
    }

}
customElements.define('app-grid-layout', AppGridLayout);
