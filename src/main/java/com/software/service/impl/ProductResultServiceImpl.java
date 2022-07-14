package com.software.service.impl;

import com.software.service.ProductResultService;
import com.software.dao.ProjectEntityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductResultServiceImpl implements ProductResultService {

    @Autowired
    private ProjectEntityMapper projectEntityMapper;

    @Override
    public List<Map<String, Object>> queryMovieTypeNum() {//1
        List<Map<String,Object>> result = projectEntityMapper.queryMovieTypeNum();
        return result;
    }


    @Override
    public List<Map<String, Object>> queryMovieYearNum() {//2-1
        List<Map<String,Object>> result = projectEntityMapper.queryMovieYearNum();
        return result;
    }

    @Override
    public List<Map<String, Object>> queryMovieYearRevenue() {//2-2
        List<Map<String,Object>> result = projectEntityMapper.queryMovieYearRevenue();
        return result;
    }

    @Override
    public List<Object> queryMovieTypeTimeNum() {//3
        List<Object> resultList = new ArrayList<Object>();
        List<Map<String,Object>> proResult = projectEntityMapper.queryMovieTypeTimeNum();
        for(Map<String,Object> proObj : proResult) {
            resultList.add(proObj);
        }
        return resultList;
    }

    @Override
    public List<Map<String, Object>> queryMovieAreaNum() {//4
        List<Map<String,Object>> result = projectEntityMapper.queryMovieAreaNum();
        return result;
    }

    @Override
    public List<Map<String, Object>> queryMovieTypeRevenue() {//5
        List<Map<String,Object>> result = projectEntityMapper.queryMovieTypeRevenue();
        return result;
    }

    @Override
    public List<Map<String, Object>> queryMovieTypeVote() {//6
        List<Map<String,Object>> result = projectEntityMapper.queryMovieTypeVote();
        return result;
    }

    @Override
    public List<Map<String, Object>> queryMovieTimeRevenue() {//7
        List<Map<String,Object>> result = projectEntityMapper.queryMovieTimeRevenue();
        return result;
    }

    @Override
    public List<Map<String, Object>> queryMovieTimeVote() {//8
        List<Map<String,Object>> result = projectEntityMapper.queryMovieTimeVote();
        return result;
    }

    @Override
    public List<Map<String, Object>> queryKeywords() {
        List<Map<String,Object>> result = projectEntityMapper.queryKeywords();
        return result;
    }

    @Override
    public List<Object> queryMoviesList() {//获取电影列表
        List<Object> resultList = new ArrayList<Object>();
        List<Map<String,Object>> proResult = projectEntityMapper.queryMoviesList();
        for(Map<String,Object> proObj : proResult) {
            resultList.add(proObj);
        }
        return resultList;
    }

    @Override
    public int insertRatingInfo(Map<String, Object> map) {//创建评价信息
        int result = projectEntityMapper.insertRatingInfo(map);
        return result;
    }
}
