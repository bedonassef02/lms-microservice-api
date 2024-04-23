
exports.findAll = (req,res)=>{
}


exports.findById = (req,res)=>{
    const {id} = req.params;
}

exports.create = (req,res)=>{
    const {name, description, price} = req.body;
}

exports.update = (req,res)=>{
    const {id} = req.params;
}

exports.remove = (req,res)=>{
    const {id} = req.params;
}