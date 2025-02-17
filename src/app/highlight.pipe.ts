import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {
  transform(text: string, searchTerm: string): string {
    if (!searchTerm) return text;

    // Replace occurrences of the search term with highlighted text
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, `<span class="bg-warning">$1</span>`);
  }
}
