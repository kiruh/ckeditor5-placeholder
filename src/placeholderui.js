import { Plugin } from 'ckeditor5';
import { Collection } from 'ckeditor5';
import { ViewModel } from 'ckeditor5';

import { addListToDropdown, createDropdown } from 'ckeditor5';

export default class PlaceholderUI extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;

    const placeholderNames = editor.config.get("placeholderProps.types") || [];

    // The "placeholder" dropdown must be registered among UI components of the editor
    // to be displayed in the toolbar.
    editor.ui.componentFactory.add("placeholder", locale => {
      const dropdownView = createDropdown(locale);

      // Populate the list in the dropdown with items.
      addListToDropdown(
        dropdownView,
        getDropdownItemsDefinitions(placeholderNames),
      );

      dropdownView.buttonView.set({
        // The t() function helps localize the editor. All strings enclosed in t() can be
        // translated and change when the language of the editor changes.
        label: t("Placeholder"),
        tooltip: true,
        withText: true,
      });

      // Execute the command when the dropdown items is clicked (executed).
      this.listenTo(dropdownView, "execute", evt => {
        editor.execute("placeholder", {
          value: evt.source.commandParam,
        });
        editor.editing.view.focus();
      });

      return dropdownView;
    });
  }
}

function getDropdownItemsDefinitions(placeholderNames) {
  const itemDefinitions = new Collection();

  for (const name of placeholderNames) {
    const definition = {
      type: "button",
      model: new ViewModel({
        commandParam: name,
        label: name,
        withText: true,
      }),
    };

    // Add the item definition to the collection.
    itemDefinitions.add(definition);
  }

  return itemDefinitions;
}
