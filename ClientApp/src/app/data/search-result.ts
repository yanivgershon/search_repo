export interface ISearchResult
{
  name: string;
  avatarUrl: string;

}
export class SearchResult implements ISearchResult {

  constructor(name, avatarUrl)
  {
    this.name = name;
    this.avatarUrl = avatarUrl;
  }
  name: string;
  avatarUrl: string;


}
