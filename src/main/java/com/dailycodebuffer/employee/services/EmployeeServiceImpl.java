package com.dailycodebuffer.employee.services;

import com.dailycodebuffer.employee.entity.EmployeeEntity;
import com.dailycodebuffer.employee.model.Employee;
import com.dailycodebuffer.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements  EmployeeService{
  private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity=new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities=employeeRepository.findAll();
        List<Employee> employees=employeeEntities.stream().map(emp-> new Employee(emp.getId(),emp.getSprintTitle(),emp.getSprintObjectives(),emp.getAssignedUsers(),emp.getSprintBacklog(),emp.getEstimatedEffort(),emp.getNotes(),emp.getSprintStartDate(),emp.getSprintEndDate())).collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee=employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee= new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
        employeeEntity.setSprintTitle(employee.getSprintTitle());
        employeeEntity.setSprintObjectives(employee.getSprintObjectives());
        employeeEntity.setAssignedUsers(employee.getAssignedUsers());
        employeeEntity.setSprintBacklog(employee.getSprintBacklog());
        employeeEntity.setEstimatedEffort(employee.getEstimatedEffort());
        employeeEntity.setNotes(employee.getNotes());
        employeeEntity.setSprintStartDate(employee.getSprintStartDate());
        employeeEntity.setSprintEndDate(employee.getSprintEndDate());
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
