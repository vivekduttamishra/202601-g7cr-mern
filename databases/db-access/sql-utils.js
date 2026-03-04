import sql from 'mssql/msnodesqlv8.js';

export class SqlManager{
    constructor(config){
        this.config=config
    }

    async execute( action ){
        try{
            await sql.connect(this.config)
            const result =await action(sql)
            return result;
        }finally{
            await sql.close();
        }
    }
}