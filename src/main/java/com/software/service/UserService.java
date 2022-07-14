package com.software.service;

import com.software.dao.Entity.UserEntity;

import java.util.List;

public interface UserService {
    //登录-查询用户信息
    List<UserEntity> selectUserInfo(UserEntity userEntity);
    //注册-新建用户
    int insertUserInfo(UserEntity userEntity);
}
