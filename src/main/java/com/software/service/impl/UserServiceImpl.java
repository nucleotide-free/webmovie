package com.software.service.impl;

import com.software.dao.Entity.UserEntity;
import com.software.dao.UserEntityMapper;
import com.software.service.ProductResultService;
import com.software.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserEntityMapper userEntityMapper;
    @Override
    /**
     * 查询用户信息
     *
     * @param
     * @return
     */
    public List<UserEntity> selectUserInfo(UserEntity userEntity) {
        List<UserEntity> user = userEntityMapper.selectUserInfo(userEntity);
        return user;
    }
}
