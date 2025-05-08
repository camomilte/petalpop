// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('PetalPop')
    .items([
      S.documentTypeListItem('event').title('Events'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['event'].includes(item.getId()),
      ),
    ])
