# CKEditor 5 placeholder feature

## Documentation

This package is a final product of [Implementing an inline widget](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-an-inline-widget.html) tutorial describing how to create a “Placeholder” feature which allow the user to insert a predefined placeholders, like a date or a surname, into the document.

## [Demo](https://ckeditor5-placeholder.netlify.com/)

## Install
```
npm install --save ckeditor5-placeholder
```

## Config

```js
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Placeholder from "ckeditor5-placeholder";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [
    // ...
    Placeholder,
  ],
  toolbar: [
    // ...
    "placeholder",
  ],
  placeholderProps: {
    types: ["First Name", "Date"],
  },
  placeholderBrackets: {
    open: "{",
    close: "}",
  }
});
```
