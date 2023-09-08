package com.dailycodebuffer.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private long id;
    private String sprintTitle;
    private String sprintObjectives;
    private String assignedUsers;
    private String sprintBacklog;
    private String estimatedEffort;
    private String notes;
    private String sprintStartDate;
    private String sprintEndDate;
}
