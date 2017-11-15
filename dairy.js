var dairy = openDatabase("dairy","1.0","Dairy",5 * 1024 * 1024);
dairy.transaction(function(tx){
     tx.executeSql("CREATE TABLE IF NOT EXISTS NOTES (notes TEXT,time TEXT,date TEXT, mth TEXT)"); });

function insetToDB(time2,day,mtH,note) {
 dairy.transaction(function(tx) {
     // Выполняем SQL запрос на добавление записи в таблицу
     tx.executeSql("INSERT INTO NOTES (time, date, mth, notes) VALUES (?,?,?,?)", [time2, day, mtH, note])
     // Размещаем данные на странице (подробно о функции немного позже)
  });
}



function getDate() {
  var date = new Date();
  var msg = '';
  msg = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  return msg;
}

function getTime() {
  var date = new Date();
  var msg = '';
  var mins = date.getMinutes();
  mins = (mins.toString().length == 2) ? mins : '0' + mins ;
  
  msg = date.getHours() + ':' + mins;
  return msg;
}

function getMonthName() {
  var date = new Date();
  var month = date.getMonth() + 1;
  switch(month) {
    case 1:
      return 'январь';
      break;
    case 2:
      return 'февраль';
      break;
    case 3:
      return 'март';
      break;
    case 4:
      return 'апрель';
      break;
    case 5:
      return 'май';
      break;
    case 6: 
      return 'июнь';
      break;
    case 7:
      return 'июль';
      break;
    case 8:
      return 'август';
      break;
    case 9:
      return 'сентябрь';
      break;
    case 10:
      return 'октябрь';
      break;
    case 11:
      return 'ноябрь';
      break;
    case 12:
      return 'декабрь';
      break;
  }
}

function inset(elem, claS, fun) {
  var elem = document.getElementsByClassName(claS)[0];
    fun = eval(fun);
    elem.innerHTML = fun;
}

function getMonthDay() {
  var date = new Date();
  return date.getDate();
}


function createNote(text) {
     
  var Ndiv = document.createElement('div');
  
  Ndiv.className = 'note';
  Ndiv.innerHTML = text;
  var parent = document.getElementsByClassName('wrap');
  
  parent[parent.length - 1].appendChild(Ndiv);
  
}










function createNWr() {
  var wraps = document.getElementsByClassName('wrap');
  var NumW = wraps.length;
  var nWrap = document.createElement('div');
  nWrap.className = 'wrap';
  nWrap.id = NumW + 1;
  document.body.appendChild(nWrap);
  
  createTime();
  createDate();
  
  Note = prompt('TEXT');
  createNote(Note);
 
  
  insetToDB(getTime(),getMonthDay(),getMonthName(),Note);
}


function AddNote(text) {
  var Notediv = document.createElement('div');
  Notediv.className = 'note';
  Notediv.innerHTML = text;
  var parent = document.getElementsByClassName('wrap');
  
  parent[parent.length - 1].appendChild(Notediv);
}







function createWr(x) {
  
  var wraps = document.getElementsByClassName('wrap');
  var NumW = wraps.length;
  var wrap = document.createElement('div');
  wrap.className = 'wrap';
  wrap.id = NumW + 1;
  document.body.appendChild(wrap);
  
  getTimeDB(x);
  getDateDB(x);
  getNotesDB(x);
}

function getTimeDB(x) {
  var time = times[x];
  var Tdiv = document.createElement('div');
  Tdiv.className = 'time';
  Tdiv.id = time;
  Tdiv.innerHTML = time;
  var parent = document.getElementsByClassName('wrap');
  
  parent[parent.length - 1].appendChild(Tdiv);
}


function getDateDB(x) {
  var date = document.createElement('div');
  date.className = 'date';
  var lDate = date[date.length - 1];
  var parent = document.getElementsByClassName('wrap');
  parent[parent.length - 1].appendChild(date);

function getMonthDDB(x) {
  var monthD = monthDs[x];
  var MDdiv = document.createElement('span');
  MDdiv.className = 'day';
  
  MDdiv.innerHTML = monthD;
  var parent = document.getElementsByClassName('date');
  
  parent[parent.length - 1].appendChild(MDdiv);
}

function getMonthNDB(x) {
  var monthN = monthNs[x];
  var MNdiv = document.createElement('span');
  MNdiv.className = 'mth';
  
  MNdiv.innerHTML = monthN;
  var parent = document.getElementsByClassName('date');
  
  parent[parent.length - 1].appendChild(MNdiv);
}
  getMonthDDB(x);
  getMonthNDB(x);
}

function getNotesDB(x) {
  var note = noteS[x];
  var NoteDiv = document.createElement('div');
  NoteDiv.className = 'note';
  
  NoteDiv.innerHTML = note;
  var parent = document.getElementsByClassName('wrap');
  
  parent[parent.length - 1].appendChild(NoteDiv);
}




function createTime() {
  var time = getTime();
  var Tdiv = document.createElement('div');
  Tdiv.className = 'time';
  Tdiv.id = time;
  Tdiv.innerHTML = time;
  var parent = document.getElementsByClassName('wrap');
  
  parent[parent.length - 1].appendChild(Tdiv);
}

function createDate() {
  var date = document.createElement('div');
  date.className = 'date';
  var lDate = date[date.length - 1];
  var parent = document.getElementsByClassName('wrap');
  parent[parent.length - 1].appendChild(date);
  
  function createMonth() {
  var monthName = getMonthName();
  var MNdiv = document.createElement('span');
  MNdiv.className = 'mth';
  MNdiv.innerHTML = monthName;
  date.appendChild(MNdiv);
  }
  
  
  function createDay() {
  var monthDay = getMonthDay();
  var MDdiv = document.createElement('span');
  MDdiv.className = 'day';
  MDdiv.innerHTML = monthDay;
  var parent = document.getElementsByClassName('date');
  date.appendChild(MDdiv);
  }
  
  createDay();
  createMonth();
}




// insertDate('title', 'ttl');
inset('title', 'ttl', 'getDate()');
// inset('span', 'mth', 'getMonthName()');
// inset('div', 'today', 'getTime()');
// inset('div', 'time', 'getTime()');
// inset('span', 'day', 'getMonthDay()');

crt.onclick = createNWr;

// get data from TABLE 

function getTimeFromDB() { 
  
      dairy.transaction(function(tx){
       
       tx.executeSql("SELECT time FROM NOTES", [], function(tx,result){
           
           for (var i=0; i < result.rows.length; i++) {
               
               time = result.rows.item(i).time;
               /* time = result.rows.item(i).time;
               date = result.rows.item(i).date;
               */
               addToTime(time);
               
           }
         
       });
   })
                     
                         }

function getMonthNFromDB() { 
  
      dairy.transaction(function(tx){
       
       tx.executeSql("SELECT mth FROM NOTES", [], function(tx,result){
           
           for (var i=0; i < result.rows.length; i++) {
               
               monthN = result.rows.item(i).mth;
               /* time = result.rows.item(i).time;
               date = result.rows.item(i).date;
               */
               addToMonthN(monthN);
               
           }
         
       });
   })
                     
                         }

function getMonthDFromDB() { 
  
      dairy.transaction(function(tx){
       
       tx.executeSql("SELECT date FROM NOTES", [], function(tx,result){
           
           for (var i=0; i < result.rows.length; i++) {
               
               monthD = result.rows.item(i).date;
               /* time = result.rows.item(i).time;
               date = result.rows.item(i).date;
               */
               addToMonthD(monthD);
               
           }
         
       });
   })
                     
                         }

function getNotesFromDB() { 
  
      dairy.transaction(function(tx){
       
       tx.executeSql("SELECT notes FROM NOTES", [], function(tx,result){
           
           for (var i=0; i < result.rows.length; i++) {
               
               note = result.rows.item(i).notes;
               /* time = result.rows.item(i).time;
               date = result.rows.item(i).date;
               */
               addToNotes(note);
               
           }
         
       });
   })
                     
                         }



function showData(x) {
	alert(x);
}

var times = [];
var monthNs = [];
var monthDs = [];
var noteS = [];

function addToTime(value) {
  
  times.push(value);
}

function addToMonthN(value) {
  
  monthNs.push(value);
}

function addToMonthD(value) {
  
  monthDs.push(value ^ 0);
}

function addToNotes(value) {
  
  noteS.push(value);
}

function checkPass() {
  var pass = '13';
  var check = prompt('Пароль?');
  if (check == pass) return true;
  else return false;
}

var notes;

function loadData() {
  if (checkPass()) {
  for(var i = 0; times.length > i; i++) {
    var div = createWr(i);
    load.removeEventListener('click', loadData);
  }
  } else {
    alert('Не-а');
  }
}

var notes;

function findNotes() {
  notes = document.getElementsByClassName('note');
}

function setEvent() {
  for(var i = 0; i < notes.length; i++)
  notes[i].addEventListener('click', changeContent)
}

function prepareData() {
  loadData();
  findNotes();
  setEvent();
  toBottom();
  
}

// createWr();

// loadData();

function toBottom()
{

window.scrollTo(0, document.body.scrollHeight);
}



function showArr(arr) {
  for(var i = 0; i < arr.length; ++i) {
    alert(arr[i]);
  }
}



getTimeFromDB();
getMonthDFromDB();
getMonthNFromDB();
getNotesFromDB();

function changeContent() {
  function insertToDB() {
    var value = this.value;
    
    function setIn(value) {
      alert(value);
    
      database.transaction(function(tx) {
      
      tx.executeSql("UPDATE IN NOTES (notes) VALUES (?)", [value])
    
  })
    } setIn(value);
  }}

        
load.addEventListener('click', prepareData);

