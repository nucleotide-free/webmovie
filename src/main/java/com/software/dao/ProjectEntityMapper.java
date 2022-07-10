package com.software.dao;

import com.software.beans.ProdcutResultEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ProjectEntityMapper {

   List<Map<String,Object>> queryMovieTypeNum();
   List<Map<String,Object>> queryMovieTypeVote();
   List<Map<String,Object>> queryMovieTimeRevenue();
}