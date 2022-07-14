package com.software.dao;

import com.software.dao.Entity.UserEntity;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Map;

@Repository
public interface ProjectEntityMapper {

    List<Map<String, Object>> queryMovieTypeNum();//1

    List<Map<String, Object>> queryMovieYearNum();//2-1

    List<Map<String, Object>> queryMovieYearRevenue();//2-2

    List<Map<String, Object>> queryMovieTypeTimeNum();//3

    List<Map<String, Object>> queryMovieAreaNum();//4

    List<Map<String, Object>> queryMovieTypeRevenue();//5

    List<Map<String, Object>> queryMovieTypeVote();//6

    List<Map<String, Object>> queryMovieTimeRevenue();//7

    List<Map<String, Object>> queryMovieTimeVote();//8

    List<Map<String, Object>> queryKeywords();//9
    List<Map<String, Object>> queryMoviesList(int off);
    List<Map<String, Object>> queryRecommendList(int userid);
    int insertRatingInfo(Map<String, Object> map);//创建评价信息
}