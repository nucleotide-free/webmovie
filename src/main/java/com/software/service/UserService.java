package com.software.service;

import com.software.dao.Entity.UserEntity;
import com.software.dao.UserEntityMapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface UserService {

    public List<UserEntity> selectUserInfo(Map<String, Object> map);
}
