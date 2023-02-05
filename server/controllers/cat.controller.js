const axios = require('axios');
const fs = require('fs');
const path = require('path');

class CatController {
  constructor() {}
  getAll = async (req, res) => {
    const url = `${process.env.CAT_URL}breeds?api_key=${process.env.API_KEY}`;
    try {
      let result = await axios.get(url);
      const data = result.data;
      let file = [];
      data.forEach((breed) => {
        file.push({
          name: breed.name,
          id: breed.id,
        });
      });
      fs.writeFile(
        path.join(__dirname, '/data.json'),
        JSON.stringify(file),
        (err) => {
          if (err) throw err;
        }
      );
      res.status(200).json({ data });
    } catch (err) {
      console.log(err);
      res.status(404).send('something went wrong');
    }
  };
  getById = async (req, res) => {
    const id = req.params.id;
    const breedUrl = `${process.env.CAT_URL}breeds/${id}?api_key=${process.env.API_KEY}`;
    const imageUrl = `${process.env.CAT_URL}images/search?breed_ids=${id}&limit=8&api_key=${process.env.API_KEY}`;
    try {
      let breedResult = await axios.get(breedUrl);
      const {
        id,
        name,
        description,
        origin,
        life_span,
        adaptability,
        affection_level,
        child_friendly,
        grooming,
        intelligence,
        health_issues,
        social_needs,
        strangers_friendly,
      } = breedResult.data;
      let imageResult = await axios.get(imageUrl);
      const images = imageResult.data.map((image) => ({
        id: image.id,
        url: image.url,
        width: image.width,
        height: image.height,
      }));
      const newData = {
        id,
        name,
        description,
        origin,
        life_span,
        adaptability,
        affection_level,
        child_friendly,
        grooming,
        intelligence,
        health_issues,
        social_needs,
        strangers_friendly,
        images,
      };
      res.status(200).json({ data: newData });
    } catch (err) {
      res.status(404).send('something went wrong');
    }
  };
  search = async (req, res) => {
    const { q } = req.query;
    const regex = new RegExp(q, 'gi');
    const data = fs.readFileSync(path.join(__dirname, '/data.json'));
    const newData = JSON.parse(data).filter((item) => item.name.match(regex));
    res.status(200).json({ data: newData });
  };
}

module.exports = new CatController();