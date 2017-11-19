function relation(){
  return function (hook,next) {
    const sequelize = hook.app.get('sequelizeClient');
  //  const model = hook.app.service('master-item').Model;
    /*
    let sql = ' select a.tmb_id,a.tmb_nobarcode,a.tmb_nama,b.tmkat_kode,c.tmst_kode, a.tmb_harga_grosir,a.tmb_harga_ecer,d.tlb_qty from tblmstbarang a left join tblmstkategori b on a.tmkat_id=b.tmkat_id left join tblmstsatuan c on a.tmst_id=c.tmst_id inner join tbllokasibarang d on a.tmb_id=d.tmb_id where a.tmb_id is not null order by a.tmb_nobarcode asc';
    sequelize.query(sql).spread((results,metadata)=>{
      hook.result = results;
      next();
      return Promise.resolve(hook);
    });
    */
    /*
    sequelize.query("SELECT * FROM `master-item` where id = 1").spread((results, metadata) => {
      // Results will be an empty array and metadata will contain the number of affected rows.
      hook.result = results;
      next();
      return Promise.resolve(hook);
    });
    */
    /*
    sequelize.query('SELECT * FROM `tblmstbarang` where tmb_id = 1', { model: model }).then(projects => {
      console.log("ada di dalam hook serialize");
      console.log(projects);
      hook.result = projects;
          next();
          return Promise.resolve(hook);  
    })
    */

    //cara pakai di postman: localhost:3030/master-item?[$search]=satu
    const query = hook.params.query;     
    const keyword = query.$search;
    const modelUnit = hook.app.service('product-unit').Model;
    const modelCategory = hook.app.service('product-category').Model;   
    const association = 
    { 
      include: [
        { model: modelUnit, as: 'unit', attributes: ['name'] },
        { model: modelCategory, as: 'category', attributes: ['name'] }
      ]/*,
      where: {
        tmb_nama: {
          [sequelize.Op.like]: '%'+ keyword+'%'
        }
      }*/
    };

    if(keyword){
      let condition = {
        where: {
          tmb_nama: {
            [sequelize.Op.like]: '%'+ keyword+'%'
          }
        }}; 
      Object.assign(association,condition);
      /*
      const association = 
      { 
        include: [
          { model: modelUnit, as: 'unit', attributes: ['tmst_kode'] },
          { model: modelCategory, as: 'category', attributes: ['tmkat_kode'] },
          { model: modelLocation, as: 'location', attributes: ['tlb_qty'] }        
        ],
        where: {
          tmb_nama: {
            [sequelize.Op.like]: '%'+ keyword+'%'
          }
        }
      };*/
    }


             
    hook.params.sequelize = Object.assign(association, { raw: false });      
    next();
    return Promise.resolve(hook);          

  }

    
}

module.exports = {
  before: {
    all: [relation()],
    //all: [],
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
