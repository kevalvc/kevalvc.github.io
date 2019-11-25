var ptr = 0;
var electcounter=0;
/*
 ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████     ████████ ██   ██ ███████  ██████  ██████  ██    ██
██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██             ██    ██   ██ ██      ██    ██ ██   ██  ██  ██
██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████          ██    ███████ █████   ██    ██ ██████    ████
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██             ██    ██   ██ ██      ██    ██ ██   ██    ██
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████        ██    ██   ██ ███████  ██████  ██   ██    ██
*/

function generate() {
  var lec = document.getElementById("lec");
  var a = parseInt(document.getElementById("inputTheoryCond").value);
  if (a > 0) {
    var name = document.createElement('p');
    name.innerHTML = "<h2><b>Theory Subjects</b></h2>";
    lec.appendChild(name);

    var table = document.createElement('table');
    table.setAttribute('class', 'table');
    var thead = document.createElement('thead');
    thead.setAttribute('class', 'thead-inverse');
    var tr = document.createElement('tr');
    // var th1=document.createElement('th');
    // th1.innerHTML="<b>Subject Name</b>";
    // th1.setAttribute('value','Subject Name');
    // var th2=document.createElement('th');
    // th2.innerHTML="<b>Date</b>";
    // // th2.setAttribute('value','Date');
    var th3 = document.createElement('th');
    th3.innerHTML = "<b>Class</b>";
    // th3.setAttribute('value','Class');
    var th35 = document.createElement('th');
    th35.innerHTML = "<b>Section</b>";
    var th37 = document.createElement('th');
    th37.innerHTML = "<b>Subject Name</b>";
    var th4 = document.createElement('th');
    th4.innerHTML = "<b>Day</b>";
    // th4.setAttribute('value','Day');
    var th5 = document.createElement('th');
    th5.innerHTML = "<b>Attendance</b>";
    // th5.setAttribute('value','Attendance');
    var th55 = document.createElement('th');
    th55.innerHTML = "<b>Total students</b>";
    var th6 = document.createElement('th');
    th6.innerHTML = "<b>Attendance Percentage</b>";
    // th6.setAttribute('value','Count');
    // tr.appendChild(th1);
    // tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th35);
    tr.appendChild(th37);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th55);
    tr.appendChild(th6);
    thead.appendChild(tr);
    table.appendChild(thead);
    lec.appendChild(table);
    for (var i = 1; i <= a; i++) {
      var tr = document.createElement('tr');
      // var td1=document.createElement('td');
      // var subname = document.createElement("INPUT");
      // subname.setAttribute("type", "text");
      // td1.appendChild(subname);
      // var td2=document.createElement('td');
      // var date = document.createElement("INPUT");
      // date.setAttribute("type", "date");
      // td2.appendChild(date);
      var td3 = document.createElement('td');
      var year = document.createElement("SELECT");
      year.setAttribute('id', 'year');
      year.setAttribute('class', i - 1);
      year.setAttribute('onchange', "setSubjects(this)");
      var option = document.createElement("option");
      option.text = "";
      option.value = "";
      year.add(option);
      var option = document.createElement("option");
      option.text = "FE";
      option.value = "FE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "SE";
      option.value = "SE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "TE";
      option.value = "TE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "BE";
      option.value = "BE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      td3.appendChild(year);
      var td35 = document.createElement('td');
      //td35.setAttribute('class',300+i-1);
      var section = document.createElement("SELECT");
      section.setAttribute('class', 'section');
      section.setAttribute('onchange', "setTotalStudents(this)");
      var option = document.createElement("option");
      option.text = "A";
      option.value = "A";
      section.add(option);
      option = document.createElement("option");
      option.text = "B";
      option.value = "B";
      section.add(option);
      option = document.createElement("option");
      option.text = "A+B";
      option.value = "A+B";
      section.add(option);
      td35.appendChild(section);
      // var td37=document.createElement('td');
      // var subname = document.createElement("INPUT");
      // subname.setAttribute("type", "text");
      // td37.appendChild(subname);
      var td38 = document.createElement('td');
      var subjects = document.createElement('SELECT');
      subjects.setAttribute('class', 'subjects');
      // var subject=document.createElement('option');
      td38.appendChild(subjects);
      var td4 = document.createElement('td');
      var day = document.createElement("SELECT");
      day.setAttribute('class', 'daysSub');
      var option = document.createElement("option");
      option.text = "Mon";
      day.add(option);
      option = document.createElement("option");
      option.text = "Tue";
      day.add(option);
      option = document.createElement("option");
      option.text = "Wed";
      day.add(option);
      option = document.createElement("option");
      option.text = "Thur";
      day.add(option);
      option = document.createElement("option");
      option.text = "Fri";
      day.add(option);
      option = document.createElement("option");
      option.text = "Sat";
      day.add(option);
      td4.appendChild(day);
      var td5 = document.createElement('td');
      var attn = document.createElement('INPUT');
      attn.setAttribute("type", "number");
      attn.setAttribute('class', 100 + i - 1);
      attn.setAttribute('id', "inputTheory");
      attn.setAttribute("onkeyup", "getAttendance(this)");
      td5.appendChild(attn);

      var td55 = document.createElement('td');
      td55.setAttribute('id', 30000+i-1);
      var percentage = document.createElement('INPUT');
      percentage.setAttribute('type', "number");
      td55.appendChild(percentage);
      td55.innerHTML = "0";

      var td6 = document.createElement('td');
      var percentage = document.createElement('INPUT');
      percentage.setAttribute('type', "number");
      td6.setAttribute('id', 200 + i - 1);
      td6.appendChild(percentage);
      td6.innerHTML = "0";
      // td1.innerHTML='hello';
      // tr.appendChild(td1);
      // tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td35);
      // tr.appendChild(td37);
      tr.appendChild(td38);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td55);
      tr.appendChild(td6);
      table.appendChild(tr);
    }
  }
  // ////
  // var a = parseInt(document.getElementById("inputElectiveCond").value);
  // if (a > 0) {
  //   var name = document.createElement('p');
  //   name.innerHTML = "<h2><b>Elective Subjects</b></h2>";
  //   lec.appendChild(name);
  //   var table = document.createElement('table');
  //   table.setAttribute('class', 'table');
  //   var thead = document.createElement('thead');
  //   thead.setAttribute('class', 'thead-inverse');
  //   var tr = document.createElement('tr');
  //
  //   var th1 = document.createElement('th');
  //   th1.innerHTML = "<b>Subject</b>";
  //   var th2 = document.createElement('th');
  //   th2.innerHTML = "<b>Class</b>";
  //   // th3.setAttribute('value','Class');
  //   var th3 = document.createElement('th');
  //   th3.innerHTML = "<b>Day</b>";
  //   // th4.setAttribute('value','Day');
  //   var th4 = document.createElement('th');
  //   th4.innerHTML = "<b>Attendance</b>";
  //   // th5.setAttribute('value','Attendance');
  //   var th5 = document.createElement('th');
  //   th5.innerHTML = "<b>Attendance Percentage</b>";
  //   tr.appendChild(th1);
  //   tr.appendChild(th2);
  //   tr.appendChild(th3);
  //   tr.appendChild(th4);
  //   tr.appendChild(th5);
  //   thead.appendChild(tr);
  //   table.appendChild(thead);
  //   lec.appendChild(table);
  //
  //   var electives = ["OR", "SPM", "FR", "ML", "BDA", "DF"];
  //   var classte = ["TEA", "TEB", "TE(A+B)"];
  //   var classbe = ["BEA", "BEB", "BE(A+B)"];
  //   var days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  //   for (var i = 1; i <= a; i++) {
  //     var tr = document.createElement('tr');
  //     var td1 = document.createElement('td');
  //     var subjects = document.createElement("SELECT");
  //     subjects.setAttribute('id', 'electsubjects');
  //     subjects.setAttribute('class', 1000 + i - 1);
  //     subjects.setAttribute('onchange', "setClass(this)");
  //     var option = document.createElement("option");
  //     option.text = "";
  //     option.value = "";
  //     subjects.add(option);
  //     for (var j = 0; j < electives.length; j++) {
  //       var option = document.createElement("option");
  //       option.text = electives[j];
  //       option.value = electives[j];
  //       subjects.add(option);
  //     }
  //     td1.appendChild(subjects);
  //     var td2 = document.createElement('td');
  //     var classsection = document.createElement("SELECT");
  //     classsection.setAttribute('class', 'classsection');
  //     td2.appendChild(classsection);
  //     var td3 = document.createElement('td');
  //     var day = document.createElement("SELECT");
  //     day.setAttribute('class', 'daysElect')
  //     for (var j = 0; j < days.length; j++) {
  //       var option = document.createElement("option");
  //       option.text = days[j];
  //       day.add(option);
  //     }
  //     td3.appendChild(day);
  //
  //     var td4 = document.createElement('td');
  //     var attn = document.createElement('INPUT');
  //     attn.setAttribute("type", "number");
  //     attn.setAttribute('class', 1100 + i - 1);
  //     attn.setAttribute("onkeyup", "getAttendanceElective(this)");
  //     td4.appendChild(attn);
  //     var td5 = document.createElement('td');
  //     var percentage = document.createElement('INPUT');
  //     percentage.setAttribute('type', "number");
  //     td5.setAttribute('id', 1200 + i - 1);
  //     td5.appendChild(percentage);
  //     td5.innerHTML = "0";
  //     tr.appendChild(td1);
  //     tr.appendChild(td2);
  //     tr.appendChild(td3);
  //     tr.appendChild(td4);
  //     tr.appendChild(td5);
  //     table.appendChild(tr);
  //   }
  // }

  document.getElementById("submit").disabled = true;

  /*================================================
         button for generating table
  ================================================*/


  var lec = document.getElementById("lec");
  var submit = document.createElement('INPUT');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Generate Table');
  submit.setAttribute('id', 'generateTable');
  submit.setAttribute('onclick', 'generateTable()');
  submit.setAttribute('class', 'btn btn-primary');
  // lec.append(submit);


  var lec = document.getElementById("lec");
  var cont = document.createElement('div');
  cont.setAttribute('class', 'container');
  cont.setAttribute('id', 'submitabc');
  var submit = document.createElement('INPUT');
  submit.setAttribute('type', 'submit');
  submit.style.align = "center";
  submit.setAttribute('value', 'Click to enter Practicals');
  submit.setAttribute('id', 'submitTheoryButton');
  submit.setAttribute('onclick', 'myPractDisplay()');
  submit.setAttribute('class', 'btn btn-success btn-lg');

  cont.appendChild(submit);
  lec.appendChild(cont);

  /*================================================
         button for generating table
  ================================================*/

  var lec = document.getElementById("lec");
  var submit = document.createElement('INPUT');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Generate Table');
  submit.setAttribute('id', 'generateTable');
  submit.setAttribute('onclick', 'generateTable()');
  submit.setAttribute('class', 'btn btn-primary');
  // lec.append(submit);

}

function submitTheory() {
  window.location.href = "pract.php";
}

function setClass(s) // set class for electives
{
  var subjects = s;
  var subjectname = subjects.classList[0];
  // console.log(subjectname);
  var select = document.getElementsByClassName("classsection");
  var subject = select[subjectname - 1000];
  subject.innerHTML = "";
  // console.log(subject);
  if (subjects.value == 'OR' || subjects.value == 'FR' || subjects.value == 'SPM')
    var classlist = ['tea|TEA', 'teb|TEB', 'teab|TE(A+B)'];
  else if (subjects.value == 'ML' || subjects.value == 'BDA' || subjects.value == 'DF')
    var classlist = ['bea|BEA', 'beb|BEB', 'beab|BE(A+B)'];

  for (var cls in classlist) {
    var classname = document.createElement('option');
    s = classlist[cls];
    s = s.split('|');
    classname.value = s[0];
    classname.text = s[1];
    select[subjectname - 1000].add(classname);
  }

}

function setSubjects(s) //set subjects in theory
{
  var year = s;
  var classname = year.classList[0];
  console.log("cname: " + classname);
  var select = document.getElementsByClassName("subjects");
  var subject = select[classname];
  var sectionSelect = document.getElementsByClassName('section');
  var section = sectionSelect[classname];
  subject.innerHTML = "";
  // console.log(subject);
  if (year.value == 'FE')
    var sublist = ['AM-II', 'AP-II', 'AC-II', 'ED', 'SPA', 'CS'];
  else if (year.value == 'SE')
    var sublist = ['AM-IV', 'AOA', 'COA', 'OS', 'OSTL', 'CG'];
  else if (year.value == 'TE')
    var sublist = ['SPCC', 'SE', 'DD', 'MCC', 'OR', 'SPM', 'FR', 'NPL'];
  else if (year.value == 'BE')
    var sublist = ['DWM', 'HMI', 'PDS', 'ML', 'BDA', 'DF', 'CCL'];
  // console.log(year);
  // console.log(sublist);
  var subjects = document.getElementsByClassName("subjects");
  // console.log(subjects);
  for (var sub in sublist) {
    // console.log(sub);
    var subject = document.createElement('option');
    subject.value = sublist[sub];
    subject.text = sublist[sub];
    subjects[classname].add(subject);
  }
}

function getAttendance(attn) {

  var classname = attn.classList[0];
  classname = classname - 100;
  var select = document.getElementsByClassName("subjects");
  var subject = select[classname];

  var totalStudents=document.getElementById(classname+30000);

  if (subject.value == 'OR' || subject.value == 'SPM' || subject.value == 'FR' || subject.value == 'ML' || subject.value == 'BDA' || subject.value == 'DF') {
    var attend = new Map();
    attend['ortea'] = 7;
    attend['orteb'] = 7;
    attend['ortea+b'] = 14;
    attend['spmtea'] = 71;
    attend['spmteb'] = 53;
    attend['spmtea+b'] = 124;
    attend['frtea'] = 2;
    attend['frteb'] = 21;
    attend['frtea+b'] = 23;
    attend['mlbea'] = 29;
    attend['mlbeb'] = 57;
    attend['mlbea+b'] = 86;
    attend['bdabea'] = 31;
    attend['bdabeb'] = 17;
    attend['bdabea+b'] = 48;
    attend['dfbea'] = 9;
    attend['dfbeb'] = 1;
    attend['dfbea+b'] = 10;

    var curattn = Number(attn.value);
    console.log(curattn);
    var classn = attn.classList[0];
    // console.log(typeof(classn));
    console.log(classn);
    var classname = document.getElementsByClassName(classn - 100)[0].value;
    // console.log("clasnname" + classname);
    var select = document.getElementsByClassName("section");
    // console.log(select);
    var section = select[classn - 100];
    // console.log(section);
    var secval = section.value;
    // console.log(secval);
    var classname = document.getElementsByClassName(classn - 100)[0].value + secval;
    // console.log("classname" + classname);
    // console.log(Number(classn)+100);
    var data = subject.value + classname;
    data = data.toLowerCase();
    console.log(data);
    var count = document.getElementById(Number(classn) + 100);
    // console.log("count"+count);
    // console.log("attncname"+attn[classname]);
    count.innerHTML = curattn / attend[data] * 100;
    totalStudents.innerHTML=attend[data];
    // var sub = document.getElementsByClassName(classn - 100)[0].value;
    // console.log(sub);
    // // console.log(typeof(sub));
    // sub = sub.toLowerCase();
    // var select = document.getElementsByClassName("");
    // console.log(select);
    // var classsection = select[classn - 1100];
    // console.log(section);
    // var classsecval = classsection.value;
    // // console.log(attend[sub+classsecval]);
    // // console.log(secval);
    // // console.log(classname);
    // // console.log(Number(classn)+100);
    // var count = document.getElementById(Number(classn) + 100);
    // // console.log(count);
    // // console.log(attn[classname]);
    // // console.log(sub+classsecval);
    // count.innerHTML = curattn / attend[sub + classsecval] * 100;

  } else {
    var attend = new Map();
    attend['FEA'] = 60;
    attend['FEB'] = 60;
    attend['SEA'] = 80;
    attend['SEB'] = 75;
    attend['TEA'] = 82;
    attend['TEB'] = 81;
    attend['BEA'] = 69;
    attend['BEB'] = 75;

    // console.log("getAttendancetheor: "+Number(attn.value));
    var curattn = Number(attn.value);
    // console.log("curattntheor: "+curattn);
    var classn = attn.classList[0];
    // console.log("classnTheor: " + classn);
    var classname = document.getElementsByClassName(classn - 100)[0].value;
    // console.log("clasnname" + classname);
    var select = document.getElementsByClassName("section");
    // console.log(select);
    var section = select[classn - 100];
    // console.log(section);
    var secval = section.value;
    // console.log(secval);
    var classname = document.getElementsByClassName(classn - 100)[0].value + secval;
    // console.log("classname" + classname);
    // console.log(Number(classn)+100);
    var count = document.getElementById(Number(classn) + 100);
    // console.log("count"+count);
    // console.log("attncname"+attn[classname]);
    count.innerHTML = curattn / attend[classname] * 100;
    totalStudents.innerHTML=attend[classname];
  }
}

function getAttendanceElective(attn) {
  var attend = new Map();
  attend['ortea'] = 7;
  attend['orteb'] = 7;
  attend['orteab'] = 14;
  attend['spmtea'] = 71;
  attend['spmteb'] = 53;
  attend['spmteab'] = 124;
  attend['frtea'] = 2;
  attend['frteb'] = 21;
  attend['frteab'] = 23;
  attend['mlbea'] = 29;
  attend['mlbeb'] = 57;
  attend['mlbeab'] = 86;
  attend['bdabea'] = 31;
  attend['bdabeb'] = 17;
  attend['bdabeab'] = 48;
  attend['dfbea'] = 9;
  attend['dfbeb'] = 1;
  attend['dfbeab'] = 10;
  // console.log(attn.value);
  var curattn = Number(attn.value);
  // console.log(curattn);
  var classn = attn.classList[0];
  // console.log(typeof(classn));
  var sub = document.getElementsByClassName(classn - 100)[0].value;
  // console.log(sub);
  // console.log(typeof(sub));
  sub = sub.toLowerCase();
  var select = document.getElementsByClassName("classsection");
  // console.log(select);
  var classsection = select[classn - 1100];
  // console.log(section);
  var classsecval = classsection.value;
  // console.log(attend[sub+classsecval]);
  // console.log(secval);
  // console.log(classname);
  // console.log(Number(classn)+100);
  var count = document.getElementById(Number(classn) + 100);
  // console.log(count);
  // console.log(attn[classname]);
  // console.log(sub+classsecval);
  count.innerHTML = curattn / attend[sub + classsecval] * 100;
}


/*
 ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████     ████████  █████  ██████  ██      ███████
██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██             ██    ██   ██ ██   ██ ██      ██
██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████          ██    ███████ ██████  ██      █████
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██             ██    ██   ██ ██   ██ ██      ██
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████        ██    ██   ██ ██████  ███████ ███████
*/

function generateTable() {

  if ($('.finaltable').length > 0) {
    $('#tablegenerated').css('display', 'block');
    $('.finaltable').css('display', 'table');
    $('.datatable').css('display', 'table');
  } else {

    var miniday = new Array();
    var minorday = new Array();
    var majorday = new Array();

    var tgen = document.getElementById("tablegenerated");
    var a = 0;
    a = parseInt(document.getElementById("inputTheoryCond").value);
    // var b = parseInt(document.getElementById("inputElectiveCond").value);
    var c = 0;
    c = parseInt(document.getElementById("inputPracsCond").value);
    var subjects = document.getElementsByClassName('subjects');
    var practs = document.getElementsByClassName('practs');
    var name = document.createElement('p');

    var daySub = document.getElementsByClassName('daysSub');
    console.log(daySub);
    var subMap = new Map();
    var subjectList = new Map();
    var counter = 1;
    var cr = 1;
    var subSet = new Set();
    var subCountMap = new Map();
    for (var i = 0; i < a; i++) {
      var subjectname = subjects[i];
      subSet.add(subjectname.value);
      var daySubject = daySub[i];
      console.log(daySubject.value);

      //subject map for number of times a subject has occured
      var subctr = 0;
      if (!subCountMap.get(subjectname.value)) {
        subctr = 1;
        subCountMap.set(subjectname.value, subctr);
      } else {
        subctr = subCountMap.get(subjectname.value);
        subctr += 1;
        subCountMap.set(subjectname.value, subctr);
      }

      if (!subMap.get(subjectname.value + daySubject.value)) {
        counter = 1;
        subMap.set(subjectname.value + daySubject.value, counter);
        subjectList.set(subjectname.value, parseFloat($("#20" + (cr - 1)).text()));
        cr++;
      } else {
        counter = subMap.get(subjectname.value + daySubject.value);
        counter += 1;
        console.log("c is " + counter);
        subMap.set(subjectname.value + daySubject.value, counter);
        subjectList.set(subjectname.value, parseFloat($("#20" + (cr - 1)).text()));
        // subMap.set(subjectname.value,subMap.get(subjectname.value).charAt(0)+subMap.get(subjectname.value).charAt(1)+subMap.get(subjectname.value).charAt(2)+(c));
        // console.log("abc is "+subMap.get(subjectname.value).charAt(0)+subMap.get(subjectname.value).charAt(1)+subMap.get(subjectname.value).charAt(2)+(c));
      }
    }
    console.log("subset size is " + subSet.size);
    console.log(subSet);
    console.log("submap is ");
    console.log(subMap);

    console.log("subject count map is")
    console.log(subCountMap);

    // var dayElect = document.getElementsByClassName('daysElect');
    // var electSet = new Set();
    // var electMap = new Map();
    // var electCountMap = new Map();
    // var electiveList = new Map();
    // for (var i = 0; i < b; i++) {
    //   var electsubjects = document.getElementsByClassName(1000 + i);
    //   var electivename = electsubjects[0];
    //   var dayElective = dayElect[i];
    //   electSet.add(electivename.value);
    //   console.log(electivename.value);
    //
    //   //elective map for number of times a subject has occured
    //   var subctr = 0;
    //   if (!electCountMap.get(electivename.value)) {
    //     subctr = 1;
    //     electCountMap.set(electivename.value, subctr);
    //   } else {
    //     subctr = electCountMap.get(electivename.value);
    //     subctr += 1;
    //     electCountMap.set(electivename.value, subctr);
    //   }
    //
    //
    //
    //   if (!electMap.get(electivename.value + dayElective.value)) {
    //     counter = 1;
    //     electMap.set(electivename.value + dayElective.value, counter);
    //     electiveList.set(electivename.value, counter);
    //   } else {
    //     console.log(counter);
    //     counter = electMap.get(electivename.value + dayElective.value);
    //     counter += 1;
    //     electMap.set(electivename.value + dayElective.value, counter);
    //     electiveList.set(electivename.value, counter);
    //   }
    //   // if(!electMap.get(electivename.value))
    //   // {
    //   //    electMap.set(electivename.value,1);
    //   // }
    //   // else
    //   // {
    //   //    electMap.set(electivename.value,electMap.get(electivename.value)+1);
    //   // }
    // }
    // console.log("electMap is ");
    // console.log(electMap);
    // console.log(electSet);
    //
    // console.log("elective lis is ");
    // console.log(electiveList);

    var dayPract = document.getElementsByClassName('daysPract');
    var practSet = new Set();
    var practMap = new Map();
    var practCountMap = new Map();
    var practicalList = new Map();
    for (var i = 0; i < c; i++) {
      var subjectname = practs[i];
      practSet.add(subjectname.value);
      var dayPractical = dayPract[i];

      //practical map for number of times a subject has occured
      var subctr = 0;
      if (!practCountMap.get(subjectname.value)) {
        subctr = 1;
        practCountMap.set(subjectname.value, subctr);
      } else {
        subctr = practCountMap.get(subjectname.value);
        subctr += 1;
        practCountMap.set(subjectname.value, subctr);
      }

      console.log("practcountmap is ");
      console.log(practCountMap);


      if (!practMap.get(subjectname.value + dayPractical.value)) {
        counter = 1;
        practMap.set(subjectname.value + dayPractical.value, counter);
        practicalList.set(subjectname.value, counter);
      } else {
        counter = practMap.get(subjectname.value + dayPractical.value);
        counter += 1;
        practMap.set(subjectname.value + dayPractical.value, counter);
        practicalList.set(subjectname.value, counter);
      }
      console.log("practmap is ");
      console.log(practMap);
      // if(!practMap[subjectname.value])
      //    practMap.set(subjectname.value,1);
      // else
      //    practMap.set  (subjectname.value,subMap.get(subjectname.value)+1);
    }

    for (var key of practCountMap.keys())
    {
      if (key == 'or' || key == 'spm' || key == 'fr' || key == 'ml' || key == 'bda' || key == 'df' || key == 'am-IV')
            electcounter+=practCountMap.get(key);
    }

    console.log("electcounter is "+electcounter);


    // console.log("practs: : "+practs);
    // console.log("name: "+name);
    // console.log("a: "+a);
    // console.log("b: "+b);
    // console.log("c: "+c);
    // console.log("subjects: "+subjects);

    // console.log(electsubjects);
    name.innerHTML = "<h2><b>Faculty Table</b></h2>";
    name.setAttribute('class', 'text-center');
    tgen.appendChild(name);

    // ==========================================================================================================REMOVE
    // a = 2;
    // b = 1;
    // c = 3;
    // var subjects = ["AM-IV", "SPCC"];
    // var practs = ["AM", "AM", "AM"];

    var table = document.createElement('table');
    table.setAttribute('class', 'table table-bordered table-inverse finaltable');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = "<b>Day</b>";
    td1.setAttribute('rowspan', '2');
    var td2 = document.createElement('td');
    td2.innerHTML = "<b>Date</b>";
    td2.setAttribute('rowspan', '2');
    var subflag = 0; //if number of different subjects is less than 1
    if (subSet.size == 1)
      subflag = 1;
    if (subSet.size == 0)
      subflag = 2;
    var td3 = document.createElement('td');
    td3.innerHTML = "<b>Theory (X)</b>";
    td3.setAttribute('class', 'text-center');
    td3.setAttribute('colspan', subSet.size + subflag);

    var practflag = 0;
    if (practSet.size == 1)
      practflag = 1;
    if (practSet.size == 0)
      practflag = 2;
    var td4 = document.createElement('td');
    td4.innerHTML = "<b>Practical/Tutorial (Y)</b>";
    td4.setAttribute('colspan', practSet.size + practflag);
    td4.setAttribute('class', 'text-center');
    var td5 = document.createElement('td');
    td5.innerHTML = "<b>Project (Z)</b>";
    td5.setAttribute('colspan', '3');
    td5.setAttribute('class', 'text-center');
    var td6 = document.createElement('td');
    td6.innerHTML = "<b>Remark</b>";
    td6.setAttribute('rowspan', '2');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
    tgen.appendChild(table);

    var tr = document.createElement('tr');
    tr.setAttribute('class', 'bg-primary');

    for (let key of subSet.keys()) {
      var td = document.createElement('td');
      td.innerHTML = key;
      tr.appendChild(td);
      console.log("subname is " + key);
    }
    console.log(subMap);

    for (var abc = 0; abc < subflag; abc++) {
      var td = document.createElement('td');
      td.innerHTML = "subject";
      tr.appendChild(td);
    }

    for (let key of practSet.keys()) {
      var td = document.createElement('td');
      td.innerHTML = key.toUpperCase();
      tr.appendChild(td);
      console.log("practname is " + key);
    }

    for (var abc = 0; abc < practflag; abc++) {
      var td = document.createElement('td');
      td.innerHTML = "practical";
      tr.appendChild(td);
      console.log("abcdefghijklmnopqrstuvwxyz" + abc);
    }

    console.log("subflag=" + subflag);
    console.log("practflag=" + practflag);


    var td = document.createElement('td');
    td.innerHTML = "mini";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML = "minor";
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML = "major";
    tr.appendChild(td);
    table.appendChild(tr);

    var background = ['bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-primary', 'bg-success']
    var days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    for (var i = 0; i < 6; i++) {
      var tr = document.createElement('tr');
      tr.setAttribute('class', background[i]);

      var td = document.createElement('td');
      td.innerHTML = days[i];
      tr.appendChild(td);
      var td = document.createElement('td');
      td.innerHTML = "8 jan";
      tr.appendChild(td);
      //for theory Lectures

      for (let key of subSet.keys()) {
        var td = document.createElement('td');
        td.setAttribute('id', key + days[i]);

        for (var keyVal of subMap.keys()) {
          if (keyVal == td.id) {
            td.innerHTML = subMap.get(keyVal);
          }
        }

        tr.appendChild(td);
      }

      for (var abc = 0; abc < subflag; abc++) {
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
      }

      for (let key of practSet.keys()) {
        var td = document.createElement('td');
        td.setAttribute('id', key + days[i]);
        for (var keyVal of practMap.keys()) {
          if (keyVal == td.id) {
            if (key == 'or' || key == 'spm' || key == 'fr' || key == 'ml' || key == 'bda' || key == 'df' || key == 'am-IV')
                  td.innerHTML = practMap.get(keyVal);
            else
            td.innerHTML = practMap.get(keyVal) * 2;
          }
        }
        // td.innerHTML=key+days[i];
        tr.appendChild(td);
      }

      for (var abc = 0; abc < practflag; abc++) {
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
      }


      var td = document.createElement('td');
      td.setAttribute('id', "mini" + days[i])
      // td.innerHTML="small";
      tr.appendChild(td);
      var td = document.createElement('td');
      td.setAttribute('id', "minor" + days[i])
      // td.innerHTML="medium";
      tr.appendChild(td);
      var td = document.createElement('td');
      td.setAttribute('id', "major" + days[i])
      // td.innerHTML="large";
      tr.appendChild(td);



      var td = document.createElement('td');
      // td.innerHTML="remark";
      tr.appendChild(td);
      table.appendChild(tr);

    }

    //for project lectures

    var numberofMini = 0;
    var numberofMinor = 0;
    var numberofMajor = 0;
    if (document.getElementById("numberofmini")) {
      numberofMini = Number(document.getElementById("numberofmini").value);
    }
    if (document.getElementById("numberofminor")) {
      numberofMinor = Number(document.getElementById("numberofminor").value);
    }
    if (document.getElementById("numberofmajor")) {
      numberofMajor = Number(document.getElementById("numberofmajor").value);
    }
    console.log(numberofMini);
    console.log(numberofMinor);
    for (var k = 0; k < numberofMini; k++) {
      miniday.push(document.getElementById("projday" + k).value);
    }
    for (var k = 0; k < numberofMinor; k++) {
      minorday.push(document.getElementById("projday" + (k + 20)).value);
    }
    for (var k = 0; k < numberofMajor; k++) {
      majorday.push(document.getElementById("projday" + (k + 30)).value);
    }

    console.log("miniminormajor");
    console.log(miniday);
    console.log(miniday.length);
    console.log(minorday);
    console.log(majorday);


    for (var k = 0; k < miniday.length; k++) {
      var val = 0;
      var dayid = "mini" + miniday[k];
      console.log(dayid);
      var dayvalue = document.getElementById(dayid).innerHTML;
      console.log(dayvalue);
      if (dayvalue == "")
        val = "1";
      else {
        val = Number(dayvalue) + 1;
      }
      document.getElementById(dayid).innerHTML = val;
    }
    for (var k = 0; k < minorday.length; k++) {
      var val = 0;
      var dayid = "minor" + minorday[k];
      var dayvalue = document.getElementById(dayid).innerHTML;
      console.log(dayvalue);
      if (dayvalue == "")
        val = "1";
      else {
        val = Number(dayvalue) + 1;
      }
      document.getElementById(dayid).innerHTML = val;
    }

    for (var k = 0; k < majorday.length; k++) {
      var val = 0;
      var dayid = "major" + majorday[k];
      var dayvalue = document.getElementById(dayid).innerHTML;
      console.log(dayvalue);
      if (dayvalue == "")
        val = "1";
      else {
        val = Number(dayvalue) + 1;
      }
      document.getElementById(dayid).innerHTML = val;
    }

    /*
    ████████  █████  ██████  ██      ███████     ██████   ██████  ████████ ████████  ██████  ███    ███     ███████ ███████  ██████ ████████
       ██    ██   ██ ██   ██ ██      ██          ██   ██ ██    ██    ██       ██    ██    ██ ████  ████     ██      ██      ██         ██
       ██    ███████ ██████  ██      █████       ██████  ██    ██    ██       ██    ██    ██ ██ ████ ██     ███████ █████   ██         ██
       ██    ██   ██ ██   ██ ██      ██          ██   ██ ██    ██    ██       ██    ██    ██ ██  ██  ██          ██ ██      ██         ██
       ██    ██   ██ ██████  ███████ ███████     ██████   ██████     ██       ██     ██████  ██      ██     ███████ ███████  ██████    ██
    */

    a = subSet.size + subflag;
    // b = electSet.size;
    c = practSet.size + practflag;
    var tr = document.createElement("tr");
    tr.setAttribute('class', background[i]);
    table.append(tr);
    var td = document.createElement("td");
    td.setAttribute('colspan', '2');
    td.setAttribute('rowspan', '2');
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Total";
    tr.append(td);
    for (var i = 0; i < (a + c + 4); i++) {
      var td = document.createElement("td");
      td.setAttribute('id', 'ttl' + (i + 1));
      tr.append(td);
    }
    var tr = document.createElement("tr");
    tr.setAttribute('class', background[i]);
    table.append(tr);

    // Code for theory X and next block
    var td = document.createElement("td");
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Theory (X)";
    if ((a) > 1) {
      td.setAttribute('colspan', a - 1);
    } else td.setAttribute('colspan', 1);
    tr.append(td);
    td2 = document.createElement("td");
    td2.setAttribute('id', 'total' + 1);
    tr.append(td2);

    // Code for Pract Y and next block
    var td = document.createElement("td");
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Pract/Tut (Y)";
    if (c > 1) {
      td.setAttribute('colspan', c - 1);
    } else td.setAttribute('colspan', 1);
    tr.append(td);
    td2 = document.createElement("td");
    td2.setAttribute('id', 'total' + 2);
    tr.append(td2);

    // Code for Pract z and next two block
    var td = document.createElement("td");
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Project (Z)";
    td.setAttribute('colspan', 2);
    tr.append(td);
    td2 = document.createElement("td");
    td2.setAttribute('id', 'total' + 3);
    tr.append(td2);

    var td = document.createElement("td");
    tr.append(td);

    // Attendance Row
    var tr = document.createElement("tr");
    // tr.setAttribute('class',background[i]);
    table.append(tr);
    var td = document.createElement("td");
    td.setAttribute('colspan', '2');
    td.setAttribute('rowspan', '2');
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Attendance %";
    tr.append(td);
    for (var i = 0; i < a + c + 4; i++) {
      var td = document.createElement("td");
      td.setAttribute('id', 'attperc' + (i + 1));
      tr.append(td);
    }
    var tr = document.createElement("tr");
    table.append(tr);
    // Code for Avg A1 and next block
    var td = document.createElement("td");
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Avg (A1)";
    if ((a) > 1) {
      td.setAttribute('colspan', a - 1);
    } else td.setAttribute('colspan', 1);
    tr.append(td);
    td2 = document.createElement("td");
    td2.setAttribute('id', 'perat' + 1);
    tr.append(td2);

    // Code for Avg A2 and next block
    var td = document.createElement("td");
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Avg (A2)";
    if (c > 1) {
      td.setAttribute('colspan', c - 1);
    } else td.setAttribute('colspan', 1);
    tr.append(td);
    td2 = document.createElement("td");
    td2.setAttribute('id', 'perat' + 2);
    tr.append(td2);

    // Code for Avg A3 and next two block
    var td = document.createElement("td");
    td.innerHTML = "Avg (A3)";
    td.setAttribute('class', 'text-center');
    td.setAttribute('colspan', 2);
    tr.append(td);
    td2 = document.createElement("td");
    td2.setAttribute('id', 'perat' + 3);
    tr.append(td2);

    var td = document.createElement("td");
    tr.append(td);
    var tr = document.createElement("tr");
    table.append(tr);
    var td = document.createElement("td");
    td.setAttribute('colspan', a + c + 4);
    td2 = document.createElement("td");
    td2.setAttribute('colspan', '2');
    td2.setAttribute('class', 'A-val');
    td.setAttribute('class', 'text-center');
    td.innerHTML = "Attendance Quotient A = A1 * 0.55 + A2 * 0.3 + A3 * 0.15";
    tr.append(td);
    tr.append(td2);

    var tr = document.createElement("tr");
    table.append(tr);

    var td = document.createElement("td");
    td.innerHTML = "Conduct Score P:"
    td.setAttribute('class', 'text-center');
    td.setAttribute('colspan', a);
    tr.append(td);
    var td = document.createElement("td");
    td.setAttribute('id', 'Pscore');
    td.setAttribute('class', 'text-center');
    tr.append(td);

    var td = document.createElement("td");
    td.innerHTML = "Conduct Score Q = P*A"
    td.setAttribute('class', 'text-center');
    td.setAttribute('colspan', c);
    tr.append(td);
    var td = document.createElement("td");
    td.setAttribute('id', 'Qscore');
    td.setAttribute('class', 'text-center');
    tr.append(td);

    var td = document.createElement("td");
    td.innerHTML = "Conduct Score R:"
    td.setAttribute('class', 'text-center');
    td.setAttribute('colspan', "3");
    tr.append(td);
    var td = document.createElement("td");
    td.setAttribute('id', 'Rscore');
    td.setAttribute('class', 'text-center');
    tr.append(td);

    console.log("**************************************************************************************************** ");
    // console.log("final subject list is: ");
    var days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    // for theory total
    var ctr = 0;

    console.log(parseInt(subjectList.size));

    if (parseInt(subjectList.size) == 0) {
      ctr++;
      var arraynew = "0";
      // $("#ttl"+ctr).innerHTML = "0";
      // $("#ttl" + ctr).html("0");
      ctr++;
      var arraynew = 0;
      // $("#ttl" + ctr).html("0");
    } else if (parseInt(subjectList.size) == 1) {
      for (let key of subjectList.keys()) {
        var arraynew = 0;
        ctr++;
        for (var j = 0; j < 6; j++) {
          if ($("#" + key + days[j]).text() != "") {
            arraynew += parseInt($("#" + key + days[j]).text());
          }
        }
        $("#ttl" + ctr).html(arraynew);
      }
      ctr++;
      var arraynew = 0;
      // $("#ttl" + ctr).html("0");
    } else {
      for (let key of subjectList.keys()) {
        var arraynew = 0;
        ctr++;
        for (var j = 0; j < 6; j++) {
          if ($("#" + key + days[j]).text() != "") {
            arraynew += parseInt($("#" + key + days[j]).text());
            console.log("000000000000000000000000000000000000000000000000000");
            console.log(key + ": " + arraynew);
          }
        }
        $("#ttl" + ctr).html(arraynew);
      }
    }
    // console.log(subjectList);
    // console.log("********************************************************");

    // // // for electives total
    // for (let key of electiveList.keys()) {
    //   var arraynew = 0;
    //   ctr++;
    //   for (var j = 0; j < 6; j++) {
    //     if ($("#" + key + days[j]).text() != "") {
    //       arraynew += parseInt($("#" + key + days[j]).text());
    //       // console.log(subjects[i].value+days[j]+": "+arraynew);
    //     }
    //   }
    //   $("#ttl" + ctr).html(arraynew);
    // }
    // console.log(electiveList);
    // console.log("********************************************************");

    // for theory final
    var total1 = 0;
    var tot1 = ctr;
    for (var i = 0; i <= ctr; i++) {
      if($("#ttl" + (i + 1)).text())
      total1 += parseInt($("#ttl" + (i + 1)).text());
    }
    console.log("tot1"+ctr);
    if (total1 == 0)
      total1 = 100;
    $("#total1").html(total1);

    // for pracs total
    if (parseInt(practicalList.size) == 0) {
      ctr++;
      var arraynew = 0;
      // $("#ttl" + ctr).html("0");
      ctr++;
      var arraynew = 0;
      // $("#ttl" + ctr).html("0");
    } else if (parseInt(practicalList.size) == 1) {
      for (let key of practicalList.keys()) {
        var arraynew = 0;
        ctr++;
        for (var j = 0; j < 6; j++) {
          if ($("#" + key + days[j]).text() != "") {
            arraynew += parseInt($("#" + key + days[j]).text());
          }
        }
        $("#ttl" + ctr).html(arraynew);
      }
      ctr++;
      var arraynew = 0;
      // $("#ttl" + ctr).html("0");
    } else {
      for (let key of practicalList.keys()) {
        var arraynew = 0;
        ctr++;
        for (var j = 0; j < 6; j++) {
          if ($("#" + key + days[j]).text() != "") {
            arraynew += parseInt($("#" + key + days[j]).text());
            // console.log(subjects[i].value+days[j]+": "+arraynew);
          }
        }
        $("#ttl" + ctr).html(arraynew);
      }
    }
    console.log(practicalList);
    console.log("********************************************************");

    // for practical final
    var total2 = 0;
    for (var i = tot1; i < ctr; i++) {
      if($("#ttl" + (i + 1)).text())
      total2 += parseInt($("#ttl" + (i + 1)).text());
    }
    if (total2 == 0)
      total2 = 100;
    $("#total2").html(total2);
    console.log("********************************************************");

    var m3 = ["mini", "minor", "major"];
    // for (var i = 0; i < m3.length; i++) {
    //   var arraynew = 0;
    //   for (var j = 0; j < days.length; j++) {
    //     if ($("#" + m3[i] + days[j]).text() != "") {
    //       arraynew += parseInt($("#" + m3[i] + days[j]).text());
    //     }
    //   }
    //   // $("#ttl" + ((subSet.size + electSet.size + practSet.size + 1) + ctr)).html(arraynew);
    //   $("#ttl" + ((subSet.size + practSet.size + 1) + ctr)).html(arraynew);
    //   ctr++;
    // }
    ctr++;
    var flagpracstart = ctr;
    $('#ttl' + ctr).html(parseInt($('#numberofmini').val()));
    // $('#ttl' + ctr).html(parseInt($('#mini-input').val()));
    ctr++;
    $('#ttl' + ctr).html(parseInt($('#numberofminor').val()));
    // $('#ttl' + ctr).html(parseInt($('#minor-input').val()));
    ctr++;
    $('#ttl' + ctr).html(parseInt($('#numberofmajor').val()));
    // $('#ttl' + ctr).html(parseInt($('#major-input').val()));

    // Attendance Percentage
    var ctr = 0;
    for (let key of subjectList.keys()) {
      var arraynew = 0;
      ctr++;
      // for (var j = 0; j < 6; j++) {
      //   if ($("#" + key + days[j]).text() != "") {
      //     arraynew += parseInt($("#" + key + days[j]).text());
      //     // console.log(subjects[i].value+days[j]+": "+arraynew);
      //   }
      // }
      arraynew = subjectList.get(key);
    }
    // console.log(subjectList);
    // console.log("********************************************************");
    // ctr = 0;

    // var xx = subSet.size + electSet.size + practSet.size + 1;
    // var xx = subSet.size + practSet.size + 1;
    var xx = flagpracstart;
    var total3 = parseInt($("#ttl" + xx).text()) + parseInt($("#ttl" + (xx + 1)).text()) + parseInt($("#ttl" + (xx + 2)).text());
    $("#total3").html(total3);

    /*************************************************************************
     *************************************************************************/

    //theory
    var subAttnClass = document.getElementsByClassName("subjects");

    var subAttnClassLen = subAttnClass.length;

    var subAttnMap = new Map();

    for (var m = 0; m < subAttnClassLen; m++) {
      var sub = subAttnClass[m].value;
      var subAttn = parseFloat(document.getElementById(200 + m).innerHTML);

      // console.log("sub "+sub+"subAttn "+subAttn);

      if (!subAttnMap.get(sub)) {
        subAttnMap.set(sub, subAttn);
      } else {
        counter = parseFloat(subAttnMap.get(sub));
        subAttnMap.set(sub, counter + subAttn);
      }
    }

    for (var keyVal of subAttnMap.keys()) {
      subAttnMap.set(keyVal, parseFloat(subAttnMap.get(keyVal) / subCountMap.get(keyVal)));
    }

    console.log("subAttnMap is ");
    console.log(subAttnMap);

    // //elective
    //
    // var electAttnMap = new Map();
    // var b = parseInt(document.getElementById("inputElectiveCond").value);
    // for (var m = 0; m < b; m++) {
    //   var electsubjects = document.getElementsByClassName(1000 + m);
    //   var electivename = electsubjects[0].value;
    //
    //   var electAttn = parseFloat(document.getElementById(1200 + m).innerHTML);
    //
    //   if (!electAttnMap.get(electivename)) {
    //     electAttnMap.set(electivename, electAttn);
    //   } else {
    //     var ctr = parseFloat(electAttnMap.get(electivename));
    //     electAttnMap.set(electivename, ctr + electAttn);
    //   }
    //
    // }
    //
    //
    // for (var keyVal of electAttnMap.keys()) {
    //   electAttnMap.set(keyVal, parseFloat(electAttnMap.get(keyVal) / electCountMap.get(keyVal)));
    // }
    //
    //
    // console.log("electAttnMap is ");
    // console.log(electAttnMap);

    //practical
    var practAttnClass = document.getElementsByClassName("practs");

    var practAttnClassLen = practAttnClass.length;

    var practAttnMap = new Map();

    for (var m = 0; m < practAttnClassLen; m++) {
      var sub = practAttnClass[m].value;
      var subAttn = parseFloat(document.getElementById(6000 + m).innerHTML);

      // console.log("sub "+sub+"subAttn "+subAttn);


      if (!practAttnMap.get(sub)) {
        practAttnMap.set(sub, subAttn);
      } else {
        counter = parseFloat(practAttnMap.get(sub));
        practAttnMap.set(sub, counter + subAttn);
      }

    }

    for (var keyVal of practAttnMap.keys()) {
      practAttnMap.set(keyVal, parseFloat(practAttnMap.get(keyVal) / practCountMap.get(keyVal)));
    }

    console.log("subAttnMap is ");
    console.log(subAttnMap);


    var m = 1;

    console.log(parseInt(subAttnMap.size));

    if (parseInt(subAttnMap.size) == 0) {
      var attnele = document.getElementById("attperc" + m);
      // attnele.innerHTML = 0;
      m++;
      attnele.setAttribute("id", "attn" + "perc1");
      var attnele = document.getElementById("attperc" + m);
      // attnele.innerHTML = 0;
      m++;
      attnele.setAttribute("id", "attn" + "perc2");
    } else if (parseInt(subAttnMap.size) == 1) {
      for (var keyVal of subAttnMap.keys()) {
        var attnele = document.getElementById("attperc" + m);
        attnele.innerHTML = 0;
        m++;
        attnele.setAttribute("id", "attnsub" + keyVal);
      }
      var attnele = document.getElementById("attperc" + m);
      // attnele.innerHTML = 0;
      m++;
      attnele.setAttribute("id", "attn" + "perc1");
    } else {
      for (var keyVal of subAttnMap.keys()) {
        var attnele = document.getElementById("attperc" + m);
        attnele.innerHTML = 0;
        m++;
        attnele.setAttribute("id", "attnsub" + keyVal);
      }
    }

    // for (var keyVal of electAttnMap.keys()) {
    //   var attnele = document.getElementById("attperc" + m);
    //   m++;
    //   attnele.setAttribute("id", "attn" + keyVal);
    // }
    if (parseInt(practAttnMap.size) == 0) {
      var attnele = document.getElementById("attperc" + m);
      // attnele.innerHTML = 0;
      m++;
      attnele.setAttribute("id", "attn" + "perc" + m);
      // attnele.innerHTML = 0;
      var attnele = document.getElementById("attperc" + m);
      // attnele.innerHTML = 0;
      m++;
      attnele.setAttribute("id", "attn" + "perc" + m);
    } else if (parseInt(practAttnMap.size) == 1) {
      for (var keyVal of practAttnMap.keys()) {
        var attnele = document.getElementById("attperc" + m);
        attnele.innerHTML = 0;
        m++;
        attnele.setAttribute("id", "attnpract" + keyVal);
      }
      var attnele = document.getElementById("attperc" + m);
      // attnele.innerHTML = 0;
      m++;
      attnele.setAttribute("id", "attn" + "perc" + m);
    } else {
      for (var keyVal of practAttnMap.keys()) {
        var attnele = document.getElementById("attperc" + m);
        attnele.innerHTML = 0;
        m++;
        attnele.setAttribute("id", "attnpract" + keyVal);
      }
    }
    var attnele = document.getElementById("attperc" + m);
    attnele.innerHTML = 0;
    m++;
    attnele.setAttribute("id", "attn" + "mini");

    var attnele = document.getElementById("attperc" + m);
    attnele.innerHTML = 0;
    m++;
    attnele.setAttribute("id", "attn" + "minor");

    var attnele = document.getElementById("attperc" + m);
    attnele.innerHTML = 0;
    m++;
    attnele.setAttribute("id", "attn" + "major");

    var attnele = document.getElementById("attperc" + m);
    m++;
    attnele.setAttribute("id", "attn" + "remark");

    /***********************************************
    adding attendance to the attendance % field
    ***********************************************/
    var a = subSet.size;
    // var b = electSet.size;
    var c = practSet.size;

    var a1 = 0;
    for (var keyVal of subAttnMap.keys()) {
      var attnele = document.getElementById("attnsub" + keyVal);
      attnele.innerHTML = subAttnMap.get(keyVal);
      a1 += parseFloat(attnele.innerHTML);
    }
    // for (var keyVal of electAttnMap.keys()) {
    //   var attnele = document.getElementById("attn" + keyVal);
    //   attnele.innerHTML = electAttnMap.get(keyVal);
    //   a1 += parseFloat(attnele.innerHTML);
    // }
    var a2 = 0;
    for (var keyVal of practAttnMap.keys()) {
      var attnele = document.getElementById("attnpract" + keyVal);
      attnele.innerHTML = practAttnMap.get(keyVal);
      a2 += parseFloat(attnele.innerHTML);
    }
    if (document.getElementById("total1").innerHTML == 0)
      document.getElementById("perat1").innerHTML = 0;
    else
      document.getElementById("perat1").innerHTML = a1 / (a);
    if (document.getElementById("total2").innerHTML == 0)
      document.getElementById("perat2").innerHTML = 0;
    else
      document.getElementById("perat2").innerHTML = a2 / c;

    // THE ORGINAL CODE

    if (document.getElementById("perat1").innerHTML == 0 || document.getElementById("perat1").innerHTML == 'NaN')
      document.getElementById("perat1").innerHTML = 100;
    if (document.getElementById("perat2").innerHTML == 0 || document.getElementById("perat2").innerHTML == 'NaN')
      document.getElementById("perat2").innerHTML = 100;


    // ===============================================================
    //                Complete Project Bottom Section
    // ===============================================================
    var miniavg = 0
    for (var i = 0; i < parseInt($("#numberofmini").val()); i++) {
      if ($("#inputminival" + i).val() != "") {
        miniavg += parseInt($("#inputminival" + i).val());
        console.log("miniavg======== " + miniavg);
      }
    }
    if (miniavg > 0)
      miniavg /= parseInt($("#numberofmini").val());

    var minoravg = 0;
    for (var i = 0; i < parseInt($("#numberofminor").val()); i++) {
      if ($("#inputminorval" + i).val() != "") {
        minoravg += parseInt($("#inputminorval" + i).val());
        console.log("minoravg======== " + minoravg);
      }
    }
    if (minoravg > 0)
      minoravg /= parseInt($("#numberofminor").val());

    var majoravg = 0
    for (var i = 0; i < parseInt($("#numberofmajor").val()); i++) {
      if ($("#inputmajorval" + i).val() != "") {
        majoravg += parseInt($("#inputmajorval" + i).val());
        console.log("majoravg======== " + majoravg);
      }
    }
    if (majoravg > 0)
      majoravg /= parseInt($("#numberofmajor").val());

    $("#attnmini").html(miniavg);
    $("#attnminor").html(minoravg);
    $("#attnmajor").html(majoravg);

    if(miniavg == 0)
      miniavg = 100;
    if(minoravg == 0)
      minoravg = 100;
    if(majoravg == 0)
      majoravg = 100;

    $("#perat3").html((miniavg + minoravg + majoravg) / 3);

    if (document.getElementById("perat3").innerHTML == 0 || document.getElementById("perat3").innerHTML == 'NaN')
      document.getElementById("perat3").innerHTML = 100;

    var A = (parseFloat($("#perat1").text()) * 0.55) + (parseFloat($("#perat2").text()) * 0.3) + (parseFloat($("#perat3").text()) * 0.15);
    $(".A-val").html(A);

    /*total project hours calculation*/
    var PLANEDHRS = (parseFloat($('#mini-input-planned').val()) + parseFloat($('#minor-input-planned').val()) + parseFloat($('#major-input-planned').val()));
    // var PLANEDHRS = parseFloat($("#total3").text())
    var part1 = (parseFloat($('#total1').text()) / (parseFloat($('#inputTheoryAssn').val())));
    if (!(part1 > 0) || part1 == 'Infinity') {
      part1 = 1;
    }
    var part2 = (parseFloat($('#total2').text()) / parseFloat($('#inputPracsAssn').val() * 2-electcounter));
    if (!(part2 > 0) || part2 == 'Infinity') {
      part2 = 1;
    }
    var part3 = (parseFloat($('#total3').text()) / PLANEDHRS);
    if (!(part3 > 0) || part3 == 'Infinity') {
      part3 = 1;
    }

    console.log("Part1 " + part1);
    console.log("Part2 " + part2);
    console.log("Part3 " + part3);
    var PS1 = (part1 * 50);
    var PS2 = (part2 * 30);
    var PS3 = (part3 * 20);
    var PS = PS1 + PS2 + PS3;
    var Q = (PS * A) / 100;
    // var allSubjects { PDS: "value1", HMI: "value2", DWM: "", ML: "", BDA: "", DF: "", CCL: ""};
    // console.log(allSubjects[PDS]);

    // var avgTnessQtnt;
    // var R = PS * avgTnessQtnt;
    document.getElementById("Pscore").innerHTML = PS;
    document.getElementById("Qscore").innerHTML = Q;
    // $("#Pscore").html(PS);
    // $("#Qscore").html(Q);
    // $("#Rscore").html(R);

    var tq = new Map();

    tq['PDS'] = 1;
    tq['HMI'] = 0.9;
    tq['DWM'] = 1;
    tq['ML'] = 1.1;
    tq['BDA'] = 1;
    tq['DF'] = 1;
    tq['CCL'] = 1.1;

    tq['AM-IV'] = 1.1;
    tq['AOA'] = 1.1;
    tq['COA'] = 1;
    tq['CG'] = 1;
    tq['OS'] = 1;
    tq['OSTL'] = 1;

    tq['SPCC'] = 1.1;
    tq['MCC'] = 1;
    tq['DD'] = 1;
    tq['SE'] = 1;
    tq['OR'] = 1;
    tq['SPM'] = 0.9;
    tq['FR'] = 0.9;
    tq['NPL'] = 1;

    tq['AM-II'] = 1;
    tq['AP-II'] = 1;
    tq['AC-II'] = 1;
    tq['ED'] = 1;
    tq['SPA'] = 1;
    tq['CS'] = 1;
    //for pracs
    tq['pds'] = 1;
    tq['hmi'] = 0.9;
    tq['dwm'] = 1;
    tq['ml'] = 1.1;
    tq['bda'] = 1;
    tq['df'] = 1;
    tq['ccl'] = 1.1;

    tq['am-IV'] = 1.1;
    tq['aoa'] = 1.1;
    tq['coa'] = 1;
    tq['cg'] = 1;
    tq['os'] = 1;
    tq['ostl'] = 1;

    tq['spcc'] = 1.1;
    tq['mcc'] = 1;
    tq['dd'] = 1;
    tq['se'] = 1;
    tq['or'] = 1;
    tq['spm'] = 0.9;
    tq['fr'] = 0.9;
    tq['npl'] = 1;

    tq['am-II'] = 1;
    tq['ap-II'] = 1;
    tq['ac-II'] = 1;
    tq['ed'] = 1;
    tq['spa'] = 1;
    tq['cs'] = 1;

    var atq = 0;

    for (let key of subSet.keys()) {
      if (tq[key])
        atq = atq + tq[key] * subCountMap.get(key);
      console.log(key);
      console.log(tq[key] * subCountMap.get(key));
    }
    for (let key of practSet.keys()) {
      if (tq[key])
        atq = atq + tq[key] * practCountMap.get(key);
      console.log(key);
      console.log(tq[key] * practCountMap.get(key));
    }

    var a = parseInt(document.getElementById("inputTheoryCond").value);
    var b = parseInt(document.getElementById("inputPracsCond").value);

    if (a == 0 && b == 0 || isNaN(a) && isNaN(b))
      atq = 1;
    else {
      if (isNaN(a) && (!isNaN(b) || b==0))
        a = 0;
      if (isNaN(b) && (!isNaN(a) || a==0))
        b = 0;
      atq = atq / (a + b);
    }
    console.log("atq is " + atq);
    if(Q*atq>100)          // conduct score R
      document.getElementById("Rscore").innerHTML = 100;
    else
      document.getElementById("Rscore").innerHTML = Q * atq;

    var table2 = document.createElement('table');
    table2.setAttribute('class', 'table table-bordered table-inverse datatable text-center');

    var tableHead = document.createElement('THEAD');
    table2.appendChild(tableHead);
    var tr = document.createElement('TR');
    tr.innerHTML = '<th class="text-center">Total hours of Theory Assigned</th><th class="text-center">Total hours of Pracs Assigned</th><th class="text-center">Total hours of Project Assigned</th>'
    tableHead.appendChild(tr);
    table2.appendChild(tableHead);

    var tableBody = document.createElement('TBODY');
    table2.appendChild(tableBody);
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    var td = document.createElement('TD');
    if (($('#inputTheoryAssn').val()) == "") {
      td.innerHTML = 0;
    } else {
      td.innerHTML = ($('#inputTheoryAssn').val());
    }
    tr.appendChild(td);
    var td = document.createElement('TD');
    if ($('#inputPracsAssn').val() == "") {
      td.innerHTML = 0;
    } else {
      td.innerHTML = $('#inputPracsAssn').val() * 2-electcounter;
    }
    tr.appendChild(td);
    var td = document.createElement('TD');
    td.innerHTML = (PLANEDHRS);
    tr.appendChild(td);

    tgen.appendChild(table2);

    var br = document.createElement('br');
    tgen.appendChild(br);

    var backtoproj = document.createElement("INPUT");
    backtoproj.setAttribute('type', 'submit');
    backtoproj.style.align = "center";
    backtoproj.setAttribute('value', 'Back to Project');
    backtoproj.setAttribute('id', 'backtoprojbtn');
    backtoproj.setAttribute('onclick', 'backtoproj()');
    backtoproj.setAttribute('class', 'btn btn-success btn-lg text-center');
    tgen.appendChild(backtoproj);
  }
}

/*
 ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████     ██████  ██████   █████   ██████ ████████ ███████
██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██          ██   ██ ██   ██ ██   ██ ██         ██    ██
██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████       ██████  ██████  ███████ ██         ██    ███████
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██          ██      ██   ██ ██   ██ ██         ██         ██
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████     ██      ██   ██ ██   ██  ██████    ██    ███████
*/

function generatePracs() {
  var b = parseInt(document.getElementById("inputPracsCond").value);
  var prac = document.getElementById("prac");
  if (b > 0) {
    var prac = document.getElementById("prac");
    var a = parseInt(document.getElementById("inputPracsCond").value);
    var table = document.createElement('table');
    table.setAttribute('class', 'table');
    var thead = document.createElement('thead');
    thead.setAttribute('class', 'thead-inverse');
    var tr = document.createElement('tr');
    var th3 = document.createElement('th');
    th3.innerHTML = "<b>Class</b>";
    // th3.setAttribute('value','Class');
    var th35 = document.createElement('th');
    th35.innerHTML = "<b>Section</b>";
    var th37 = document.createElement('th');
    th37.innerHTML = "<b>Subject Name</b>";
    var th4 = document.createElement('th');
    th4.innerHTML = "<b>Day</b>";
    // th4.setAttribute('value','Day');
    var th5 = document.createElement('th');
    th5.innerHTML = "<b>Attendance</b>";
    // th5.setAttribute('value','Attendance');
    var th55 = document.createElement('th');
    th55.innerHTML = "<b>Total students</b>";

    var th6 = document.createElement('th');
    th6.innerHTML = "<b>Count</b>";
    // th6.setAttribute('value','Count');
    // tr.appendChild(th1);
    // tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th35);
    tr.appendChild(th37);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th55);
    tr.appendChild(th6);
    thead.appendChild(tr);
    table.appendChild(thead);
    prac.appendChild(table);
    for (var i = 1; i <= a; i++) {
      var tr = document.createElement('tr');
      var td3 = document.createElement('td');
      var year = document.createElement("SELECT");
      year.setAttribute('id', 'year');
      year.setAttribute('class', 1500 + i - 1);
      year.setAttribute('onchange', "setPracts(this)");
      var option = document.createElement("option");
      option.text = "";
      option.value = "";
      year.add(option);
      var option = document.createElement("option");
      option.text = "FE";
      option.value = "FE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "SE";
      option.value = "SE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "TE";
      option.value = "TE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      option = document.createElement("option");
      option.text = "BE";
      option.value = "BE";
      // option.setAttribute('onchange','setSubjects()');
      year.add(option);
      td3.appendChild(year);
      var td35 = document.createElement('td');
      // td35.setAttribute('class', 3000 + i - 1);
      var section = document.createElement("SELECT");
      section.setAttribute('class', 'section2');
      var option = document.createElement("option");
      option.text = "A1/A2";
      option.value = "A1/A2";
      section.add(option);
      option = document.createElement("option");
      option.text = "A3/A4";
      option.value = "A3/A4";
      section.add(option);
      option = document.createElement("option");
      option.text = "B1/B2";
      option.value = "B1/B2";
      section.add(option);
      option = document.createElement("option");
      option.text = "B3/B4";
      option.value = "B3/B4";
      section.add(option);
      option = document.createElement("option");
      option.text = "A";
      option.value = "A";
      section.add(option);
      option = document.createElement("option");
      option.text = "B";
      option.value = "B";
      section.add(option);
      option = document.createElement("option");
      option.text = "A+B";
      option.value = "A+B";
      section.add(option);
      td35.appendChild(section);
      var td38 = document.createElement('td');
      var subjects = document.createElement('SELECT');
      subjects.setAttribute('class', 'practs');
      // var subject=document.createElement('option');
      td38.appendChild(subjects);
      var td4 = document.createElement('td');
      var day = document.createElement("SELECT");
      day.setAttribute('class', 'daysPract');
      var option = document.createElement("option");
      option.text = "Mon";
      day.add(option);
      option = document.createElement("option");
      option.text = "Tue";
      day.add(option);
      option = document.createElement("option");
      option.text = "Wed";
      day.add(option);
      option = document.createElement("option");
      option.text = "Thur";
      day.add(option);
      option = document.createElement("option");
      option.text = "Fri";
      day.add(option);
      option = document.createElement("option");
      option.text = "Sat";
      day.add(option);
      td4.appendChild(day);
      var td5 = document.createElement('td');
      var attn = document.createElement('INPUT');
      attn.setAttribute("type", "number");
      attn.setAttribute('class', 5000 + i - 1);
      attn.setAttribute("onkeyup", "getAttendancePracs(this)");
      attn.setAttribute("id", "inputPractical");
      td5.appendChild(attn);

      var td55 = document.createElement('td');
      td55.setAttribute('id', 40000+i-1);
      var percentage = document.createElement('INPUT');
      percentage.setAttribute('type', "number");
      td55.appendChild(percentage);
      td55.innerHTML = "0";

      var td6 = document.createElement('td');
      var percentage = document.createElement('INPUT');
      percentage.setAttribute('type', "number");
      td6.setAttribute('id', 6000 + i - 1);
      td6.appendChild(percentage);
      td6.innerHTML = "0";
      tr.appendChild(td3);
      tr.appendChild(td35);
      tr.appendChild(td38);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td55);
      tr.appendChild(td6);
      table.appendChild(tr);
    }
  }
  document.getElementById("submit-2").disabled = true;


  var cont = document.createElement('div');
  cont.setAttribute('class', 'container');
  cont.setAttribute('id', 'submitabc');
  var submit = document.createElement('INPUT');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'subPracs');
  submit.setAttribute('value', 'Click to enter Projects');
  submit.setAttribute('onclick', 'submitPracs()');
  // submit.addEventListener('click', function(){
  //     // attendanceTotal(prac, "practical");
  //     submitPracs();
  // });
  submit.setAttribute('class', 'btn btn-success btn-lg');
  cont.appendChild(submit);
  prac.appendChild(cont);
}


function setPracts(s) {
  var year = s;
  var classname = year.classList[0];
  // console.log("cname: " + classname);
  var select = document.getElementsByClassName("practs");
  var subject = select[classname - 1500];
  subject.innerHTML = "";
  // console.log(subject);
  if (year.value == 'FE')
    var practlist = ['am', 'ap', 'ac', 'ed', 'spa', 'cs'];
  else if (year.value == 'SE')
    var practlist = ['am-IV', 'aoa', 'coa', 'os', 'ostl', 'cg'];
  else if (year.value == 'TE')
    var practlist = ['spcc', 'se', 'dd', 'mcc', 'npl', 'spm', 'or', 'fr'];
  else if (year.value == 'BE')
    var practlist = ['dwm', 'hmi', 'pds', 'ccl', 'ml', 'bda', 'df'];
  // console.log(year);
  // console.log(sublist);
  var subjects = document.getElementsByClassName("practs");
  // console.log(subjects);
  for (var sub in practlist) {
    // console.log(sub);
    var subject = document.createElement('option');
    subject.value = practlist[sub];
    subject.text = practlist[sub].toUpperCase();
    subjects[classname - 1500].add(subject);
  }
}

function getAttendancePracs(attn) {
  var classname = attn.classList[0];
  // console.log("classname: "+classname);
  classname = classname - 5000;

  console.log("Pracs classname: " + classname);
  var select = document.getElementsByClassName("practs");
  console.log("Pracs select: " + select.value);
  var subject = select[classname];
  console.log("Pracs subject: " + subject);

  var totalStudents=document.getElementById(classname+40000);

  if (subject.value == 'or' || subject.value == 'spm' || subject.value == 'fr' || subject.value == 'ml' || subject.value == 'bda' || subject.value == 'df') {
    var attend = new Map();
    attend['ortea'] = 7;
    attend['orteb'] = 7;
    attend['ortea+b'] = 14;
    attend['spmtea'] = 71;
    attend['spmteb'] = 53;
    attend['spmtea+b'] = 124;
    attend['frtea'] = 2;
    attend['frteb'] = 21;
    attend['frtea+b'] = 23;
    attend['mlbea'] = 29;
    attend['mlbeb'] = 57;
    attend['mlbea+b'] = 86;
    attend['bdabea'] = 31;
    attend['bdabeb'] = 17;
    attend['bdabea+b'] = 48;
    attend['dfbea'] = 9;
    attend['dfbeb'] = 1;
    attend['dfbea+b'] = 10;

    var curattn = Number(attn.value);
    console.log(curattn);
    var classn = attn.classList[0];
    // console.log(typeof(classn));
    console.log(classn);
    var classname = document.getElementsByClassName(classn - 3500)[0].value;
    // console.log("clasnname" + classname);
    var select = document.getElementsByClassName("section2");
    // console.log(select);
    var section = select[classn - 5000];
    // console.log(section);
    var secval = section.value;
    // console.log(secval);
    var classname = document.getElementsByClassName(classn - 3500)[0].value + secval;
    // console.log("classname" + classname);
    // console.log(Number(classn)+100);
    var data = subject.value + classname;
    data = data.toLowerCase();
    console.log(data);
    var count = document.getElementById(Number(classn) + 1000);
    // console.log("count"+count);
    // console.log("attncname"+attn[classname]);
    count.innerHTML = curattn / attend[data] * 100;
    totalStudents.innerHTML=attend[data];
  } else {

    var attend = new Map();
    attend['FEA1/A2'] = 60;
    attend['FEA3/A4'] = 60;
    attend['FEB1/B2'] = 60;
    attend['FEB3/B4'] = 60;
    attend['SEA1/A2'] = 42;
    attend['SEA3/A4'] = 38;
    attend['SEB1/B2'] = 39;
    attend['SEB3/B4'] = 36;
    attend['TEA1/A2'] = 42;
    attend['TEA3/A4'] = 40;
    attend['TEB1/B2'] = 38;
    attend['TEB3/B4'] = 43;
    attend['BEA1/A2'] = 36;
    attend['BEA3/A4'] = 33;
    attend['BEB1/B2'] = 40;
    attend['BEB3/B4'] = 35;

    // console.log("attn value: "+Number(attn.value));
    var curattn = Number(attn.value);
    // console.log("curattn: "+curattn);
    var classn = attn.classList[0];
    // console.log("classn:= " + Number(classn));
    var classname = document.getElementsByClassName(classn - 3500)[0].value;
    var select = document.getElementsByClassName("section2");
    // console.log("select:= "+select);
    var section = select[classn - 5000];
    // console.log("section:= "+section);
    var secval = section.value;
    // console.log("secval: "+secval);
    var classname = document.getElementsByClassName(classn - 3500)[0].value + secval;
    // console.log("classname: " + classname);
    // console.log(Number(classn)+100);
    var count = document.getElementById(Number(classn) + 1000);
    // console.log(count);
    // console.log(attn[classname]);
    count.innerHTML = curattn / attend[classname] * 100;
    totalStudents.innerHTML=attend[classname];
  }
}

/*
 ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████     ██████  ██████   ██████       ██ ███████  ██████ ████████
██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██          ██   ██ ██   ██ ██    ██      ██ ██      ██         ██
██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████       ██████  ██████  ██    ██      ██ █████   ██         ██
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██          ██      ██   ██ ██    ██ ██   ██ ██      ██         ██
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████     ██      ██   ██  ██████   █████  ███████  ██████    ██
*/

function generateProject() {
  var proj = document.getElementById("proj");
  // var miniinput = parseInt(document.getElementById("mini-input").value);
  // var minorinput = parseInt(document.getElementById("minor-input").value);
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  if (ptr == 0) {
    var enternumberofgroups = document.createElement("label");
    // enternumberofgroups.innerHTML = "Enter number of groups in each project:";
    enternumberofgroups.setAttribute("class", "numberofgroups");
    // proj.append(enternumberofgroups);
    proj.append(table);
    table.append(tbody);
    // tbody.append(tr);
    var br = document.createElement("br");
    tr.append(br);
    var trmini = document.createElement("tr");
    tbody.append(trmini);
    var trminor = document.createElement("tr");
    tbody.append(trminor);
    var trmajor = document.createElement("tr");
    tbody.append(trmajor);
    var numbermini = document.createElement("td");
    numbermini.setAttribute("class", "text-center");
    numbermini.innerHTML = "<input class='form-control' type='number' placeholder='Mini project' id='numberofmini' value=" + "0" + " onchange='minigroups()'>";
    // numbermini.setAttribute('placeholder', 'Number of groups in mini project');

    var numberminor = document.createElement("td");
    numberminor.setAttribute("class", "text-center");
    numberminor.innerHTML = "<input class='form-control' type='number' placeholder='Minor project' id='numberofminor' value=" + "0" + " onchange='minorgroups()'>";
    // numberminor.setAttribute('placeholder', 'Number of groups in minor project');

    var numbermajor = document.createElement("td");
    numbermajor.setAttribute("class", "text-center");
    numbermajor.innerHTML = "<input class='form-control' type='number' placeholder='Major project' id='numberofmajor' value=" + "0" + " onchange='majorgroups()'>";
    // numbermajor.setAttribute('placeholder', 'Number of groups in major project');

    tbody.append(numbermini);
    tbody.append(numberminor);
    tbody.append(numbermajor);
    // trmini.append(numbermini);
    // trminor.append(numberminor);
    // trmajor.append(numbermajor);
    ptr = 1;
  }
}


//Enter number of groups = label
function minigroups() {

  if ($("#tablemini").length > 0) {
    $("#tablemini").remove();
    $("#tableminilabel").remove();
  }

  var proj = document.getElementById("proj");
  var enternumberofgroups = document.createElement("h3");
  enternumberofgroups.innerHTML = "Enter details of each group of mini project:";
  enternumberofgroups.setAttribute("class", "numberofgroups1");
  enternumberofgroups.setAttribute("id", "tableminilabel");
  proj.append(enternumberofgroups);

  var input = parseInt(document.getElementById("numberofmini").value);
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  table.setAttribute('id', 'tablemini');
  var tbody = document.createElement("tbody");
  proj.append(table);
  table.append(tbody);
  for (var i = 0; i < input; i++) {
    console.log("ith value in mini groups is " + i);
    // inputmini.setAttribute("class", "text-center");
    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr" + i);
    tbody.append(tr);
    var br = document.createElement("br");
    tr.append(br);
    var inputminigroup = document.createElement("td");
    inputminigroup.setAttribute("id", "labelmini" + i);
    // inputminigroup.innerHTML = "<input class='form-control' type='number' id='inputminigroup"+i+"'>";
    // inputminigroup.setAttribute("onchange", "minimembers(labelmini"+i+", "+i+")");
    tr.append(inputminigroup);
    minimembers($("#labelmini" + i), i);
    //inputmini sets an onchange minimembers passing values of the number of minimembers and the entire table data
  }
  if ($('#generateTableFinal').css('display') == 'none') {
    $('#generateTableFinal').css('display', 'initial');
  }
  if ($('#backToPracs').css('display') == 'none') {
    $('#backToPracs').css('display', 'initial');
  }
}
// incomplete
function minorgroups() {

  if ($("#tableminor").length > 0) {
    $("#tableminor").remove();
    $("#tableminorlabel").remove();
  }

  var proj = document.getElementById("proj2");
  var enternumberofgroups = document.createElement("h3");
  enternumberofgroups.innerHTML = "Enter details of each group of minor project:";
  enternumberofgroups.setAttribute("class", "numberofgroups2");
  enternumberofgroups.setAttribute("id", "tableminorlabel");
  proj.append(enternumberofgroups);

  var input = parseInt(document.getElementById("numberofminor").value);
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  table.setAttribute('id', 'tableminor');
  var tbody = document.createElement("tbody");
  proj.append(table);
  table.append(tbody);
  for (var i = 0; i < input; i++) {
    // inputmini.setAttribute("class", "text-center");
    var tr2 = document.createElement("tr");
    tr2.setAttribute("id", "tr2" + i);
    tbody.append(tr2);
    var br = document.createElement("br");
    tr2.append(br);
    var inputminorgroup = document.createElement("td");
    inputminorgroup.setAttribute("id", "labelminor" + i);
    // inputminorgroup.innerHTML = "<input class='form-control' type='number' id='inputminorgroup"+i+"'>";
    // inputminorgroup.setAttribute("onchange", "minormembers(labelminor"+i+", "+i+")");
    tr2.append(inputminorgroup);
    minormembers($("#labelminor" + i), i);
    //inputminor sets an onchange minormembers passing values of the number of minormembers and the entire table data
  }
  if ($('#generateTableFinal').css('display') == 'none') {
    $('#generateTableFinal').css('display', 'initial');
  }
  if ($('#backToPracs').css('display') == 'none') {
    $('#backToPracs').css('display', 'initial');
  }
}

function majorgroups() {

  if ($("#tablemajor").length > 0) {
    $("#tablemajor").remove();
    $("#tablemajorlabel").remove();
  }

  var proj = document.getElementById("proj3");
  var enternumberofgroups = document.createElement("h3");
  enternumberofgroups.innerHTML = "Enter details of each group of major project:";
  enternumberofgroups.setAttribute("class", "numberofgroups3");
  enternumberofgroups.setAttribute("id", "tablemajorlabel");
  proj.append(enternumberofgroups);

  var input = parseInt(document.getElementById("numberofmajor").value);
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  table.setAttribute('id', 'tablemajor');
  var tbody = document.createElement("tbody");
  proj.append(table);
  table.append(tbody);
  for (var i = 0; i < input; i++) {
    // inputmini.setAttribute("class", "text-center");
    var tr3 = document.createElement("tr");
    tr3.setAttribute("id", "tr3" + i);
    tbody.append(tr3);
    var br = document.createElement("br");
    tr3.append(br);
    var inputmajorgroup = document.createElement("td");
    inputmajorgroup.setAttribute("id", "labelmajor" + i);
    // inputmajorgroup.innerHTML = "<input class='form-control' type='number' id='inputmajorgroup"+i+"'>";
    // inputmajorgroup.setAttribute("onchange", "majormembers(labelmajor"+i+", "+i+")");
    tr3.append(inputmajorgroup);
    majormembers($("#labelmajor" + i), i);
    //inputmajor sets an onchange majormembers passing values of the number of minimembers and the entire table data
  }
  if ($('#generateTableFinal').css('display') == 'none') {
    $('#generateTableFinal').css('display', 'initial');
  }
  if ($('#backToPracs').css('display') == 'none') {
    $('#backToPracs').css('display', 'initial');
  }

}

function minimembers(trpass, i) {
  // trpass is used so that a new minimembers can be appended below the input.
  var proj = document.getElementById("proj");

  if ($("#minidata" + i).length > 0) {
    document.getElementById("minidata" + i).remove();
    $(".numberofgroups1" + i).remove();
    $("#minitable" + i).remove();
    $("#break1" + i).remove();
  }

  var brent = document.createElement("br");
  brent.setAttribute("id", "break1" + i);
  trpass.append(brent);

  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter total attendance of the members of the mini project group " + (i + 1) + ":";
  enternumberofgroups.setAttribute("class", "numberofgroups1" + i);
  trpass.append(enternumberofgroups);

  // var input = groupno;
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  table.setAttribute('id', 'minitable' + i);
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  tr.setAttribute("id", "minidata" + i);
  trpass.append(table);
  table.append(tbody);
  tbody.append(tr);
  var br = document.createElement("br");
  tr.append(br);

  var inputmini0 = document.createElement("td");
  var day = document.createElement("SELECT");
  day.setAttribute('id', 'projday' + i);
  day.setAttribute('class', 'form-control');
  var option = document.createElement("option");
  option.text = "Mon";
  day.add(option);
  option = document.createElement("option");
  option.text = "Tue";
  day.add(option);
  option = document.createElement("option");
  option.text = "Wed";
  day.add(option);
  option = document.createElement("option");
  option.text = "Thur";
  day.add(option);
  option = document.createElement("option");
  option.text = "Fri";
  day.add(option);
  option = document.createElement("option");
  option.text = "Sat";
  day.add(option);
  inputmini0.append(day);
  tr.append(inputmini0);
  // var tr2 = document.createElement("tr");
  // tbody.append(tr);
  for (var j = 1; j < 3; j++) {
    // inputmini.setAttribute("class", "text-center");
    var inputmini = document.createElement("td");
    //This is the data id for removal of the selected stuff;
    // inputmini.innerHTML = "<input class='form-control' type='number' id='inputmini"+i+j+"' onchange=''>";
    if (j == 1) {
      inputmini.innerHTML = "<input class='form-control' type='number' value=" + 0 + " placeholder='Number of members present' id='inputmini" + i + j + "' onchange=''>";
    } else if (j == 2) {
      inputmini.innerHTML = "<input class='form-control' type='number' value=" + 0 + " placeholder='Total members in group' id='inputmini" + i + j + "' onchange='inpval(" + i + ");'>";
    }
    tr.append(inputmini);
  }
  var inputminival = document.createElement("td");
  var inval = document.createElement("input");
  inval.setAttribute('id', 'inputminival' + i);
  inval.setAttribute('class', 'form-control');
  inval.setAttribute('placeholder', 'Attendance % of group');
  // $("#inputminival"+i).val(0);
  inval.readOnly = true;
  // inputminival.innerHTML = "<input class='form-control' type='number' readonly>";
  inputminival.append(inval);
  tr.append(inputminival);
}

function inpval(i) {
  $("#inputminival" + i).val((parseFloat($("#inputmini" + i + "1").val()) / parseFloat($("#inputmini" + i + "2").val())) * 100);
}

function minormembers(trpass, i) {
  // trpass is used so that a new minimembers can be appended below the input.
  var proj = document.getElementById("proj");

  if ($("#minordata" + i).length > 0) {
    document.getElementById("minordata" + i).remove();
    $(".numberofgroups2" + i).remove();
    $("#minortable" + i).remove();
    $("#break2" + i).remove();
  }

  var brent = document.createElement("br");
  brent.setAttribute("id", "break2" + i);
  trpass.append(brent);

  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter total attendance of the members of the minor project group " + (i + 1) + ":";
  enternumberofgroups.setAttribute("class", "numberofgroups2" + i);
  trpass.append(enternumberofgroups);

  // var input = groupno;
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  table.setAttribute('id', 'minortable' + i);
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  tr.setAttribute("id", "minordata" + i);
  trpass.append(table);
  table.append(tbody);
  tbody.append(tr);

  var br = document.createElement("br");
  tr.append(br);

  var inputminor0 = document.createElement("td");
  var day = document.createElement("SELECT");
  day.setAttribute('class', 'form-control');
  day.setAttribute('id', 'projday2' + i);
  var option = document.createElement("option");
  option.text = "Mon";
  day.add(option);
  option = document.createElement("option");
  option.text = "Tue";
  day.add(option);
  option = document.createElement("option");
  option.text = "Wed";
  day.add(option);
  option = document.createElement("option");
  option.text = "Thur";
  day.add(option);
  option = document.createElement("option");
  option.text = "Fri";
  day.add(option);
  option = document.createElement("option");
  option.text = "Sat";
  day.add(option);
  inputminor0.append(day);
  tr.append(inputminor0);
  // var tr2 = document.createElement("tr");
  // tbody.append(tr);
  for (var j = 1; j < 3; j++) {
    // inputmini.setAttribute("class", "text-center");
    var inputminor = document.createElement("td");
    // inputminor.innerHTML = "<input class='form-control' type='number' id='inputminor"+i+j+"' onchange=''>";
    if (j == 1) {
      inputminor.innerHTML = "<input class='form-control' type='number' value=" + 0 + " placeholder='Number of members present' id='inputminor" + i + j + "' onchange=''>";
    } else if (j == 2) {
      inputminor.innerHTML = "<input class='form-control' type='number' value=" + 0 + " placeholder='Total members in group' id='inputminor" + i + j + "' onchange='minorval(" + i + ")'>";
    }
    tr.append(inputminor);
  }
  var inputminorval = document.createElement("td");
  var inval = document.createElement("input");
  inval.setAttribute('id', 'inputminorval' + i);
  inval.setAttribute('class', 'form-control');
  inval.setAttribute('placeholder', 'Attendance % of group');
  // $("#inputminival"+i).val(0);
  inval.readOnly = true;
  // inputminival.innerHTML = "<input class='form-control' type='number' readonly>";
  inputminorval.append(inval);
  tr.append(inputminorval);
}

function minorval(i) {
  $("#inputminorval" + i).val((parseFloat($("#inputminor" + i + "1").val()) / parseFloat($("#inputminor" + i + "2").val())) * 100);
}

function majormembers(trpass, i) {
  // trpass is used so that a new minimembers can be appended below the input.
  var proj = document.getElementById("proj");

  if ($("#majordata" + i).length > 0) {
    document.getElementById("majordata" + i).remove();
    $(".numberofgroups3" + i).remove();
    $("#majortable" + i).remove();
    $("#break3" + i).remove();
  }

  var brent = document.createElement("br");
  brent.setAttribute("id", "break3" + i);
  trpass.append(brent);

  var enternumberofgroups = document.createElement("label");
  enternumberofgroups.innerHTML = "Enter total attendance of the members of the major project group " + (i + 1) + ":";
  enternumberofgroups.setAttribute("class", "numberofgroups3" + i);
  trpass.append(enternumberofgroups);

  // var input = groupno;
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  table.setAttribute('id', 'majortable' + i);
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  tr.setAttribute("id", "majordata" + i);
  trpass.append(table);
  table.append(tbody);
  tbody.append(tr);
  var br = document.createElement("br");
  tr.append(br);

  var inputmajor0 = document.createElement("td");
  var day = document.createElement("SELECT");
  day.setAttribute('id', 'projday3' + i);
  day.setAttribute('class', 'form-control');
  var option = document.createElement("option");
  option.text = "Mon";
  day.add(option);
  option = document.createElement("option");
  option.text = "Tue";
  day.add(option);
  option = document.createElement("option");
  option.text = "Wed";
  day.add(option);
  option = document.createElement("option");
  option.text = "Thur";
  day.add(option);
  option = document.createElement("option");
  option.text = "Fri";
  day.add(option);
  option = document.createElement("option");
  option.text = "Sat";
  day.add(option);
  inputmajor0.append(day);
  tr.append(inputmajor0);
  // var tr2 = document.createElement("tr");
  // tbody.append(tr);
  for (var j = 1; j < 3; j++) {
    // inputmini.setAttribute("class", "text-center");
    var inputmajor = document.createElement("td");
    inputmajor.setAttribute("id", "majordata" + i);
    // inputmajor.innerHTML = "<input class='form-control' type='number' id='inputmajor"+i+j+"' onchange=''>";
    if (j == 1) {
      inputmajor.innerHTML = "<input class='form-control' type='number' value=" + 0 + " placeholder='Number of members present' id='inputmajor" + i + j + "' onchange=''>";
    } else if (j == 2) {
      inputmajor.innerHTML = "<input class='form-control' type='number' value=" + 0 + " placeholder='Total members in group' id='inputmajor" + i + j + "' onchange='majorval(" + i + ")'>";
    }
    tr.append(inputmajor);
  }
  var inputmajorval = document.createElement("td");
  var inval = document.createElement("input");
  inval.setAttribute('id', 'inputmajorval' + i);
  inval.setAttribute('class', 'form-control');
  inval.setAttribute('placeholder', 'Attendance % of group');
  // $("#inputminival"+i).val(0);
  inval.readOnly = true;
  // inputminival.innerHTML = "<input class='form-control' type='number' readonly>";
  inputmajorval.append(inval);
  tr.append(inputmajorval);
}

function majorval(i) {
  $("#inputmajorval" + i).val((parseFloat($("#inputmajor" + i + "1").val()) / parseFloat($("#inputmajor" + i + "2").val())) * 100);
}

function submitTheory() {
  // window.location.href="pract.php";
  //   $("").onclick();
}

function submitPracs() {
  // if ($('.table-btns').css('display') != 'block') {
  //   $('.table-btns').css('display', 'block');
  // }
  myProjDisplay();
  // window.location.href="pract.php";
  //   $("").onclick();
}

// function submitPracts() {
//   myPractDisplay();
//   // window.location.href="pract.php";
//   //   $("").onclick();
// }

// function attendanceTotal(fries, prorth) {
//   var attnto = 0;
//   var a;
//   var attnli;
//   console.log(fries);
//   if (prorth == "theory") {
//     a = parseInt(document.getElementById("inputTheoryCond").value);
//     attnli = document.querySelectorAll('#inputTheory');
//   } else if (prorth == "practical") {
//     a = parseInt(document.getElementById("inputPracsCond").value);
//     attnli = document.querySelectorAll('#inputPractical');
//   }
//   for (var i = 0; i < a; i++) {
//     attnto = attnto + parseInt(attnli[i].value);
//   }
//   console.log(attnto);
//   var newElem = document.createElement('div');
//   newElem.innerHTML = "<br>";
//   var newrow=document.createElement('div');
//   newrow.setAttribute("class", "row");
//   fries.appendChild(newElem);
//   fries.appendChild(newrow);
//   var totatval=document.createElement('input');
//   totatval.setAttribute('type', 'text');
//   totatval.setAttribute('class', 'btn btn-primary');
//   totatval.setAttribute('value', attnto);
//   totatval.readOnly = true;
//   // totatval.innerHTML="<h1>"+attnto+"</h1>"
//   fries.appendChild(totatval);
// }

function myProjDisplay() {
  if ($('#myProjectDisplay').css('display') != 'block') {
    $('#myProjectDisplay').css('display', 'block');
  }
  if ($('#backToPracs').css('display') != 'initial') {
    $('#backToPracs').css('display', 'initial');
  }
  if ($('#generateTableFinal').css('display') != 'initial') {
    $('#generateTableFinal').css('display', 'initial');
  }
  if ($('#myPractDisplay').css('display') == 'block') {
    $('#myPractDisplay').css('display', 'none');
  }
  if ($('.table-btns').css('display') != 'block') {
    $('.table-btns').css('display', 'block');
  }
}

function myPractDisplay() {
  if ($('#myPractDisplay').css('display') == 'none') {
    $('#myPractDisplay').css('display', 'block');
  }
  if ($('.theorySection').css('display') == 'block') {
    $('.theorySection').css('display', 'none');
  }
  // if ($('.table-btns').css('display') != 'none') {
  //   $('.table-btns').css('display', 'none');
  // }
  // if ($('#backToPracs').css('display') == 'initial') {
  //   $('#backToPracs').css('display', 'none');
  // }
  if ($('#generateTableFinal').css('display') == 'initial') {
    $('#generateTableFinal').css('display', 'none');
  }
}

function genT() {
  generateTable();
  if ($('#myProjectDisplay').css('display') != 'none') {
    $('#myProjectDisplay').css('display', 'none');
  }
  if ($('.genTbtn').css('display') != 'none') {
    $('.genTbtn').css('display', 'none');
  }
  if ($('#backToPracs').css('display') == 'initial') {
    $('#backToPracs').css('display', 'none');
  }
  if ($('#generateTableFinal').css('display') == 'initial') {
    $('#generateTableFinal').css('display', 'none');
  }
}

function bToPracs() {
  // window.location.reload(true);
  $('#myProjectDisplay').css('display', 'none');
  if ($('#myPractDisplay').css('display') == 'none') {
    $('#myPractDisplay').css('display', 'block');
  }
  $('.table-btns').css('display', 'none');

  if ($('#backToPracs').css('display') == 'initial') {
    $('#backToPracs').css('display', 'none');
  }
  if ($('#generateTableFinal').css('display') == 'initial') {
    $('#generateTableFinal').css('display', 'none');
  }
}

function btoTheory() {
  $('#myPractDisplay').css('display', 'none');
  $('.theorySection').css('display', 'block');
}

function backtoproj() {
  $('#tablegenerated').css('display', 'none');
  $('#myProjectDisplay').css('display', 'block');
  if ($('.table-btns').css('display') != 'block') {
    $('.table-btns').css('display', 'block');
  }
  if ($('#backToPracs').css('display') != 'initial') {
    $('#backToPracs').css('display', 'initial');
  }
  if ($('#generateTableFinal').css('display') != 'initial') {
    $('#generateTableFinal').css('display', 'initial');
  }
}
