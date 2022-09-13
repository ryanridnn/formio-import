import { Formio } from "formiojs";
const importForm = document.querySelector(".import-form");
const importFormUrl = document.querySelector(".import-form__url");

const createBuilder = (url = "") => {
	Formio.builder(
		document.getElementById("form-builder"),
		url !== "" ? url : {}
	).then((builder) => {
		builder.on("saveComponent", function () {
			console.log(builder.schema);
		});
	});
};

importForm.onsubmit = (e) => {
	e.preventDefault();
	createBuilder(importFormUrl.value);
};

createBuilder();
