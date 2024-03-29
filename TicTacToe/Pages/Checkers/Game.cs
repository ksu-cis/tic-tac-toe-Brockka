﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe.Checkers
{
    public class Game
    {
        public Color Turn = Color.red;

        public Checkers[,] Board = new Checkers[8, 8];

        public Game()
        {
            for(int i=0; i<8; i += 2)
            {
                Board[i, 0] = new Checkers(Color.black);
                Board[i +1, 1] = new Checkers(Color.black);
                Board[i, 2] = new Checkers(Color.black);

                Board[i, 5] = new Checkers(Color.red);
                Board[i +1, 6] = new Checkers(Color.red);
                Board[i, 7] = new Checkers(Color.red);
            }
        }
    }
}
