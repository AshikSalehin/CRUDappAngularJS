var app = angular.module("testRoute");
app.factory("crudService", crudService);
function crudService() {

    const totalColWidth = 100;

    var execute = loop();
    var obj = {
        widthSize: execute.widthSize,
        heightSize: execute.heightSize
    }

    function loop() {
        var loopObj = {
            widthSize: widthSize,
            heightSize: heightSize
        }
        function widthSize(length) {


            var len = length;
            var perColLength = totalColWidth / len;

            return {
                "width": perColLength + '%'
            }

        }
        function heightSize() {

            return {
                "width": 50
            }

        }

        return loopObj
    }
    return obj
}