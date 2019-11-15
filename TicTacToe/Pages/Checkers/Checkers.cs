using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe.Checkers
{
    public class Checkers
    {
        public Color Color { get; set; }

        public bool King { get; set; } = false;

        public Checkers(Color c)
        {
            this.Color = c;
        }
    }
}
