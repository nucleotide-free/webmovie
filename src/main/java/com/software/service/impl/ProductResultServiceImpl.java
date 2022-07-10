package com.software.service.impl;

import com.software.service.ProductResultService;
import com.software.utils.DateUtil;
import com.software.dao.ProjectEntityMapper;
import com.software.beans.ProdcutResultEntity;
import com.software.utils.UUIDUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by administrator
 */
@Service
public class ProductResultServiceImpl implements ProductResultService {

    @Autowired
    private ProjectEntityMapper projectEntityMapper;


    @Override
    public List<Map<String, Object>> queryMovieTypeNum() {
        List<Map<String,Object>> result = projectEntityMapper.queryMovieTypeNum();
        return result;
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
    public List<Object> queryMovieTypeTimeNum() {
        List<Object> resultList = new ArrayList<Object>();
        List<Map<String,Object>> proResult = projectEntityMapper.queryMovieTypeTimeNum();
        for(Map<String,Object> proObj : proResult) {
            resultList.add(proObj);
        }
        return resultList;
    }

}
