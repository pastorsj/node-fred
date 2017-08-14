// Type definitions for node-fred 1.0
// Project: https://github.com/pastorsj/node-fred
// Definitions by: Sam Pastoriza <https://github.com/pastorsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Fred {
    constructor(apiKey: string, returnType?: string);

    public categories: Categories;
    public releases: Releases;
    public series: Series;
    public sources: Sources;
    public tags: Tags;
}

declare class Categories {
    getCategory(categoryId: number): Promise<object>;
    getChildCategories(categoryId: number, params?: object): Promise<object>;
    getRelatedCategories(categoryId: number, params?: object): Promise<object>;
    getCategorySeries(categoryId: number, params?: object): Promise<object>;
    getCategoryTags(categoryId: number, params?: object): Promise<object>;
    getCategoryRelatedTags(categoryId: number, params?: object): Promise<object>;
}

declare class Releases {
    getAllReleases(params?: object): Promise<object>;
    getAllReleasesWithDates(params?: object): Promise<object>;
    getRelease(releaseId: number, params?: object): Promise<object>;
    getReleaseWithDates(releaseId: number, params?: object): Promise<object>;
    getSeriesForRelease(releaseId: number, params?: object): Promise<object>;
    getSourcesForRelease(releaseId: number, params?: object): Promise<object>;
    getTagsForRelease(releaseId: number, params?: object): Promise<object>;
    getRelatedTagsForRelease(releaseId: number, tagNames: string, params?: object): Promise<object>;
    getTableTreesForRelease(releaseId: number, params?: object): Promise<object>;
}

declare class Series {
    getSeries(seriesId: number, params?: object): Promise<object>;
    getCategoriesForSeries(seriesId: number, params?: object): Promise<object>;
    getObservationsForSeries(seriesId: number, params?: object): Promise<object>;
    getReleaseForSeries(seriesId: number, params?: object): Promise<object>;
    getSeriesThatMatchesSearch(searchText: string, params?: object): Promise<object>;
    getTagsForSeriesSearch(seriesSearchText: string, params?: object): Promise<object>;
    getRelatedTagsForSeriesSearch(seriesSearchText: string, params?: object): Promise<object>;
    getTagsForSeries(seriesId: number, params?: object): Promise<object>;
    getUpdatedSeries(params?: object): Promise<object>;
    getUpdatedSeries(seriesId: number, params?: object): Promise<object>;
}

declare class Sources {
    getAllSources(params?: object): Promise<object>;
    getSource(sourceId: number, params?: object): Promise<object>;
    getReleasesForSource(sourceId: number, params?: object): Promise<object>;
}

declare class Tags {
    getAllTags(params?: object): Promise<object>;
    getAllRelatedTags(tagNames: string, params?: object): Promise<object>;
    getAllSeriesMatchingTags(tagNames: string, params?: object): Promise<object>;
}
