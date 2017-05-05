function maxProfit (arr) {
  var max = 0;
  for (var i = 0; i < arr.length - 1; i++) {

    for (var j = i + 1; j < arr.length; j++) {
      var diff = arr[j] - arr[i];
      if (diff > max) {
        max = diff;
      }
    }
  }
  if ( max <= 0 ) return -1;
  return max;
}

function maxProfitDC (arr) {
  var range = calcGreatestRange(arr);
  var diff = range.max - range.min;
  if ( diff === 0 ) return - 1;
  return diff;
}

function calcGreatestRange (arr) {
  var result = {min: 0, max: 0};
  if ( arr.length === 1 ) {
    result.min = arr[0];
    result.max = arr[0];
  } else {
    var midpoint = Math.floor( arr.length / 2 );
    var a = calcGreatestRange( arr.slice(0, midpoint) );
    var b = calcGreatestRange( arr.slice(midpoint));
    if ( a.min < b.min && a.max < b.max) {
      result.min = a.min;
      result.max = b.max;
    } else if ( (a.max - a.min) > (b.max - b.min) ) {
      result.min = a.min;
      result.max = a.max;
    } else {
      result.min = b.min;
      result.max = b.max;
    }
  }
  return result;
}

module.exports = maxProfitDC;

