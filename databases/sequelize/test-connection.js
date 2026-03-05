import sequelize from './sequelize/connect.js'; // path to config above

async function quickTest() {
    try {
        await sequelize.authenticate();
        console.log('✅ Success! Sequelize is using your Sql Authentication.');

    } catch (err) {
        console.error(' Connection failed:', err);
    } finally {
        await sequelize.close();
    }
}

quickTest();