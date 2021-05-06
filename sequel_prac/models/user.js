const Sequelize = require('sequelize');


module.exports = class User extends Sequelize.Model{
    static init(sequelize){ // sequelize : 접속 정보를 담은 객체
        return super.init({
            // { 필드 내용 (필드명:{ 데이터 타입, 제약조건 })}
            name: {
                type:Sequelize.STRING(20), // varchar 
                allowNull:false, // not null
                unique:true,
            },
            age:{
                type:Sequelize.INTEGER.UNSIGNED, // UNSIGNED : 양수만 사용
                allowNull:false,

            },
            married:{
                type:Sequelize.BOOLEAN, // TINYINT
                allowNull:false,
            },
            comment:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            create_at:{ // create_at DATETIME NOT NULL default NOW()
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            }

        },{
            //  {테이블 설정 값}
            sequelize, // init()의 인자값
            timestamps:false, 
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8', // utf
            collate:'utf8_general_ci'
        })
    }
    static associcate(db){
        db.User.hasMany(db.Comment,{foreignKey:'commenter',sourceKey:'id'})
    }
}