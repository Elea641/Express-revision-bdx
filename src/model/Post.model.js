const AbstractModel = require("./Abstract.model");

class PostModel extends AbstractModel {
    constructor() {
        super({ table : "post" })
    }

}



module.exports = PostModel