package com.software.beans;

import java.util.Date;

/**
 * 按时段统计用户访问次数
 */
public class ProdcutResultEntity {

    private String timeData;
    private String counts;

    public String getTimeData() {
        return timeData;
    }

    public void setTimeData(String timeData) {
        this.timeData = timeData;
    }

    public String getCounts() {
        return counts;
    }

    public void setCounts(String counts) {
        this.counts = counts;
    }
}