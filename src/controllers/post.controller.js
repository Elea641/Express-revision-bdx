const PostModel = require('../model/Post.model')

const postInstance = new PostModel();

const findAllPosts = async (req, res) => {
   try {
    const [posts] = await postInstance.findAll();
    console.log(posts)

    res.sendStatus(200).json(posts)

   } catch(err) {
    console.error(err)
    res.sendStatus(500).json(err)
   }
}

module.exports = {
    findAllPosts
}