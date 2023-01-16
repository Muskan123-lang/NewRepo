using Interfaces;
using System;
using System.Collections.Generic;

namespace BL
{
    public class RecordsServices : IRecordsServices
    {
        private readonly IRecordsRepository _recordsRepository;

        public RecordsServices(IRecordsRepository recordsRepository)
        {
            _recordsRepository = recordsRepository;
        }
        public void CreateStudent(Records student)
        {
            //If you want to change anything in the student object do it in the business layer here itself
            _recordsRepository.CreateStudent(student);
        }

        public void DeleteStudent(int RollNo)
        {
            _recordsRepository.DeleteStudent(RollNo);
        }

        public IEnumerable<Records> GetAllStudent()
        {
            return _recordsRepository.GetAllStudent();
        }

        public Records GetStudent(int RollNo)
        {
            return _recordsRepository.GetStudent(RollNo);
        }

        public void UpdateStudent(int RollNo, Records book)
        {
            _recordsRepository.UpdateStudent(RollNo, book);
        }

    }
}
