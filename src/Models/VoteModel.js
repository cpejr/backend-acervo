const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

const VoteModel = mongoose.model("votes", UserSchema);
module.exports = VoteModel;
