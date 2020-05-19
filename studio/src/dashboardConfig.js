export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec41a1b0244c701b9681d59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wffyr61i',
                  apiId: '92aa3867-917e-4496-a921-b4491493762e'
                },
                {
                  buildHookId: '5ec41a1c0244c701a4681d8a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2886x1ne',
                  apiId: '35a4e309-30a5-4c3f-8289-d258f3ce33cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamrxheem/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2886x1ne.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
