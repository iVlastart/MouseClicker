using System;
using System.Collections.Generic;
using System.Text;

namespace MouseClicker
{
    internal static class Cheese
    {
		private static UInt128 _cheese;

		internal static UInt128 cheese
		{
			get { return _cheese; }
			set
			{
				_cheese=_cheese<0?0:value;
            }
		}

		internal static string setCheeseLabel()
		{
			return $"{cheese.ToString()} cheese";
		}

    }
}
