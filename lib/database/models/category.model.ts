import { Document, Schema, model, models} from"mongoose"
export interface ICategory extends Document{
    _id:String;
    name:String;
}
const CategorySchema = new Schema({
    name:{type:String, required:true, unique:true},
})

const Category = models.Category || model('Ctagory', CategorySchema);//to turn the this in model
export default Category;