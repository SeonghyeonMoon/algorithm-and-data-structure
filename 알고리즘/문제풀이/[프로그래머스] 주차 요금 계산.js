const convertTimeTominutes = (time) => {
  const [hour, minutes] = time.split(':');
  return Number(hour) * 60 + Number(minutes);
}

const getUseTime = (inTime, outTime) => {
  return convertTimeTominutes(outTime) - convertTimeTominutes(inTime);
}

const getFee = (fees, useTime) => {
  if (useTime <= fees[0]) {
    return fees[1];
  }

  return fees[1] + Math.ceil((useTime - fees[0]) / fees[2]) * fees[3];
}


const solution = (fees, records) => {
  const temp = {};
  for (const record of records) {
    const [time, number, status] = record.split(' ');
    if (!(number in temp)) {
      temp[number] = {
        useTime: 0,
        inTime: null,
      };
    }

    if (status === 'IN') {
      temp[number].inTime = time;
    }

    if (status === 'OUT') {
      temp[number].useTime += getUseTime(temp[number].inTime, time);
      temp[number].inTime = null;
    }
  }

  for (const key in temp) {
    if (temp[key].inTime) {
      temp[key].useTime += getUseTime(temp[key].inTime, '23:59');
      temp[key].inTime = null
    }
  }

  return Object.keys(temp).sort().map((number) => getFee(fees, temp[number].useTime));
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))