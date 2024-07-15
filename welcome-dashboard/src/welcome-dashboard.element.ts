import { LitElement, css, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement('my-welcome-dashboard')
export class MyWelcomeDashboardElement extends UmbElementMixin(LitElement) {

    render() {
        return html`
      <h1>Welcome Dashboard</h1>
      <div>
        <p>
          This is the Backoffice. From here, you can modify the content,
          media, and settings of your website.
        </p>
        <p>© Sample Company 20XX</p>
      </div>
    `;
    }

    static styles = [
        css`
      :host {
        display: block;
        padding: 24px;
      }
    `,
    ];
}

export default MyWelcomeDashboardElement;

declare global {
    interface HTMLElementTagNameMap {
        'my-welcome-dashboard': MyWelcomeDashboardElement;
    }
}