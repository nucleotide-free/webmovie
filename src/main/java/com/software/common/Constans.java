package com.software.common;

/**
 * Created by administrator.
 */
public class Constans {

    /**
     * 公用成功状态码
     */
    public static final String SUCCESS_CODE = "666"; //成功状态码
    public static final String EXIST_CODE = "20001"; //失败状态码

    public static final String EXIST_MESSAGE = "系统异常";
    public static final String DELETE_MESSAGE = "删除成功";
    public static final String UPDATE_MESSAGE = "修改成功";
    public static final String ADD_MESSAGE = "添加成功";
    public static final String STATUS_MESSAGE = "查询成功";
    public static final String MAKE_MESSAGE = "设置成功";
    public static final String MAKE_MESSAGE_NULL = "没有下一个了";
    public static final String MAKE_ERROR = "设置成功";
    public static final String PROJECT_EXIST_MESSAGE = "有(历史)问卷，不可以删除";

    /**
     * 用户状态码
     */
    public static final String LOGOUT_NO_CODE = "333";

    public static final String LOGIN_MESSAGE = "登录成功";
    public static final String LOGOUT_NO_MESSAGE = "没有登录";
    public static final String LOGIN_USERNAME_MESSAGE = "用户名不存在";
    public static final String LOGIN_PASSWORD_MESSAGE = "密码不正确";

    public static final String LOGOUT_PERMISSION_MESSAGE = "没有权限";

    public static final String USER_CODE = "50001";
    public static final String USER_PASSWORD_MESSAGE = "用户原密码错误";

    public static final String USER_STATUS_CODE = "50002";
    public static final String USER_STATUS_MESSAGE = "管理员不可以关闭";

    public static final String USER_USERNAME_CODE = "50003";
    public static final String USER_USERNAME_MESSAGE = "用户名已存在";

    public static final String USER_DELETE_CODE = "50004";
    public static final String USER_DELETE_MESSAGE = "用户不可删除，请先删除用户所创建的项目、问卷、模板";

    public static final String USER_UPDATE_CODE = "50005";
    public static final String USER_UPDATE_MESSAGE = "您的权限已被关闭";

    public static final String USER_ROLE_DELETE_MESSAGE = "超级管理员不可以被删除";
    public static final String ROLE_HAVE_USER = "此角色对应的用户没有被删除";
    public static final String ROLE_NAME_EXIT = "角色code已经存在";
    public static final String USER_ROLE_UPDATE_MESSAGE = "超级管理员不可以被修改";
    public static final String ROLE_NO_UPDATE = "角色权限不可禁用";
    public static final String PARAMETER_NO_DELETE = "系统配置不可删除";

}
