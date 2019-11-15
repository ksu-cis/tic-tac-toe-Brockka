﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TicTacToe.Checkers;

namespace TicTacToe.Pages.Shared
{
    public class CheckersModel : PageModel
    {
        public Game Game;


        public void OnGet()
        {
            Game = new Game();
        }

        public void OnPost(int checkerX, int checkerY, int squareX, int squareY)
        {
            Game = new Game();
            Checkers.Checkers checker = Game.Board[checkerX, checkerY];
            Game.Board[squareX, squareY] = checker;
            Game.Board[checkerX, checkerY] = null;

        }

        public string Serialize()
        {
            for(int y = 0; y <8; y++)
            {
                for (int x = 0; x< 8; x++)
                {
                    
                }
            }
            return "x";

        }
    }
}