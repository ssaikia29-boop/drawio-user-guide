// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'drawio-introduction',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/open-drawio',
        'getting-started/understanding-editor',
        'getting-started/select-template',
      ],
    },
    {
      type: 'category',
      label: 'Creating Diagrams',
      items: [
        'creating-diagrams/select-shapes',
        'creating-diagrams/add-text',
        'creating-diagrams/connect-shapes',
      ],
    },
    {
      type: 'category',
      label: 'Editing Diagrams',
      items: [
        'editing-diagrams/move-shape',
        'editing-diagrams/resize-shape',
        'editing-diagrams/format-shapes',
        'editing-diagrams/duplicate-objects',
        'editing-diagrams/align-shapes',
        'editing-diagrams/arrange-objects',
      ],
    },
    {
      type: 'category',
      label: 'Managing Diagrams',
      items: [
        'managing-diagrams/save-diagram',
        'managing-diagrams/export-diagram',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/faq'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/drawio-reference',
        'reference/copyright',
      ],
    },
  ],
};

export default sidebars;
