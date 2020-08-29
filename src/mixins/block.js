import { DruxtEntityContextMixin } from 'druxt-entity'

/**
* Provides Vue.js properties to render Drupal Block components.
 *
 * This Mixin is intended for use by `block` type Component Suggestions for
 * targetted theming of Drupal Blocks.
 *
 * @mixin
 *
 * @example @lang vue
 * <script>
 * // Import mixin.
 * import { DruxtBlocksBlockMixin } from 'druxt-blocks'
 *
 * export default {
 *   // Register mixin.
 *   mixins: [DruxtBlocksBlockMixin],
 * }
 * </script>
 *
 * @see {@link https://entity.druxtjs.org/api/mixins/componentSuggestion.html|DruxtEntityComponentSuggestionMixin}
 */
const DruxtBlocksBlockMixin = {
  /**
   * Vue.js mixins.
   * @see {@link https://druxt.github.io/druxt-entity/api/mixins/context|DruxtEntityContextMixin}
   * @type {object[]}
   */
  mixins: [DruxtEntityContextMixin],

  /**
   * Vue.js Properties.
   */
  props: {
    /**
     * The Block JSON:API resource.
     *
     * @type {object}
     */
    block: {
      type: Object,
      require: true,
    },
  },

  /**
   * Vue.js Computed properties.
   */
  computed: {
    /**
     * Block settings.
     *
     * @type {object}
     */
    settings() {
      return this.block.attributes.settings
    }
  }
}

export { DruxtBlocksBlockMixin }
