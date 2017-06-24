function fromString(referenceString) {
  // console.log('Parsing reference!', referenceString.split(/:(.+)/)[1]);
  const [ indexString, infoString ] = referenceString.split(/:(.+)/);
  const { 1: index } = indexString;
  // console.log(`Extracting info ${infoString} from reference index ${index}`);
  return infoString;
}

module.exports = {
  fromString
}
