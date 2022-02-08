module.exports = {
  cms_manual_init: true,
  backend: {
    name: "git-gateway",
    repo: "rjp311/gsc-web",
    branch: "prod",
    squash_merges: true
  },
  local_backend: true,
  media_folder: "public/img",
  public_folder: "public/img",
  publish_mode: "editorial_workflow",
  collections: [
    {
      name: "Pages",
      label: "Page",
      label_singular: "Page",
      editor: { preview: false },
      folder: "content/pages",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: true
        },
        {
          label: "Builder",
          name: "builder",
          widget: "list",
          types: [
            {
              label: "Content",
              name: "content",
              widget: "object",
              fields: [
                {
                  label: "Content",
                  name: "content",
                  widget: "markdown",
                  required: true,
                },
              ],
            },
            {
              label: "Photo",
              name: "photo",
              widget: "object",
              fields: [
                {
                  label: "Text",
                  name: "text",
                  widget: "string",
                  required: false
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                  required: true,
                  media_library: { config: {multiple : false}}
                }
              ]
            },
            {
              label: "Call To Action",
              name: "cta",
              widget: "object",
              fields: [
                {
                  label: "Text",
                  name: "text",
                  widget: "string",
                  required: true
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}