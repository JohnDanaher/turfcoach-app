const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const activitySchema = new Schema(
  {
    type: { 
      type: String,
      required: [true, 'Work type is required.']
    },  
    time: {
      type: String,
      required: [true, 'Time is required.']
    },
    user: {
      type: String,
      required: [true, 'Task performer is required.']
    },
    pitch: {
      type: Number,
      required: [true, 'Pitch is required']
    }
  }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
