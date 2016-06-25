var articleModel = require('../models/models.article'),
  cloudinary = require('cloudinary');

var ctrl = {
	postByArticle: function(req,res){
		var articleId = req.query.article;

    /*cloudinary.uploader.upload("http://www.example.com/image.jpg", function(result) {
      console.log(result);
    });*/

    res.status(200).json({
      success: true,
      //files => $_FILES,
      //'get' => $_GET,
      //'post' => $_POST,
      //optional
      /*'flowTotalSize' => isset($_FILES['file']) ? $_FILES['file']['size'] : $_GET['flowTotalSize'],
      'flowIdentifier' => isset($_FILES['file']) ? $_FILES['file']['name'] . '-' . $_FILES['file']['size']
          : $_GET['flowIdentifier'],
      'flowFilename' => isset($_FILES['file']) ? $_FILES['file']['name'] : $_GET['flowFilename'],
      'flowRelativePath' => isset($_FILES['file']) ? $_FILES['file']['tmp_name'] : $_GET['flowRelativePath']
      */
    });
	},
	deleteById: function(req, res){
		var id = req.params.id;

		articleModel.findById(id).remove(function (err){
			if(err)
				res.status(500).send(err);
			else
				res.status(205).send('removed');
		});
	}
};

module.exports = ctrl;
