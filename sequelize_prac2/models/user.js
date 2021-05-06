const Sequelize = require('sequelize'); // class

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_id:{
                type: Sequelize.STRING(20),
                allowNull:false, // NOT NULL
                unique: true, // UNIQUE
            },
            user_pw: {type: Sequelize.STRING(40),
                allowNull:false,
            },
            user_name:{
                type:Sequelize.STRING(10),
                allowNull:false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            user_image:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            user_dt: {
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue: Sequelize.NOW(),
            }
        },{
            sequelize,
            timestamps: false,
            underscored:false,
            modelName:'User',
            tableName:'users1',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'

        })
    }
    static associcate(db){
        db.User.hasMany(db.Comment, {foreignKey:'commenter', sourceKey:'id'});
    
    }
}

/*
    user id 
    user pw
    user name
    gender 
    user image
*/