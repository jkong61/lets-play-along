import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
/**
 * Custom pipe used to shorten strings to make the UI more uniform
 */
export class ShortenPipe implements PipeTransform {

  transform(value: string, last: number): string {
    if (value.length <= last) {
      return value;
    }
    return `${value.slice(0, last).trim()}...`;
  }
}
