using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reactcurdapp.Models;
using System.Reflection.Metadata.Ecma335;

namespace Reactcurdapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly AddEmployeeDbContext _addEmployeeDbContext;
        public EmployeeController(AddEmployeeDbContext addEmployeeDbContext)

        {
            _addEmployeeDbContext = addEmployeeDbContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            if (_addEmployeeDbContext.Employees == null)
            {
                return NotFound();
            }
            return await _addEmployeeDbContext.Employees.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            if (_addEmployeeDbContext.Employees == null)
            {
                return NotFound();
            }
            var employee = await _addEmployeeDbContext.Employees.FindAsync(id);
            if (employee == null)
            {
               return NotFound();
            }
            return employee;
        }

        [HttpPost]
        public async Task<ActionResult<Employee>>PostEmployee(Employee employee)
        {
         _addEmployeeDbContext.Employees.Add(employee);
            await _addEmployeeDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployee), new { id = employee.ID }, employee);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult>PutEmployee(int id, Employee employee)
        {
            if(id!=employee.ID)
            {
              return BadRequest();
            }
            _addEmployeeDbContext.Entry(employee).State = EntityState.Modified;
            try
            {
                await _addEmployeeDbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            if(_addEmployeeDbContext.Employees == null)
            {
                return NotFound();
            }
            var employee=await _addEmployeeDbContext.Employees.FindAsync(id);
            if (employee==null)
            {
                return NotFound();
            }
            _addEmployeeDbContext.Employees.Remove(employee);
            await _addEmployeeDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
