
const DataModel = mongoose.model('Data', DataSchema);

const Schema = mongoose.Schema;
const DataSchema = new Schema({
    data: String
});