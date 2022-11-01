# Copy JSON - Web Bae

A no-code tool to copy Webflow component json to clipboard.

## Example and Cloneable

[https://webflow.com/made-in-webflow/website/copy-json](https://webflow.com/made-in-webflow/website/copy-json)

## Installation

### 1. Add script tag to before `</body>`

### 2. Create your HTML: A link block with two div text children, the button text and json data (hide this)

<img src="assets/html.png" alt="html structure" width="300"/>

### 3. Add the following attributes

To the link block: `wb-data="copy-button"`\
To the button text div: `wb-data="text"`\
To the hidden json: `wb-data="json"`

<img src="assets/button-attr.png" alt="button attributes" width="300"/>
<img src="assets/text-attr.png" alt="text attributes" width="300"/>
<img src="assets/json-attr.png" alt="json attributes" width="300"/>
