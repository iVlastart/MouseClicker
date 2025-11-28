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
				_cheese=value;
            }
		}

        private static UInt128 cps;

        internal static UInt128 CPS
        {
            get { return cps; }
            set
            {
                cps = value;
            }
        }

        internal static string setCheeseLabel()
		{
			return $"{cheese.ToString()} cheese";
		}

        internal static string setCPSLabel()
        {
            return $"{CPS.ToString()} CPS";
        }

    }
}
