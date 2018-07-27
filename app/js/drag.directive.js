myApp.directive('ngCustomdrag', function($document) {
    return {
        restrict: 'A',
        scope: {
            item: '=ngCustomdrag'
        },
        link: function(scope, elem, attr) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            var w = elem[0];
            var h = elem[0].querySelector('#mydivheader');
            console.log(h);

            if (w && h) {
                /!* if present, the header is where you move the DIV from:*!/
                h.onmousedown = dragMouseDown;
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elem[0].onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                //e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                //e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                w.style.top = (w.offsetTop - pos2) + "px";
                w.style.left = (w.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }

            scope.counter++;
            console.log(scope.counter);
            w.style.zIndex =  scope.counter;


        }
    }});