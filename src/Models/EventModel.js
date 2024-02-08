const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

const EventModel = mongoose.model("events", UserSchema);
module.exports = EventModel;
