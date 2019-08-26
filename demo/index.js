import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox.js';
import '@anypoint-web-components/anypoint-styles/colors.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/iron-icons/editor-icons.js';
import '../anypoint-button.js';
import '../anypoint-icon-button.js';

class ComponentDemo extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'demoButtonEmphasis',
      'demoButtonLegacy',
      'demoToggles',
      'demoLeadingIcon',
      'demoNoink',
      'demoDisabed',
      'iconButtonLegacy',
      'iconButtonEmphasis',
      'iconNoink',
      'iconDisabed',
      'iconToggles'
    ]);
    this._demoEmphasisHandler = this._demoEmphasisHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
    this._contentControlClick = this._contentControlClick.bind(this);
    this._iconsEmphasisHandler = this._iconsEmphasisHandler.bind(this);

    this._componentName = 'anypoint-button';
    this.buttonStates = ['Text', 'Outlined', 'Contained'];
    this.demoButtonEmphasis = 'low';
    this.iconButtonEmphasis = 'low';
  }

  _demoEmphasisHandler(e) {
    const state = e.detail.value;
    let value;
    switch (state) {
      case 0: value = 'low'; break;
      case 1: value = 'medium'; break;
      case 2: value = 'high'; break;
    }
    this.demoButtonEmphasis = value;
  }

  _iconsEmphasisHandler(e) {
    const state = e.detail.value;
    let value;
    switch (state) {
      case 0: value = 'low'; break;
      case 1: value = 'medium'; break;
      case 2: value = 'high'; break;
    }
    this.iconButtonEmphasis = value;
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _contentControlClick(e) {
    const items = document.querySelectorAll('.content-control.group');
    Array.from(items).forEach((node) => {
      if (node === e.currentTarget) {
        return;
      }
      node.active = false;
    });
  }

  _demoTemplate() {
    const {
      buttonStates,
      demoButtonEmphasis,
      demoButtonLegacy,
      demoNoink,
      demoToggles,
      demoLeadingIcon,
      demoDisabed,
      darkThemeActive
    } = this;
    return html`
      <section class="documentation-section">
        <h3>Interactive demo</h3>
        <p>
          This demo lets you preview the button element with various
          configuration options.
        </p>
        <arc-interactive-demo
          .states="${buttonStates}"
          @state-chanegd="${this._demoEmphasisHandler}"
          ?dark="${darkThemeActive}"
        >
          <anypoint-button
            slot="content"
            emphasis="${demoButtonEmphasis}"
            title="Low emphasis button"
            ?legacy="${demoButtonLegacy}"
            ?noink="${demoNoink}"
            ?toggles="${demoToggles}"
            ?disabled="${demoDisabed}"
          >
            ${demoLeadingIcon ? html`<iron-icon icon="add-shopping-cart"></iron-icon>` : undefined}
            Label
          </anypoint-button>

          <label slot="options" id="mainOptionsLabel">Options</label>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="demoLeadingIcon"
            @change="${this._toggleMainOption}"
            >Leading icon</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="demoToggles"
            @change="${this._toggleMainOption}"
            >Toggles</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="demoNoink"
            @change="${this._toggleMainOption}"
            >No riplles</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="demoDisabed"
            @change="${this._toggleMainOption}"
            >Disabled</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="demoButtonLegacy"
            @change="${this._toggleMainOption}"
            >Anypoint</anypoint-checkbox>
        </arc-interactive-demo>
      </section>
    `;
  }

  _introductionTemplate() {
    return html`
      <section class="documentation-section">
        <h3>Introduction</h3>
        <p>
          This component is based on Material Design button and adjusted for
          Anypoint platform components.
        </p>
        <p>
          Anypoint web components are set of components that allows to build
          Anypoint enabled UI in open source projects.
        </p>
        <p>
          Button represents an action that can be performed from the UI.
          It is commonly used with <code>form</code>.
        </p>
      </section>
    `;
  }

  _usageTemplate() {
    return html`
      <section class="documentation-section">
        <h2>Usage</h2>
        <p>Anypoint button comes with 4 predefied styles:</p>
        <ul>
          <li><b>Text</b> (normal) - For low emphasis actions</li>
          <li><b>Outlined</b> - For medium emphasis actions</li>
          <li><b>Filled</b> - For primary actions</li>
          <li>
            <b>Legacy</b> - To provide compatibility with legacy Anypoint design
          </li>
        </ul>

        <p>
          See
          <a href="https://material.io/design/components/buttons.html"
            >Buttons</a
          >
          documentation in Material Defign documentation for principles and
          anatomy of dropdown menus.
        </p>

        <h3>Types cheat list</h3>
        <p>Follow this rules to apply the right button type to situation.</p>

        <h4>Text buttons</h4>
        <p>Use text buttons for less-pronounced actions, including:</p>
        <ul>
          <li>Dialog actions</li>
          <li>Card actions</li>
        </ul>

        <h4>Outlined buttons</h4>
        <p>Use outlined buttons for more important but not primary actions</p>

        <h4>Filled buttons</h4>
        <p>
          Use filled button for the primary action.
          There should not be more than 1 primary action per screen.
          If you need more primary actions than probably you actually need outlined
          button or change in the information architecture.
        </p>

        <h4>Legacy buttons</h4>
        <p>
          Do not use legacy buttons in your UI. These are to ensure compatibility
          with Anypoint applications.
        </p>

        <h3>Icons in buttons</h3>
        <p>
          Usually not required but placing a leading icon can clarify the action and
          focus attention on the button.
        </p>

        <div class="centered">
          <anypoint-button emphasis="low" class="icons">
            <iron-icon icon="card-giftcard"></iron-icon>
            Send gift card
          </anypoint-button>

          <anypoint-button emphasis="medium" class="icons">
            <iron-icon icon="open-in-new"></iron-icon>
            More details
          </anypoint-button>

          <anypoint-button emphasis="high" class="icons">
            <iron-icon icon="add-shopping-cart"></iron-icon>
            Add to cart
          </anypoint-button>
        </div>
      </section>
    `;
  }

  _iconButtonsTemplate() {
    const {
      buttonStates,
      iconButtonEmphasis,
      iconButtonLegacy,
      iconNoink,
      iconToggles,
      iconDisabed,
      darkThemeActive
    } = this;
    return html`
      <section class="documentation-section">
        <h2>Icon buttons</h2>
        <p>
          Icon buttons can be used to present an action as a symbol rather than
          a label.
        </p>
        <p>
          If possible prefer to use labeled buttons. The user may not understand the symbol
          even if target audience is expected to know it. Less experienced users can be
          confused when launching the application for the first time.
        </p>
        <p>
          Always provide alternative text description via <code>title</code>
          and <code>aria-label</code> attributes.
        </p>


        <arc-interactive-demo
          .states="${buttonStates}"
          @state-chanegd="${this._iconsEmphasisHandler}"
          ?dark="${darkThemeActive}"
        >
          <anypoint-icon-button
            slot="content"
            emphasis="${iconButtonEmphasis}"
            title="Icon button"
            ?legacy="${iconButtonLegacy}"
            ?noink="${iconNoink}"
            ?toggles="${iconToggles}"
            ?disabled="${iconDisabed}"
            title="Star this project"
            aria-label="Activate to see the demo."
          >
            <iron-icon icon="star-border"></iron-icon>
          </anypoint-icon-button>

          <label slot="options" id="iconOptionsLabel">Options</label>
          <anypoint-checkbox
            aria-describedby="iconOptionsLabel"
            slot="options"
            name="iconToggles"
            @change="${this._toggleMainOption}"
            >Toggles</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="iconOptionsLabel"
            slot="options"
            name="iconNoink"
            @change="${this._toggleMainOption}"
            >No riplles</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="iconOptionsLabel"
            slot="options"
            name="iconDisabed"
            @change="${this._toggleMainOption}"
            >Disabled</anypoint-checkbox>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="iconButtonLegacy"
            @change="${this._toggleMainOption}"
            >Anypoint</anypoint-checkbox>
        </arc-interactive-demo>

        <h3>More examples</h3>

        <h4>Low emphasis</h4>
        <div class="centered">
          <anypoint-icon-button
            emphasis="low"
            title="Add alarm"
            aria-label="Activate to set an alarm">
            <iron-icon icon="alarm-add"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="low"
            toggles
            title="Star this project"
            aria-label="Activate to star this project">
            <iron-icon icon="star-border"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="low"
            title="I am an image"
            aria-label="This button uses an image element">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="octocat">
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="low"
            disabled
            title="Reply"
            aria-label="This button is disabled">
            <iron-icon icon="reply"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="low"
            noink
            title="Cancel action"
            aria-label="Activate to see no ripple effect">
            <iron-icon icon="cancel"></iron-icon>
          </anypoint-icon-button>
        </div>

        <h4>Medium emphasis</h4>
        <div class="centered">
          <anypoint-icon-button
            emphasis="medium"
            title="Add alarm"
            aria-label="Activate to set an alarm">
            <iron-icon icon="alarm-add"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="medium"
            toggles
            title="Star this project"
            aria-label="Activate to star this project">
            <iron-icon icon="star-border"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="medium"
            title="I am an image"
            aria-label="This button uses an image element">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="octocat">
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="medium"
            disabled
            title="Reply"
            aria-label="This button is disabled">
            <iron-icon icon="reply"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="medium"
            noink
            title="Cancel action"
            aria-label="Activate to see no ripple effect">
            <iron-icon icon="cancel"></iron-icon>
          </anypoint-icon-button>
        </div>

        <h4>High emphasis</h4>
        <div class="centered">
          <anypoint-icon-button
            emphasis="high"
            title="Add alarm"
            aria-label="Activate to set an alarm">
            <iron-icon icon="alarm-add"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="high"
            toggles
            title="Star this project"
            aria-label="Activate to star this project">
            <iron-icon icon="star-border"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="high"
            title="I am an image"
            aria-label="This button uses an image element">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="octocat">
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="high"
            disabled
            title="Reply"
            aria-label="This button is disabled">
            <iron-icon icon="reply"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            emphasis="high"
            noink
            title="Cancel action"
            aria-label="Activate to see no ripple effect">
            <iron-icon icon="cancel"></iron-icon>
          </anypoint-icon-button>
        </div>
      </section>
    `;
  }

  _toggleButtonsTemplate() {
    return html`
      <section class="documentation-section">
        <h2>Toggle buttons</h2>
        <p>
          Toggle buttons can be used to group related options (menu bars) or to
          bundle selection and action in one UI element (for example add to favourites).
        </p>

        <div class="centered">
          <anypoint-icon-button
            title="Italic"
            aria-label="Toggle italic text"
            class="content-control"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-italic"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            title="Bold"
            aria-label="Toggle bold text"
            class="content-control"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-bold"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            title="Underline"
            aria-label="Toggle underline text"
            class="content-control"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-underlined"></iron-icon>
          </anypoint-icon-button>

          <anypoint-icon-button
            title="Text color"
            aria-label="Toggle text color"
            class="content-control"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-color-text"></iron-icon>
          </anypoint-icon-button>

          <span class="space"></span>

          <anypoint-icon-button
            title="Align text left"
            aria-label="Toggle align text left"
            class="content-control group"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-align-left"></iron-icon>
          </anypoint-icon-button>
          <anypoint-icon-button
            title="Align text center"
            aria-label="Toggle align text center"
            class="content-control group"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-align-center"></iron-icon>
          </anypoint-icon-button>
          <anypoint-icon-button
            title="Align text right"
            aria-label="Toggle align text rigth"
            class="content-control group"
            toggles
            @click=${this._contentControlClick}>
            <iron-icon icon="editor:format-align-right"></iron-icon>
          </anypoint-icon-button>
        </div>
      </section>
    `;
  }

  contentTemplate() {
    return html`
      <h2>Anypoint button</h2>
      ${this._demoTemplate()}
      ${this._introductionTemplate()}
      ${this._usageTemplate()}
      ${this._iconButtonsTemplate()}
      ${this._toggleButtonsTemplate()}
    `;
  }
}
const instance = new ComponentDemo();
instance.render();
window.demo = instance;
