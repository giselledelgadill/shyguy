
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);

    }else{
        console.log(results);
        rnr=Math.floor(Math.random()*255)+1;
        rng=Math.floor(Math.random()*255)+1;
        rnb=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("result_accuracy").innerHTML='accuracy- '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+rnr+","+rng+"."+rnb+")";
        document.getElementById("result_accuracy").style.color="rgb("+rnr+","+rng+"."+rnb+")";
        img1=document.getElementById('img1');
        img2=document.getElementById('img2');
        img3=document.getElementById('img3');
        img4=document.getElementById('img4');

        if(results[0].label=="Clap"){
            img1.src='creeper.jpg';
            img2.src='amongus.gif';
            img3.src='noob.jpg';
            img4.src='Shyguy.png';
        }else if(results[0].label=="Snapping"){
            img1.src='creeper.gif';
            img2.src='amongus.png';
            img3.src='noob.jpg';
            img4.src='Shyguy.png';
    }else if(results[0].label=="Background Noise"){
        img1.src='creeper.jpg';
        img2.src='amongus.png';
        img3.src='Noob.gif';
        img4.src='Shyguy.png';
}else if(results[0].label=="Bell"){
    img1.src='creeper.jpg';
    img2.src='amongus.png';
    img3.src='Noob.gif';
    img4.src='Shyguy.gif';
}
    }
}