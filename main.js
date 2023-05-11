function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

}
function draw() {
    image(video, 120, 120, 400, 250);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(70, 70, 100);

    circle(570, 70, 100);

    circle(70, 410, 100);

    circle(570, 410, 100);

    fill(0, 255, 0);
    stroke(255, 255, 255);
    rect(70, 70,50, 340,);
    fill(0, 255, 0);
    stroke(255, 255, 255);
    rect(520, 70,50, 340,);
    fill(0, 255, 0);
    stroke(255, 255, 255);
    rect(70, 70,500, 50,);
    fill(0, 255, 0);
    stroke(255, 255, 255);
    rect(70, 360,500, 50,);
}



function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

