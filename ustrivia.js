function submit() {
    console.log('submitted');


    function countcorrect(qName) {
        var radioNum = document.getElementsByName(qName);

        for (var i = 0, length = radioNum.length; i < length; i++) {
            if (radioNum[i].checked) {

                var qValue = Number(radioNum[i].value);
            }
        }

        if (isNaN(qValue)) {
            qValue = 0;
        }
        return qValue;
    }

    var calcScore = (countcorrect('alabama') +
        countcorrect('alaska') +
        countcorrect('arizona') +
        countcorrect('arkansas') +
        countcorrect('california') +
        countcorrect('colorado') +
        countcorrect('connecticut') +
        countcorrect('delaware') +
        countcorrect('florida') +
        countcorrect('georgia') +
        countcorrect('hawaii') +
        countcorrect('idaho') +
        countcorrect('illinois') +
        countcorrect('indiana') +
        countcorrect('iowa') +
        countcorrect('kansas') +
        countcorrect('kentucky') +
        countcorrect('louisiana') +
        countcorrect('maine') +
        countcorrect('maryland') +
        countcorrect('massachusetts') +
        countcorrect('michigan') +
        countcorrect('minnesota') +
        countcorrect('mississippi') +
        countcorrect('missouri') +
        countcorrect('montana') +
        countcorrect('nebraska') +
        countcorrect('nevada') +
        countcorrect('newhampshire') +
        countcorrect('newjersey') +
        countcorrect('newmexico') +
        countcorrect('newyork') +
        countcorrect('northcarolina') +
        countcorrect('northdakota') +
        countcorrect('ohio') +
        countcorrect('oklahoma') +
        countcorrect('oregon') +
        countcorrect('pennsylvania') +
        countcorrect('rhodeisland') +
        countcorrect('southcarolina') +
        countcorrect('southdakota') +
        countcorrect('tennessee') +
        countcorrect('texas') +
        countcorrect('utah') +
        countcorrect('vermont') +
        countcorrect('virginia') +
        countcorrect('washington') +
        countcorrect('westvirginia') +
        countcorrect('wisconsin') +
        countcorrect('wyoming')
    );
    console.log("CalcScore: " + calcScore);


    function rightans(strNum, qNum) {
        console.log("qNum: " + qNum);
        return ("The correct answer for question #" + qNum + ": " +
            (document.getElementById(strNum).innerHTML) );
    }

    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right1', 1);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right2', 2);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right3', 3);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right4', 4);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right5', 5);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right6', 6);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right7', 7);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right8', 8);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right9', 9);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right10', 10);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right11', 11);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right12', 12);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right13', 13);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right14', 14);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right15', 15);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right16', 16);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right17', 17);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right18', 18);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right19', 19);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right20', 20);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right21', 21);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right22', 22);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right23', 23);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right24', 24);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right25', 25);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right26', 26);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right27', 27);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right28', 28);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right29', 29);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right30', 30);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right31', 31);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right32', 32);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right33', 33);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right34', 34);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right35', 35);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right36', 36);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right37', 37);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right38', 38);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right39', 39);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right40', 40);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right41', 41);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right42', 42);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right43', 43);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right44', 44);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right45', 45);
    }
    if (countcorrect('alabama') === 0) {
        document.getElementById('rightAnswer1').innerHTML = rightans('right46', 46);
    }
    if (countcorrect('delaware') === 0) {
        document.getElementById('rightAnswer2').innerHTML = rightans('right47', 47);
    }
    if (countcorrect('northdakota') === 0) {
        document.getElementById('rightAnswer3').innerHTML = rightans('right48', 48);
    }
    if (countcorrect('mississippi') === 0) {
        document.getElementById('rightAnswer4').innerHTML = rightans('right49', 49);
    }
    if (countcorrect('wisconsin') === 0) {
        document.getElementById('rightAnswer5').innerHTML = rightans('right50', 50);
    }
    var Qcounterlst = document.getElementsByClassName('question');

    var Qcounter = 0;
    for (var i = 0, length = Qcounterlst.length; i < length; i++) {
        Qcounter++;
    }


    var showScore = "Your Score: " + calcScore + "/" + Qcounter;
    if (calcScore === Qcounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});
