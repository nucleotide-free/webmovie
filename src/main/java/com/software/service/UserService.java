package com.software.service;

import com.software.dao.Entity.UserEntity;
import java.util.*;

public interface UserService {

    public List<UserEntity> selectUserInfo(UserEntity userEntity);
}
