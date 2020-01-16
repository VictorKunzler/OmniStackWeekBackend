const Dev = require('../../models/Dev');
const parseStringAsArray = require('../../utils/parseStringAsArray');

const searchDevsAround = async ({
  latitude,
  longitude,
  techs = '',
  distance,
}) => {
  let where = {
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: distance
      }
    }
  };

  if(techs.length) {
    const techsArray = parseStringAsArray(techs);

    where.techs =  {
      $in: techsArray
    };
  };

  const devs = await Dev.find(where);

  return devs;
};

module.exports = searchDevsAround;
