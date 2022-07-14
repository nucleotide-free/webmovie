package com.software.service;

import com.software.dao.Entity.UserEntity;

import java.util.List;
import java.util.Map;

public interface ProductResultService {

    public List<Map<String, Object>> queryMovieTypeNum();//1
    public List<Map<String, Object>> queryMovieYearNum();//2-1
    public List<Map<String, Object>> queryMovieYearRevenue();//2-2
    public List<Object> queryMovieTypeTimeNum();//3
    public List<Map<String, Object>> queryMovieAreaNum();//4
    public List<Map<String, Object>> queryMovieTypeRevenue();//5
    public List<Map<String, Object>> queryMovieTypeVote();//6
    public List<Map<String, Object>> queryMovieTimeRevenue();//7
    public List<Map<String, Object>> queryMovieTimeVote();//8
    public List<Map<String, Object>> queryKeywords();//9

    public List<Object> queryMoviesList();//查找全部电影
    public int insertRatingInfo(Map<String, Object> map);//新建评价信息
}
