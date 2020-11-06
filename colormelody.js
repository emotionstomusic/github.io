function convertPulseColorMusic() {
   
    var pulse1 = document.getElementById("pulse1").value;
    var pulse2 = document.getElementById("pulse2").value;
    var pulse3 = document.getElementById("pulse3").value;
   
    //calculating pulse difference and converting to positive number
    var pulseResult1 = (pulse1 - pulse2);
    var pulseResult2 = (pulse2 - pulse3);
    var pulseResult3 = (pulse3 - pulse1);
    if (pulseResult1 < 0) { pulseResult1 *= -1; }
    if (pulseResult2 < 0) { pulseResult2 *= -1; }
    if (pulseResult3 < 0) { pulseResult3 *= -1; }      
   
    //display color on html
    var color1 = document.getElementById("cr1").innerHTML = specifyColor(pulseResult1);
    var color2 = document.getElementById("cr2").innerHTML = specifyColor(pulseResult2);
    var color3 = document.getElementById("cr3").innerHTML = specifyColor(pulseResult3);
    
    function specifyColor(pulseResult) {
        var color = "";
        if (pulseResult == 0 || pulseResult == 1) { color = "grey"; } //emotional coolness, indifference
        else if (pulseResult < 1) { color = "black"; }//strongest "down" //final, hopelessness, a protest against life and fate
        else if (pulseResult < 3 && pulseResult > 2) { color = "brown"; } //physical discomfort or illness
        else if (pulseResult <= 2 && pulseResult >= 1) { color = "blue"; } //total peace
        else if (pulseResult < 7 && pulseResult >= 5) { color = "green"; } //constant self-consciousness, resistance to change
        else if (pulseResult >= 10) { color = "orange"; }//strongest "up" //strong emotions, vital force, it increases heart rate, blood pressure and breathing
        else if (pulseResult < 10 && pulseResult >= 7) { color = "yellow"; } //spontaneity and concern for others
        else if (pulseResult < 5 && pulseResult >= 3) { color = "violet"; } //wish for a magic relation to reality, intuitive wholeness
        return color;
    }
 
    //display music note on html
    document.getElementById("mnt1").innerHTML = specifyMusicNote(color1);
    document.getElementById("mnt2").innerHTML = specifyMusicNote(color2);
    document.getElementById("mnt3").innerHTML = specifyMusicNote(color3);

    //document.getElementById("sound1output").innerHTML = displaySound(mnt1);
    //document.getElementById("sound2output").innerHTML = displaySound(mnt2);
    //document.getElementById("sound3output").innerHTML = displaySound(mnt3);
}

function specifyMusicNote(color) {
    
    var mnote = "";
    if (color == "grey") { mnote = "G, bass clef"; }
    else if (color == "black") { mnote = "D, bass clef"; }
    else if (color == "brown") { mnote = "B, bass clef"; }
    else if (color == "blue") { mnote = "F, bass clef"; }
    else if (color == "green") { mnote = "G, treble clef"; }
    else if (color == "orange") { mnote = "B, treble clef"; }
    else if (color == "yellow") { mnote = "F, treble clef"; }
    else if (color == "violet") { mnote = "E, treble clef"; }
    return mnote;
}

function displaySound(mnote) {
    switch (mnote) {
        case "G, bass clef":
            document.getElementById("sound1").play();
            break;
        case "D, bass clef":
            document.getElementById("sound2").play();
            break;
        case "B, bass clef":
            document.getElementById("sound3").play();
            break;
        case "F, bass clef":
            document.getElementById("sound4").play();
            break;
        case "G, treble clef":
            document.getElementById("sound5").play();
            break;
        case "B, treble clef":
            document.getElementById("sound6").play();
            break;
        case "F, treble clef":
            document.getElementById("sound7").play();
            break;
        case "E, treble clef":
            document.getElementById("sound8").play();
            break;
    }
}

document.getElementById("match").addEventListener("click", convertPulseColorMusic, false);
//document.getElementById("match").onclick = convertPulseColorMusic;