/*!
 * FormValidation (https://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.7.0, built on 2015-08-01 4:57:17 PM
 * @author      https://twitter.com/formvalidation
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     https://formvalidation.io/license/
 */
/**
 * This class supports validating Pure framework (https://purecss.io/)
 */
(function($) {
    FormValidation.Framework.Pure = function(element, options) {
        options = $.extend(true, {
            button: {
                selector: '[type="submit"]:not([formnovalidate])',
                // The class of disabled button
                // https://purecss.io/buttons/#disabled-buttons
                disabled: 'pure-button-disabled'
            },
            err: {
                clazz: 'fv-help-block',
                parent: '^.*pure-control-group.*$'
            },
            // Pure doesn't support feedback icon
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: 'fv-control-feedback'
            },
            row: {
                // https://purecss.io/forms/#aligned-form
                selector: '.pure-control-group',
                valid: 'fv-has-success',
                invalid: 'fv-has-error',
                feedback: 'fv-has-feedback'
            }
        }, options);

        FormValidation.Base.apply(this, [element, options]);
    };

    FormValidation.Framework.Pure.prototype = $.extend({}, FormValidation.Base.prototype, {
        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
            var ns      = this._namespace,
                type    = $field.attr('type'),
                field   = $field.attr('data-' + ns + '-field'),
                row     = this.options.fields[field].row || this.options.row.selector,
                $parent = $field.closest(row);

            if ($parent.find('label').length === 0) {
                $icon.addClass('fv-icon-no-label');
            }
        }
    });
}(jQuery));
