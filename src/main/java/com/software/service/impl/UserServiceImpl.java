package com.software.service.impl;

import com.software.dao.Entity.UserEntity;
import com.software.dao.UserEntityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class UserServiceImpl {
    @Autowired
    private UserEntityMapper userEntityMapper;

    /**
     * 查询用户信息
     *
     * @param
     * @return
     */
    public List<UserEntity> selectUserInfo(Map<String, Object> map) {
        List<UserEntity> userEntity = userEntityMapper.selectUserInfo(map);
        return userEntity;
    }
}
