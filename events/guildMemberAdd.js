module.exports = member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Uye');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.
  member.addRole(joinRole);
};

