package com.software.service;

import com.software.beans.ProdcutResultEntity;

import java.util.List;
import java.util.Map;

/**
 * 功能：业务逻辑层实现项目的增删改查操作
 */
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

}
