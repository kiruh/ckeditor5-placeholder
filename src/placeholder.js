import { Plugin } from 'ckeditor5';

import PlaceholderEditing from './placeholderediting.js';
import PlaceholderUI from './placeholderui.js';

export default class Placeholder extends Plugin {
  static get requires() {
    return [PlaceholderEditing, PlaceholderUI];
  }
}
