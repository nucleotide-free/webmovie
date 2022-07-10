package com.software.controller;

import com.software.beans.HttpResponseEntity;
import com.software.common.Constans;
import com.software.beans.ProdcutResultEntity;
import com.software.service.ProductResultService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by administrator
 */
@RestController
public class ProductResultController {

    private final Logger logger = LoggerFactory.getLogger(ProductResultController.class);

    @Autowired
    private ProductResultService projectService;

    /**
     * 1
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieTypeNum")
    public HttpResponseEntity queryProjectList() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieTypeNum();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
    /**
     * 2-1
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieYearNum")
    public HttpResponseEntity queryMovieYearNum() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieYearNum();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
    /**
     * 2-2
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieYearRevenue")
    public HttpResponseEntity queryMovieYearRevenue() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieYearRevenue();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }

    /**
     * 3
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieTypeTimeNum")
    public HttpResponseEntity queryMovieTypeTimeNum() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Object> result = projectService.queryMovieTypeTimeNum();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
    @RequestMapping(value = "/queryMovieAreaNum")//4
    public HttpResponseEntity queryMovieAreaNum() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieAreaNum();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
    /**
     * 5
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieTypeRevenue")//5
    public HttpResponseEntity queryMovieTypeRevenue() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieTypeRevenue();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
    /**
     * 6
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieTypeVote")
    public HttpResponseEntity queryProjectList6() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieTypeVote();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
    /**
     * 7
     * @param
     * @return
     */
    @RequestMapping(value = "/queryMovieTimeRevenue")
    public HttpResponseEntity queryProjectList7() {
        HttpResponseEntity httpResponseEntity = new HttpResponseEntity();
        List<Map<String,Object>> result = projectService.queryMovieTimeRevenue();
        httpResponseEntity.setCode(Constans.SUCCESS_CODE);
        httpResponseEntity.setData(result);
        return httpResponseEntity;
    }
}
