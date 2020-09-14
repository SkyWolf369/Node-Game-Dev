"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// so in mongoose u make schemas so u can save the data in a format
const vpsSchema = new mongoose_1.Schema({
    distro: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model("vpSchema", vpsSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVlBTLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9WUFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMsbUVBQW1FO0FBRW5FLE1BQU0sU0FBUyxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUN6QixNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osQ0FBQyxDQUFBO0FBRUYsa0JBQWUsZ0JBQUssQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgbW9kZWx9IGZyb20gXCJtb25nb29zZVwiO1xuLy8gc28gaW4gbW9uZ29vc2UgdSBtYWtlIHNjaGVtYXMgc28gdSBjYW4gc2F2ZSB0aGUgZGF0YSBpbiBhIGZvcm1hdFxuXG5jb25zdCB2cHNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBkaXN0cm86IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVsKFwidnBTY2hlbWFcIiwgdnBzU2NoZW1hKSJdfQ==