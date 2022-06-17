import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { ObjectId } = mongoose.Schema;

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    content: {
      type: {},
      minlength: 200,
    },
    video: {},
    free_preview: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 120,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
    content: {
      type: {},
      minlength: 200,
    },
    price: {
      type: Number,
    },
    image: {},
    category: String,
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
    },
    instructor: {
      type: ObjectId,
      ref: "User",
    },
    lessons: [lessonSchema],
  },
  {
    timestamps: true,
  }
);

courseSchema.plugin(mongoosePaginate);

export default mongoose.model("Course", courseSchema);
