import { Pipe, PipeTransform } from '@angular/core';

declare var moment:any;

/**
 * Returns the date formatted by moment.js
 * Takes a Date
 * Usage:
 *   value | moment:format
 * Example:
 *   {{ new Date() | moment: 'hh:mm' }}
 *   formats to: 0 minutes ago
 */
@Pipe({ name: 'moment' })
export class MomentPipe implements PipeTransform {
    transform(value, format) {
        return moment(value, format);
    }
}