db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { lastModified: true, ultimaModificacao: { $type: "date" } } },
);
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
