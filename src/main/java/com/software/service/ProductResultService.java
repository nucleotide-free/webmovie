package com.software.service;

import com.software.beans.ProdcutResultEntity;

import java.util.List;
import java.util.Map;

/**
 * 功能：业务逻辑层实现项目的增删改查操作
 */
public interface ProductResultService {
    public List<Map<String, Object>> queryMovieTypeNum();
    public List<Map<String, Object>> queryMovieYearNum();
    public List<Map<String, Object>> queryMovieYearRevenue();
}
