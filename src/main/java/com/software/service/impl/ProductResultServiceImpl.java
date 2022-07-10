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


}
