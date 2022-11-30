const controller ={};

const Title = 'Jars Saving';

controller.show = (req, res) => {
  let salary = parseFloat(req.query.salary) | 0;
  let jar55 = salary * 0.55.toFixed(2);
  let jar5 = salary * 0.05.toFixed(2);
  let jar10 = salary * 0.1.toFixed(2);

  
  res.render('task2', {title: Title, jar55, jar5, jar10});
}

module.exports = controller;
