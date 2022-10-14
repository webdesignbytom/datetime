// All get functions gets your time from the utc time zone from your device

let currentTimeAndDate = new Date();
console.log('current time: ' + currentTimeAndDate);

const mainContainer = document.getElementById('mainContainer');

// UNIX
const unixContainer = document.getElementById('unix');
const unixTitle = document.createElement('h3');
const unixTime = document.createElement('p');
const unixInfo = document.createElement('p');
unixTitle.innerText = 'Unix: ';
unixTime.innerText = new Date().getTime();
unixInfo.innerText = 'Num seconds since 1970';
unixContainer.appendChild(unixTitle);
unixContainer.appendChild(unixTime);
unixContainer.appendChild(unixInfo);

// Full date decoded
const timeAndDate = document.createElement('div');
timeAndDate.setAttribute('class', 'date-time');
timeAndDate.setAttribute('id', 'full-time');
console.log('timeAndDate', timeAndDate);
const fullTdTitle = document.createElement('h3');
const fullTdTime = document.createElement('p');
const fullTdInfo = document.createElement('p');
fullTdTitle.innerText = 'Time and date: ';
fullTdTime.innerText = currentTimeAndDate;
fullTdInfo.innerText = 'Full decode of unix time';
timeAndDate.appendChild(fullTdTitle);
timeAndDate.appendChild(fullTdTime);
timeAndDate.appendChild(fullTdInfo);
mainContainer.appendChild(timeAndDate);

// Updating time and date
const updateTimeAndDate = document.createElement('div');
updateTimeAndDate.setAttribute('class', 'date-time');
updateTimeAndDate.setAttribute('id', 'updateTimeAndDate');
const updateTdTitle = document.createElement('h3');

const updateTdContainer = document.createElement('div');
updateTdContainer.setAttribute('id', 'updateTdContainer');

const updateTdInfo = document.createElement('p');
updateTdTitle.innerText = 'Current Time: ';
updateTdInfo.innerText = 'Updating the h,m,s with setInterval';
updateTimeAndDate.appendChild(updateTdTitle);
updateTimeAndDate.appendChild(updateTdContainer);
updateTimeAndDate.appendChild(updateTdInfo);
// updating time inside a div
const currentHour = document.createElement('p');
const currentMinute = document.createElement('p');
const currentSecond = document.createElement('p');
// set the current time
setInterval(() => {
  changeDate = new Date();

  currentHour.innerText = changeDate.getHours() + ': ';
  currentMinute.innerText = changeDate.getMinutes() + ': ';
  currentSecond.innerText = changeDate.getSeconds();
  updateTdContainer.appendChild(currentHour);
  updateTdContainer.appendChild(currentMinute);
  updateTdContainer.appendChild(currentSecond);
}, 1000);

mainContainer.appendChild(updateTimeAndDate);

// updating time to hawaii
const hawaiiTimeContainer = document.createElement('div');
hawaiiTimeContainer.setAttribute('class', 'date-time');
hawaiiTimeContainer.setAttribute('id', 'hawaiiTime');
const hawaiiTitle = document.createElement('h3');

const updateHawaiiTime = document.createElement('div');
updateHawaiiTime.setAttribute('id', 'updateHawaiiTime');

const hawaiiInfo = document.createElement('p');
hawaiiTitle.innerText = 'Hawaii Time: ';
hawaiiInfo.innerText = 'Updating the h,m,s from the beach';

const currentHawaiiHour = document.createElement('p');
const currentHawaiiMinute = document.createElement('p');
const currentHawaiiSecond = document.createElement('p');

hawaiiTimeContainer.appendChild(hawaiiTitle);
hawaiiTimeContainer.appendChild(updateHawaiiTime);
hawaiiTimeContainer.appendChild(hawaiiInfo);

setInterval(() => {
  changeTimeZone = new Date();
  changeTimeZone.setTime(changeTimeZone.getTime() + 10 * 60 * 60 * 1000);

  currentHawaiiHour.innerText = changeTimeZone.getHours() + ': ';
  currentHawaiiMinute.innerText = changeTimeZone.getMinutes() + ': ';
  currentHawaiiSecond.innerText = changeTimeZone.getSeconds();
  updateHawaiiTime.appendChild(currentHawaiiHour);
  updateHawaiiTime.appendChild(currentHawaiiMinute);
  updateHawaiiTime.appendChild(currentHawaiiSecond);
}, 1000);

mainContainer.appendChild(hawaiiTimeContainer);

// Dates displayed
const getDateTimes = new Date()
const dateContainer = document.createElement('div');
dateContainer.setAttribute('class', 'date-time');
dateContainer.setAttribute('id', 'dateContainer');

const dateTitle = document.createElement('h3');
const dateDataContainer = document.createElement('div');
dateDataContainer.setAttribute('id', 'dateDataContainer');
const dateInfo = document.createElement('p');

dateTitle.innerText = 'Current Date: ';
dateInfo.innerText = 'Using getYear()... funcitons';

const currentDay = document.createElement('p');
const currentMonth = document.createElement('p');
const currentYear = document.createElement('p');

console.log('time and date', getDateTimes);
// means get day
currentDay.innerText = getDateTimes.getDate()
// month returns the index for some reason
currentMonth.innerText = getDateTimes.getMonth() + 1
currentYear.innerText = getDateTimes.getFullYear()

dateDataContainer.appendChild(currentDay)
dateDataContainer.appendChild(currentMonth)
dateDataContainer.appendChild(currentYear)

dateContainer.appendChild(dateTitle);
dateContainer.appendChild(dateDataContainer);
dateContainer.appendChild(dateInfo);

mainContainer.appendChild(dateContainer);

// One day from now
const oneDaysTime = document.createElement('div');
oneDaysTime.setAttribute('class', 'date-time');
oneDaysTime.setAttribute('id', 'full-time');
console.log('oneDaysTime', oneDaysTime);
const day1TdTitle = document.createElement('h3');
const day1TdTime = document.createElement('p');
const day1TdInfo = document.createElement('p');
day1TdTitle.innerText = 'One day from now: ';
day1TdTime.innerText = new Date()
day1TdInfo.innerText = 'day1 decode of unix time';
oneDaysTime.appendChild(day1TdTitle);
oneDaysTime.appendChild(day1TdTime);
oneDaysTime.appendChild(day1TdInfo);
mainContainer.appendChild(oneDaysTime);


// Get Functions
let d = new Date();
const getContainer = document.createElement('div');
getContainer.setAttribute('class', 'date-time');
getContainer.setAttribute('id', 'gets')
const getTitle = document.createElement('h3');
const getTimeZone = document.createElement('p');
getTitle.innerText = 'Get TimezoneOffset() ';
getTimeZone.innerText = d.getTimezoneOffset()
getContainer.appendChild(getTitle)
getContainer.appendChild(getTimeZone)
mainContainer.appendChild(getContainer);

// To ISO 
let d2 = new Date();
const d2Container = document.createElement('div');
d2Container.setAttribute('class', 'date-time');
d2Container.setAttribute('id', 'd2')

const d2Title = document.createElement('h3');
const d2Data = document.createElement('p');
const d2Info = document.createElement('p');

d2Title.innerText = 'Iso  ';
d2Data.innerText = d2.toISOString()
d2Info.innerText = 'Z = utc  ';

d2Container.appendChild(d2Title)
d2Container.appendChild(d2Data)
d2Container.appendChild(d2Info)

mainContainer.appendChild(d2Container);

// To locale string versions of printing dates
let d3 = new Date()
const localStringContainer = document.createElement('div');
localStringContainer.setAttribute('class', 'date-time');
localStringContainer.setAttribute('id', 'localeStringContainer');

const localTitle = document.createElement('h3');
const localData = document.createElement('div');
const localInfo = document.createElement('p')

localTitle.innerText = 'Local String: ';

const localDataUK  = document.createElement('p')
const localDataAU = document.createElement('p')
const localDataUS = document.createElement('p')

localDataUK.innerText = d3.toLocaleString('en-UK') + ' UK'
localDataAU.innerText = d3.toLocaleString('en-AU') + ' AU'
localDataUS.innerText = d3.toLocaleString('en-US') + ' US'


localData.appendChild(localDataUK)
localData.appendChild(localDataAU)
localData.appendChild(localDataUS)

localInfo.innerText = 'using toLocaleString()'

localStringContainer.appendChild(localTitle)
localStringContainer.appendChild(localData)
localStringContainer.appendChild(localInfo)
mainContainer.appendChild(localStringContainer);


// updating timeZone from localeString
let d4 = new Date()
const timeZoneContainer = document.createElement('div');
timeZoneContainer.setAttribute('class', 'date-time');
timeZoneContainer.setAttribute('id', 'timeZoneContainer');

const tzTitle = document.createElement('h3');
const tzData = document.createElement('div');
const tzInfo = document.createElement('p')

tzTitle.innerText = 'Time zone: ';

const tzDataUK  = document.createElement('p')
const tzDataUS = document.createElement('p')
const tzDataTK = document.createElement('p')

tzDataUK.innerText = d4.toLocaleString('en-UK') + ' UK'
tzDataUS.innerText = d4.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles'
}) + ' US - LA'

tzData.appendChild(tzDataUK)
tzData.appendChild(tzDataUS)

// tzData.innerText = d3.toLocaleString('en-AU')
tzInfo.innerText = 'using named city'

timeZoneContainer.appendChild(tzTitle)
timeZoneContainer.appendChild(tzData)
timeZoneContainer.appendChild(tzInfo)
mainContainer.appendChild(timeZoneContainer);


// Japan
let d5 = new Date()
const japanContainer = document.createElement('div');
japanContainer.setAttribute('class', 'date-time');
japanContainer.setAttribute('id', 'japanContainer');

const japanTitle = document.createElement('h3');
const japanTime = document.createElement('p');
const japanInfo = document.createElement('p');

japanTitle.innerText = 'Japan:  ';
japanTime.innerText = d5.toLocaleString('ja-JP-u-ca-japanese', {
    timeZone: 'Asia/Tokyo'
})
japanInfo.innerText = 'Japan format and time';

japanContainer.appendChild(japanTitle)
japanContainer.appendChild(japanTime)
japanContainer.appendChild(japanInfo)

mainContainer.appendChild(japanContainer);

// Mess
let d6 = new Date()
const testContainer = document.createElement('div');
testContainer.setAttribute('class', 'date-time');
testContainer.setAttribute('id', 'testContainer');

const testTitle = document.createElement('h3');
const testTimeContainer = document.createElement('div');
const testInfo = document.createElement('p');

testTitle.innerText = 'Any:  ';

const test1  = document.createElement('p')
const test2 = document.createElement('p')
const test3 = document.createElement('p')
const test4 = document.createElement('p')
const test5 = document.createElement('p')
const test6 = document.createElement('p')
const test7 = document.createElement('p')
const test8 = document.createElement('p')

test1.innerText = d6.toLocaleString(
    'default', {weekday: 'long'}
  );
test2.innerText = d6.toLocaleString(
    'default', {weekday: 'short'}
  );
test3.innerText = d6.toLocaleString(
    'default', {weekday: 'narrow'}
)
test4.innerText = d6.toLocaleString(
    'default', {month: 'long'}
)
test5.innerText = d6.toLocaleString(
    'default', {month: 'short'}
)
test6.innerText = d6.toLocaleString(
    'default', {month: 'narrow'}
)
test7.innerText = d6.toLocaleString(
    'default', {year: '2-digit'}
)
test8.innerText = d6.toLocaleString(
    'default', {year: 'numeric'}
)

testTimeContainer.appendChild(test1)
testTimeContainer.appendChild(test2)
testTimeContainer.appendChild(test3)
testTimeContainer.appendChild(test4)
testTimeContainer.appendChild(test5)
testTimeContainer.appendChild(test6)
testTimeContainer.appendChild(test7)
testTimeContainer.appendChild(test8)

testInfo.innerText = 'Days and written info';

testContainer.appendChild(testTitle)
testContainer.appendChild(testTimeContainer)
testContainer.appendChild(testInfo)

mainContainer.appendChild(testContainer);

// timeStyle
let d7 = new Date()
const timeStyleContainer = document.createElement('div');

timeStyleContainer.setAttribute('class', 'date-time');
timeStyleContainer.setAttribute('id', 'timeStyleContainer');

const timeStyleTitle = document.createElement('h3');
const timeStyleData = document.createElement('div');
const timeStyleInfo = document.createElement('p')

timeStyleTitle.innerText = 'Time Style:  ';

const tsItem1 = document.createElement('p')
const tsItem2 = document.createElement('p')
const tsItem3 = document.createElement('p')
const tsItem4 = document.createElement('p')

tsItem1.innerText = d7.toLocaleString(
    'default', {timeStyle: 'long'}
)
tsItem2.innerText = d7.toLocaleString(
    'default', {timeStyle: 'medium'}
)
tsItem3.innerText = d7.toLocaleString(
    'default', {timeStyle: 'short'}
)

tsItem4.innerText = d7.toLocaleString(
    'default', {hour12: true}
)

timeStyleData.appendChild(tsItem1)
timeStyleData.appendChild(tsItem2)
timeStyleData.appendChild(tsItem3)
timeStyleData.appendChild(tsItem4)


timeStyleInfo.innerText = 'Time stlye changes'

timeStyleContainer.appendChild(timeStyleTitle)
timeStyleContainer.appendChild(timeStyleData)
timeStyleContainer.appendChild(timeStyleInfo)

mainContainer.appendChild(timeStyleContainer);

// dateStyle
