const mainCtrl = require( './controllers/mainCtrl.js' );
const middleware = require( './controllers/middleware.js' );

module.exports = app => {
    app.get( '/api/personal/name', mainCtrl.getName );
    app.get( '/api/personal/location', mainCtrl.getLocation );
    app.get( '/api/personal/occupations', mainCtrl.getOccupations );
    app.get( '/api/personal/occupations/latest', mainCtrl.getLatestOccupation );
    app.get( '/api/personal/occupations/order', mainCtrl.sortOccupations );
    app.get( '/api/personal/hobbies', mainCtrl.getHobbies );
    app.get( '/api/personal/hobbies/:type', mainCtrl.getHobbiesByType );
    app.put( '/api/personal/name/:name', mainCtrl.changeName );
    app.put( '/api/personal/location/:location', mainCtrl.changeLocation );
    app.post( '/api/personal/hobbies/', mainCtrl.addHobby );
    app.post( '/api/personal/occupations/', mainCtrl.addOccupation );

    app.get( '/api/personal/hobbies/hobby', mainCtrl.searchHobbies );
    app.get( '/api/personal/occupations/:occupation', mainCtrl.searchOccupations );
    app.get( '/api/personal/skills/name', mainCtrl.searchSkills );

    app.get( '/api/skills/', mainCtrl.getSkills );
    app.get( '/api/skills/experience', mainCtrl.getSkillsByExperience );
    app.post( '/api/skills/', middleware.verifyUser, middleware.generateId, mainCtrl.addSkills );

};
