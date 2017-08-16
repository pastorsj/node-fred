// Type definitions for node-fred 1.0
// Project: https://github.com/pastorsj/node-fred
// Definitions by: Sam Pastoriza <https://github.com/pastorsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Fred;

declare class Fred {
    constructor(apiKey: string, returnType?: string);

    public categories: Categories;
    public releases: Releases;
    public series: Series;
    public sources: Sources;
    public tags: Tags;
}

declare class Categories {
    getCategory(categoryId: number): Promise<CategorySet>;
    getChildCategories(categoryId: number, params?: object): Promise<CategorySet>;
    getRelatedCategories(categoryId: number, params?: object): Promise<CategorySet>;
    getCategorySeries(categoryId: number, params?: object): Promise<SeriesInfo>;
    getCategoryTags(categoryId: number, params?: object): Promise<RelatedTagsInfo>;
    getCategoryRelatedTags(categoryId: number, params?: object): Promise<RelatedTagsInfo>;
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

declare interface StandardInfo {
    realtime_start: string,
    realtime_end: string,
    order_by: string,
    sort_order: string,
    count: number,
    offset: number,
    limit: number
}

declare interface CategorySet {
    categories: Category[],
}

declare interface RelatedTagsInfo extends StandardInfo {
    tags: Tag[]
}

declare interface SeriesInfo extends StandardInfo {
    series: SingularSeries[]
}

declare interface Category {
    id: number,
    name: string,
    parent_id: number
}

declare interface Tag {
    name: string,
    group_id: string,
    notes: string,
    created: string,
    popularity: number,
    series_count: number
}

declare interface SingularSeries {
    id: string,
    realtime_start: string,
    realtime_end: string,
    title: string,
    observation_start: string,
    observation_end: string,
    frequency: string,
    frequency_short: string,
    units: string,
    units_short: string,
    seasonal_adjustment: string,
    seasonal_adjustment_short: string,
    last_updated: string,
    popularity: number
}

