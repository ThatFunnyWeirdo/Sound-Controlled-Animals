function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wJRP0X3ef/model.json ", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        var barking = 0
        var meowing = 0
        var roaring = 0
        var mooing = 0
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("times_heard").innerHTML = "I can Hear - " + results[0].label;
        document.getElementById("identify_animal").innerHTML = "Detected Voice is of - " + results[0].label;
        document.getElementById("times_herd").style.color = "rgb("+random_number_b+"," +random_number_g+"," +random_number_r+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_b+"," +random_number_g+","+random_number_r+ ")";
    }
}