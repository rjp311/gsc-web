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
  public_folder: "img",
  publish_mode: "editorial_workflow",
  collections: [
    // {
    //   name: "Home",
    //   label: "Home",
    // },
    {
      name: "Pages",
      label: "Pages",
      label_singular: "Page",
      editor: { preview: false },
      folder: "content/pages",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Name",
          name: "name",
          widget: "string",
          required: true
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: false
        },
        {
          label: "Content",
          name: "content",
          widget: "list",
          types: [
            {
              label: "Text",
              name: "text",
              widget: "object",
              fields: [
                {
                  label: "Text",
                  name: "text",
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