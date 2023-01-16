using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.EFModels
{
    public partial class Record
    {
        public int RollNo { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int? Score { get; set; }
    }
}
