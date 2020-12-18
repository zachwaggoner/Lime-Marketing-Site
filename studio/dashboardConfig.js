export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdd2961a929461c5f8c3fc3',
                  title: 'Sanity Studio',
                  name: 'lime-marketing-site-studio',
                  apiId: 'eb34206b-853d-4522-b820-508868c9dca2'
                },
                {
                  buildHookId: '5fdd2961a9294619658c3e08',
                  title: 'Blog Website',
                  name: 'lime-marketing-site',
                  apiId: 'c899aeb9-bd4a-4471-9a0b-504592cb22ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zachwaggoner/Lime-Marketing-Site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lime-marketing-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
