var fs = require('fs');

const randomGenerator = (max, min) => {
  return min + Math.floor((max - min) * Math.random());
};

const temperatureRange = [33, 41];
const heartbeatRange = [60, 210];
const systolicBloodPressureRange = [10, 20];
const diastolicBloodPressureRange = [4, 15];
const respiratoryRange = [6, 60];

const generateData = (day, hour, minute, second) => {
  const temperature = randomGenerator(...temperatureRange);
  const heartbeat = randomGenerator(...heartbeatRange);
  const respiratory = randomGenerator(...respiratoryRange);
  const sysBP = randomGenerator(...systolicBloodPressureRange);
  const diaBP = randomGenerator(...diastolicBloodPressureRange);
  const BP = `${sysBP}/${diaBP}`;

  const tempDay = day < 10 ? `0${day}` : day;
  const dayStr = `2020-09-${tempDay}`;
  const hourStr = hour < 10 ? `0${hour}` : hour;
  const minuteStr = minute < 10 ? `0${minute}` : minute;
  const tempSecond = second * 5;
  const secondStr = tempSecond < 10 ? `0${tempSecond}` : tempSecond;
  const dateTime = `${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;

  // console.log(
  //   dayStr,
  //   hourStr,
  //   minuteStr,
  //   dateTime,
  //   temperature,
  //   heartbeat,
  //   BP,
  //   respiratory
  // );

  return `ABC001|${dayStr}|${hourStr}|${minuteStr}|${dateTime}|${temperature}|${heartbeat}|${BP}|${respiratory}`;
};

// const days = 5;
// const hours = 5;
// const minutes = 60;
// const seconds = 5;
const days = 5;
const hours = 24;
const minutes = 60;
const seconds = 10;

var logger = fs.createWriteStream('log.csv', {
  flags: 'a', // 'a' means appending (old data will be preserved)
});

logger.write(
  'pacient_id|day|hour|minute|event_time|temperature|heartbeat|blood_pressure|breathing_rhythm\n'
);

for (let i = 1; i < days; i++) {
  for (let j = 0; j < hours; j++) {
    for (let k = 0; k < minutes; k++) {
      for (let m = 0; m < seconds; m++) {
        const data = generateData(i, j, k, m);
        // console.log(data);
        logger.write(`${data}\n`);
      }
    }
  }
}
