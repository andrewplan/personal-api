module.exports = {
    getName( req, res ) {
        return res.status( 200 ).json( { name: personal.name } );
    }
    , getLocation( req, res ) {
        return res.status( 200 ).json( { location: personal.location } );
    }
    , getOccupations( req, res ) {
        return res.status( 200 ).json( { occupations: personal.occupations } );
    }
    , getLatestOccupation( req, res ) {
        return res.status( 200 ).json( { occupations: personal.occupations[ personal.occupations.length - 1 ] } );
    }
    , getHobbies( req, res ) {
        return res.status( 200 ).json( { hobbies: personal.hobbies } );
    }
    , getHobbiesByType( req, res ) {
        let results = personal.hobbies.filter( hobby => {
          if ( req.params.type === hobby.type ) {
            return true;
          }
          return false;
        } );
        return res.status( 200 ).json( { hobbies: results } );
    }
    , sortOccupations( req, res ) {
        if ( req.query.order === 'desc' ) {
          return res.status( 200 ).json( personal.occupations.sort() );
        }
        else if ( req.query.order === 'asc' ) {
          return res.json( personal.occupations.reverse() );
        }
    }
    , changeName( req, res ) {
        personal.name = req.params.name;
        return res.status( 200 ).json( personal );
    }
    , changeLocation( req, res ) {
        personal.location = req.params.location;
        return res.status( 200 ).json( personal );
    }
    , addHobby( req, res ) {
        personal.hobbies.push( { name: req.body.name, type: req.body.type } );
        return res.status( 200 ).json( personal );
    }
    , addOccupation( req, res ) {
        personal.occupations.push( req.body.occupation );
        return res.status( 200 ).json( personal );
    }

    , getSkills( req, res ) {
        return res.status( 200 ).json( skills );
    }
    , getSkillsByExperience( req, res ) {
        let results = [];
        for ( let i = 0; i < skills.length; i++ ) {
            if ( req.query.experience === skills[ i ].experience ) {
                results.push( skills[ i ] );
            }
        }
        return res.status( 200 ).json( results );
    }
    , addSkills( req, res ) {
        skills.push( {
          id: req.body.id
          , name: req.body.name
          , experience: req.body.experience
        } );
        return res.status( 200 ).json( skills );
    }
    , getSkillsLength() {
        return skills.length;
    }

    , searchHobbies( req, res ) {
        let hobbies = personal.hobbies.filter( hobby => req.query.hobby === hobby.name );
        return res.status( 200 ).json( hobbies );
    }
    , searchOccupations( req, res ) {
        let occupations = personal.occupations.filter( occupation => req.params.occupation === occupation );
        return res.status( 200 ).json( occupations );
    }
    , searchSkills( req, res ) {
        let someSkills = skills.filter( skill => req.query.name === skill.name );
        return res.status( 200 ).json( someSkills );
    }

};

const personal = {
  name: 'Andrew'
  , location: 'Longview'
  , occupations: [ 'musician', 'web developer', 'office assistant' ]
  , hobbies: [
      {
        'name': 'Watching superhero movies'
      , 'type': 'current'
      }
      , {
        'name': 'Reading about video games'
        , 'type': 'future'
      }
  ]
};

const skills = [
  {
    "id": 1,
    "name": "Javascript",
    "experience": "Intermediate"
  }
  , {
    "id": 2,
    "name": "Songwriting",
    "experience": "Advanced"
  }
  , {
    "id": 3,
    "name": "Singing",
    "experience": "Intermediate"
  }
];
