const text = require('./text');
const { fromString: parseReference } = require('./reference');

const regexes = {
  sentence: () => '\\.\\w*(\n*?)(\\w*\\.)',

  reference_base: () => '\\[[0-9]+\\]',
  reference: () => `${regexes.reference_base()}\\:[^[]*`,
  claim_base: () => '\\[([0-9]+,?)*\\](?!\\:)',
  claim: () => `${regexes.claim_base()}`,
}

function buildRegex(...components) {
  const str = components.map(x => x()).join('');
  // console.log(`Building regex from:`, str);
  return new RegExp(str, 'g');
}

function findReferences(text) {
  // const regex = /\[[0-9]+\]:(\\w*)\n/g;
  const regex = buildRegex(regexes.reference);
  // console.log(regex);
  const match = text.match(regex) || [];

  // console.log(`Found ${match.length} matches!`);
  // console.log(match);

  return match;
}

function findClaims(text) {
  // const regex = /\\w*\[([0-9]+,?)*\](?!\:)/g;
  // const regex = /\n*?\\w*\[([0-9]+,?)*\](?!\:)/g;
  // const regex = /\\w*?\n*?\\w*\[([0-9]+,?)*\](?!\:)/g;
  // const regex = /.*\[([0-9]+,?)*\](\.|[^:](\.|(.|\n)*?\.))/g;
  // const regex = /.*\[([0-9]+,?)*\](\.|[^:](\.|(.|\n)*?\.))/g;
  // const regex = /(.*\[([0-9]+,?)*\](\.|[^:]){1}(\.|(.|\n)*?\.))/g;
  // const regex = buildRegex(regexes.sentence);
  // const regex = /(([^.]*\s*){1})(.*\[([0-9]+,?)*\]([^:]|\.))/g;
  // const regex = /[^.]*\s*.*\[([0-9]+,?)*\].*\./g;
  // const regex = /(([A-Z].*)|\n.*)\[([0-9]+,?)*\](\.|(([^:]|\n)[^.]*))/g;
  const regex = /(([^.]|et al\.)+?)\s*\[([0-9]+,?)*\](\.|(([^:]|\s)([^.]|et al\.)*\.))/g;

  const match = text.match(regex) || [];

  // console.log(`Found ${match.length} matches!`);
  // console.log([match[0]]);
  // console.log([match[0]]);
  // console.log(match);

  return match;
}

function trim(text) {
  return text.replace(/\s+/g, ' ');
}

function refex(text) {
  const trimmed = trim(text);
  const references = findReferences(trimmed).map(parseReference);
  const claims = findClaims(trimmed);

  return {
    references,
    claims
  }
}

module.exports = refex;

// findReferences(text);
// findClaims(text);
console.log(refex(text));
