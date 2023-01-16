using DAL.DbContexts;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
    public class RecordsRepository : IRecordsRepository
    {
        private readonly  ResultManagementContext _dbContext;
        public RecordsRepository(ResultManagementContext dbContext)
        {
            _dbContext = dbContext;
        }


        public void CreateStudent(Records student)
        {
            //Map this Domain entity to ef models entoty

            EFModels.Record st = new EFModels.Record { DateOfBirth = student.DateOfBirth, Name = student.Name, RollNo = student.RollNo, Score = student.Score };
            _dbContext.Add(st);
            _dbContext.SaveChanges();

        }

        public void DeleteStudent(int RollNo)
        {
            _dbContext.Remove(_dbContext.Records.Where(x => x.RollNo == RollNo).FirstOrDefault());
            _dbContext.SaveChanges();
        }

        public IEnumerable<Records> GetAllStudent()
        {
            return _dbContext.Records.Select(x => new Records {  DateOfBirth = x.DateOfBirth, Name = x.Name, RollNo = x.RollNo, Score = (int)x.Score });

        }

        public Records GetStudent(int RollNo)
        {
            return _dbContext.Records.Where(x => x.RollNo == RollNo).Select(x => new Records {  DateOfBirth=x.DateOfBirth, Name = x.Name, RollNo = x.RollNo, Score = (int)x.Score }).FirstOrDefault();

        }

        public void UpdateStudent(int RollNo, Records book)
        {
            var studentIndex = _dbContext.Records.Where(x => x.RollNo == RollNo).FirstOrDefault();
            studentIndex.Name = book.Name;

            studentIndex.Score = book.Score;
            studentIndex.DateOfBirth = book.DateOfBirth;
            studentIndex.RollNo = book.RollNo;
            _dbContext.SaveChanges();
      
        }
    }
}
