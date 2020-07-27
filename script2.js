var nouns = ['area','book','business','case','child','company','country'
,'day','eye','fact','family','government','group','hand','home','job',
'life','lot','man','money','month','mother','Mr','night','number','part','people',
'place','point','problem','program','question','right','room','school','state',
'story','student','study','system','thing','time','water','way','week','woman','word','work','world'
,'year'];

var subject = ["I", "You", "He", "She", "We", "They", "Us"]

var objects = ["Address book","Ashtray","Backpack","Batteries","Box","Brush","Calendar","CD Player","Comb","Computer",
"Match","Cassette","Roll of Film","Folder","Lipstick","Make-up","Mirror","Notebook","Notepad","Pack of cigarettes",
"Pencil","Perfume","Radio cassette player","Scissors","Speakers","Stereo system","Telephone","Television",
"Tickets","Trash can","Video camera","CD","Pen","Mobile phone","Headset"];

var verbs = ["ask", "be","become","begin","call","can","come","could","do","feel", "find","get","give","go","have","hear",
"help","keep","know","leave","let","like","live","look","make","may","mean","might","move","need","play","put"
,"run","say","see","seem","should","show","start","take","talk","tell","think","try","turn","use","want","will"
,"work","would"];

var time = ["In the morning","Last afternoon","This evening","today","yesterday",
"this summer","tomorrow","This night","Tomorrow's noon"];

var places = ['abbey','airport','amusement park','art gallery','bakers', 'bakery','bank','bar','barber','barbershop (US)','beauty parlor (US)','beauty parlour (UK)','bookshop (UK)','bookstore (US)','bus station','butcher','café','canteen','casino','castle','cathedral','chemist','church','cinema','convent','court','dairy','delicatessen','department store','disco','drugstore (US)','factory','fast food restaurant','fire station','fish shop (US)','fishmonger','garage','gas station (US)','gym','hairdresser','hospital','hotel','jail','launderette (UK)','Laundromat (US)','library','market','mosque','museum','newsagent','newsstand (US)']

var nounNum = Math.floor(Math.random()*(nouns.length-1));
var subjectNum = Math.floor(Math.random()*(subject.length-1));
var verbNum = Math.floor(Math.random()*(nouns.length-1));
var timeWordNum = Math.floor(Math.random()*(time.length-1));
var placeNum = Math.floor(Math.random()*(places.length-1));
var objectNum = Math.floor(Math.random()*(objects.length-1));

$(".sentence").text(time[timeWordNum]+" "+ subject[subjectNum]+" "+verbs[verbNum]+" "+objects[objectNum]+" "+places[placeNum])



