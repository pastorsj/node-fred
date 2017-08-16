// Type definitions for node-fred 1.0
// Project: https://github.com/pastorsj/node-fred
// Definitions by: Sam Pastoriza <https://github.com/pastorsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Fred

declare class Fred {
    constructor(apiKey: string, returnType?: string);

    public categories: FredAPI.Categories;
    public releases: FredAPI.Releases;
    public series: FredAPI.Series;
    public sources: FredAPI.Sources;
    public tags: FredAPI.Tags;
}

declare namespace FredAPI {
    
    class Categories {
        getCategory(categoryId: number): Promise<CategorySet>;
        getChildCategories(categoryId: number, params?: object): Promise<CategorySet>;
        getRelatedCategories(categoryId: number, params?: object): Promise<CategorySet>;
        getCategorySeries(categoryId: number, params?: object): Promise<SeriesInfo>;
        getCategoryTags(categoryId: number, params?: object): Promise<RelatedTagsInfo>;
        getCategoryRelatedTags(categoryId: number, params?: object): Promise<RelatedTagsInfo>;
    }
    
    class Releases {
        getAllReleases(params?: object): Promise<ReleaseSet>;
        getAllReleasesWithDates(params?: object): Promise<ReleaseDateSet>;
        getRelease(releaseId: number, params?: object): Promise<ReleaseSet>;
        getReleaseWithDates(releaseId: number, params?: object): Promise<ReleaseWithDates>;
        getSeriesForRelease(releaseId: number, params?: object): Promise<SeriesInfo>;
        getSourcesForRelease(releaseId: number, params?: object): Promise<SourcesSet>;
        getTagsForRelease(releaseId: number, params?: object): Promise<RelatedTagsInfo>;
        getRelatedTagsForRelease(releaseId: number, tagNames: string, params?: object): Promise<RelatedTagsInfo>;
        getTableTreesForRelease(releaseId: number, params?: object): Promise<TableTreesInfo>;
    }
    
    class Series {
        getSeries(seriesId: number, params?: object): Promise<SeriesSet>;
        getCategoriesForSeries(seriesId: number, params?: object): Promise<CategorySet>;
        getObservationsForSeries(seriesId: number, params?: object): Promise<ObservationInfo>;
        getReleaseForSeries(seriesId: number, params?: object): Promise<ReleaseSet>;
        getSeriesThatMatchesSearch(searchText: string, params?: object): Promise<SeriesInfo>;
        getTagsForSeriesSearch(seriesSearchText: string, params?: object): Promise<RelatedTagsInfo>;
        getRelatedTagsForSeriesSearch(seriesSearchText: string, params?: object): Promise<RelatedTagsInfo>;
        getTagsForSeries(seriesId: number, params?: object): Promise<RelatedTagsInfo>;
        getUpdatedSeries(params?: object): Promise<UpdatedSeriesInfo>;
        getUpdatedSeries(seriesId: number, params?: object): Promise<RevisedSeriesWithDates>;
    }
    
    class Sources {
        getAllSources(params?: object): Promise<SourcesInfo>;
        getSource(sourceId: number, params?: object): Promise<SourcesSet>;
        getReleasesForSource(sourceId: number, params?: object): Promise<ReleaseSet>;
    }
    
    class Tags {
        getAllTags(params?: object): Promise<RelatedTagsInfo>;
        getAllRelatedTags(tagNames: string, params?: object): Promise<RelatedTagsInfo>;
        getAllSeriesMatchingTags(tagNames: string, params?: object): Promise<SeriesInfo>;
    }
    
    interface TimeInfo {
        realtime_start: string,
        realtime_end: string,
    }
    
    interface StandardInfo extends TimeInfo {
        order_by: string,
        sort_order: string,
        count: number,
        offset: number,
        limit: number
    }
    
    /** 
     *  -----------------------------------------------------
     *                   Category Typings
     *  -----------------------------------------------------
     */
    
    interface CategorySet {
        categories: Category[],
    }
    
    interface RelatedTagsInfo extends StandardInfo {
        tags: Tag[]
    }
    
    interface SeriesInfo extends StandardInfo {
        series: SingularSeries[]
    }
    
    interface Category {
        id: number,
        name: string,
        parent_id: number
    }
    
    interface Tag {
        name: string,
        group_id: string,
        notes: string,
        created: string,
        popularity: number,
        series_count: number
    }
    
    interface SingularSeries {
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
    
    /** 
     *  -----------------------------------------------------
     *                  Releases Typings
     *  -----------------------------------------------------
     */
    
     interface ReleaseInfo {
         id: number,
         realtime_start: string,
         realtime_end: string,
         name: string,
         press_release: boolean,
         link: string
     }
    
     interface ReleaseSet extends TimeInfo {
        releases: ReleaseInfo[]
     }
    
     interface ReleaseWithDates extends StandardInfo {
         release_dates: Releases[]
     }
    
     interface BasicRelease {
         release_id: number,
         date: string
     }
    
     interface SourcesSet extends TimeInfo {
        sources: SingularSource[]
     }
    
     interface SingularSource {
         id: number,
         realtime_start: string,
         realtime_end: string,
         name: string,
         link: string
     }
    
     interface TableTreesInfo {
        name: string,
        element_id: number,
        release_id: number,
        elements: object[]
     }
    
     interface ReleaseSet extends StandardInfo {
        releases: ReleaseInfo[]
     }
    
     interface ReleaseDateSet extends StandardInfo {
         release_dates: ReleaseWithDate[]
     }
    
     interface ReleaseWithDate extends BasicRelease {
         release_id: number,
         date: string
     }

     /** 
     *  -----------------------------------------------------
     *                  Series Typings
     *  -----------------------------------------------------
     */

     interface SeriesInfo extends SingularSeries {
        notes: string
     }

     interface SeriesSet extends TimeInfo {
         series: SeriesInfo[]
     }

     interface ObservationInfo extends StandardInfo {
        observation_start: string,
        observation_end: string,
        units: string,
        output_type: number,
        file_type: string,
        observations: ObservationSet
     }

     interface ObservationSet extends TimeInfo {
        date: string,
        value: string
     }

     interface UpdatedSeriesInfo extends SeriesInfo {
        filter_variable: string,
        filter_value: string
     }

     interface RevisedSeriesWithDates extends StandardInfo {
         vintage_dates: string[]
     }

     /** 
     *  -----------------------------------------------------
     *                  Sources Typings
     *  -----------------------------------------------------
     */

     interface SourcesInfo extends StandardInfo {
         sources: SingularSource[]
     }
}

