import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {
  transform(text: string, searchTerm: string): string {
    if (!searchTerm) return text;

    // Check if text includes the search term; if not, return an empty string
    return text.toLowerCase().includes(searchTerm.toLowerCase()) ? text : '';
  }
}
