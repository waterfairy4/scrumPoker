package com.dailycodebuffer.employee.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name ="employees")

public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
