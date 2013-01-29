
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬ход€щее»сход€щее—обытие
	{
		ѕуста€—сылка = - 1,
		¬ход€щее = 0,
		»сход€щее = 1,
	}
	public static partial class ¬ход€щее»сход€щее—обытие_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid ¬ход€щее = new Guid("6efaaaac-53c6-701b-4f08-3c023642a5f3");
		public static readonly Guid »сход€щее = new Guid("b08a0d97-d6b8-ed36-4ed8-c9beac5a6c99");
		public static ¬ход€щее»сход€щее—обытие ѕолучить(this ¬ход€щее»сход€щее—обытие «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬ход€щее»сход€щее—обытие ѕолучить(this ¬ход€щее»сход€щее—обытие «начение, Guid —сылка)
		{
			if(—сылка == ¬ход€щее)
			{
				return ¬ход€щее»сход€щее—обытие.¬ход€щее;
			}
			else if(—сылка == »сход€щее)
			{
				return ¬ход€щее»сход€щее—обытие.»сход€щее;
			}
			return ¬ход€щее»сход€щее—обытие.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬ход€щее»сход€щее—обытие «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬ход€щее»сход€щее—обытие «начение)
		{
			switch («начение)
			{
				case ¬ход€щее»сход€щее—обытие.¬ход€щее: return ¬ход€щее;
				case ¬ход€щее»сход€щее—обытие.»сход€щее: return »сход€щее;
			}
			return Guid.Empty;
		}
	}
}
