package com.software.service;

import com.software.dao.Entity.UserEntity;
import com.software.dao.UserEntityMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public interface UserService {

    public List<UserEntity> selectUserInfo(UserEntity userEntity);
}
