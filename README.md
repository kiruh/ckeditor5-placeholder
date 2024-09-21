# CKEditor 5 placeholder feature

## Documentation

This package is a final product of [Implementing an inline widget](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-an-inline-widget.html) tutorial describing how to create a “Placeholder” feature which allow the user to insert a predefined placeholders, like a date or a surname, into the document.

This is updated version of [Kiril Nedelev's ckeditor5-placeholder](https://github.com/kiruh/ckeditor5-placeholder) to work with ckeditor5 43.1.0

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
