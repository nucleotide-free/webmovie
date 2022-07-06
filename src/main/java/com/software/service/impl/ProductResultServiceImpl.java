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

    /**
     * 查询全部项目的名字接口
     * @return
     */
    public List<Map<String,Object>> queryAllProjectName() {
        List<Map<String,Object>> result = projectEntityMapper.queryAllProjectName();
        return result;
    }
}
