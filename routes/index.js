
/*
 * GET home page.
 */

exports.populacja = function(req, res){
  var tosend = {
	  wartosc : "cos superdynamicznego"
	  };
  console.log('wysylam');
  res.json(tosend);
};
