using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IRecordsRepository
    {
        public IEnumerable<Records> GetAllStudent();

        public Records GetStudent(int RollNo);

        public void CreateStudent(Records student);

        public void UpdateStudent(int RollNo, Records records);

        public void DeleteStudent(int RollNo);
    }
}
