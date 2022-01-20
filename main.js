function take_snapshot()
{

    WebKitCSSMatrix.snap (function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log( 'm15 version:', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded() {
    console.log ('Model Loaded!');
}

function check ()
{
    img = document.getElementById('captured_image');
    claaifier.claaify(img, gotResult);
}

functiongotResult (error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0]. label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confindence. toFixed (3);
    }
}