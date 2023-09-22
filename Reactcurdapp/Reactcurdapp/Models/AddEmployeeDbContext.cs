using Microsoft.EntityFrameworkCore;

namespace Reactcurdapp.Models
{
    public class AddEmployeeDbContext:DbContext
    {
        public AddEmployeeDbContext(DbContextOptions<AddEmployeeDbContext>options):base(options)

        {
            
        }

        public DbSet<Employee> Employees { get; set; }

    }
}
