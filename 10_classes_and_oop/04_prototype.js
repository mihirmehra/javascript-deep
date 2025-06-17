let rank = [1,2,3,4,5,6]

function rankMessage (ranknum) {
    this.ranknum = ranknum,
    function getStudentRank(){
        console.log(`this is your rank: ${this.ranknum}`)
    }
}

Object.prototype.ranker = function(){
    console.log("this ranker is in all objects")
}

Array.prototype.arrRanker = function(){
    console.log("this Arr Ranker is in all Arrays")
}


// this.ranker()
// rank.arrRanker()
// rankMessage.arrRanker()
// rankMessage.ranker()

// =================================================
// protoptype inhertance
// =================================================

const Teacher = {
    makeVideo : true,
}
const TeacherAssistant = {
    isAvilable : false,
    lang : "english"
}
const TASupport = {
    testMakeing : true,
    canAskQuestions: true, 
    __proto__: TeacherAssistant
}

// Teacher.__proto__ = TeacherAssistant

// console.log(Teacher.isAvilable)
// console.log(TASupport.lang)


// Morden syntax

Object.setPrototypeOf(TeacherAssistant,Teacher)
// console.log(TeacherAssistant.makeVideo)


const Username = "mihir mehra           "

String.prototype.trueLength = function(){
    console.log(this)
    console.log(`${this}`)
    console.log(this.trim().length)
}

Username.trueLength()
"mehraji ka khauf".trueLength()

