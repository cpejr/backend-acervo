const Schema = mongoose.Schema;

const MediaSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

const MediaModel = mongoose.model("medias", UserSchema);
module.exports = MediaModel;
