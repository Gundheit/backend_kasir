function association(){
  return function(hook,next){
    const query = hook.params.query;     
    const keyword = query.$search;
    const modelProduct = hook.app.service('product').Model;
    const association = 
    { 
      include: [
        { model: modelProduct, as: 'product', attributes: ['barcode'] }        
      ]
    };

    if(keyword){
      let condition = {
        where: {
          tmb_nama: {
            [sequelize.Op.like]: '%'+ keyword+'%'
          }
        }}; 
      Object.assign(association,condition);
    }
             
    hook.params.sequelize = Object.assign(association, { raw: false });      
    next();
    return Promise.resolve(hook);   
  }
}

module.exports = {
  before: {
    all: [association()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
