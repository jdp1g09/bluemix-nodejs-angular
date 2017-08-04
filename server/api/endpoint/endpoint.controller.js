/* Respond to any get on page 1 with a sample1 JSON. HTTP code 200 */
exports.get = function (req, res) {
  // res === response object
  res.json({
    'some': 'data'
  });
};
