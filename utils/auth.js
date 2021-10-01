const auth = (req, res, next) => {
  if (!req.session.client_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = auth;
