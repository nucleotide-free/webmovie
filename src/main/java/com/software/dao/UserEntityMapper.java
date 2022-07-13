package com.software.dao;

import com.software.dao.Entity.UserEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Repository
public interface UserEntityMapper {
    /**
     * 1-根据用户名查找用户信息
     * @param userEntity
     * @return
     */
    List<UserEntity> selectUserInfo(UserEntity userEntity);
}
