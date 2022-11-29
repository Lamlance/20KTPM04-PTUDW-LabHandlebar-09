const controller ={};

const Title = 'Jars Saving';

controller.show = (req, res) => {
  let salary = parseFloat(req.query.salary) | 0;
  let jar55 = salary * 0.55;
  let jar5 = salary * 0.05;
  let jar10 = salary * 0.1;

  res.render('task2', {
    title: Title, 
    jar55, 
    jar5, 
    jar10,
    author:"Hàn Thọ Nhật Phú - 20127591"
  });
}

module.exports = controller;
