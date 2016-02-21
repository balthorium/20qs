function process() {
    var decoderRing = { 4: 100, 3.5: 92, 3: 85, 2.5: 77, 2: 70, 1.5: 60, 1: 50, 0: 0 };
    var weights = { "dci": 0.5, "sep": 0.2, "com": 0.2, "pra": 0.1 };
    var lgrades = { "A": 90, "B": 80, "C": 70, "D": 60 };

    var grade = 0.0;
    var lgrade = "F";
    for (var cat in weights) {
        grade += decoderRing[parseFloat(document.getElementById(cat).value)] * weights[cat];
    }
    if (!isNaN(grade)) {
        for (var l in lgrades) {
            if (grade >= lgrades[l]) {
                lgrade = l;
                break;
            }
        }
        document.getElementById("omg").innerHTML = lgrade + " (" + (Math.round(grade * 10) / 10) + ")";
    }
    else {
        document.getElementById("omg").innerHTML = "?";
    }
}



