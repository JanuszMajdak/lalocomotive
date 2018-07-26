function pages(parent, args, context, info) {
  return context.db.query.pages({}, info);
}

module.exports = {
  pages
};
