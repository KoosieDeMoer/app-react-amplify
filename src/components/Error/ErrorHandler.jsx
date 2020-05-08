function handleErrors(json) {
  if (json.error !== undefined) {
    presentError(JSON.stringify(json));
  }
  return json;
}

function presentError(error) {
  alert(error);
}

function unpickError(error) {
  try {
    return JSON.parse(error.message).message;
  } catch (e) {
    return error;
  }
}

module.exports = {
  handleErrors,
  presentError,
  unpickError,
};
