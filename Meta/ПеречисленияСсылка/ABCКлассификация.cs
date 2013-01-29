
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ABCКлассификация
	{
		ПустаяСсылка = - 1,
		AКласс = 0,//A - класс
		BКласс = 1,//B - класс
		CКласс = 2,//C - класс
	}
	public static partial class ABCКлассификация_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid AКласс = new Guid("3086dc81-621e-e183-4a8f-06560888700c");//A - класс
		public static readonly Guid BКласс = new Guid("bec48db2-c370-bfe9-4d3e-cb639e4207b6");//B - класс
		public static readonly Guid CКласс = new Guid("12686896-1993-98c3-4f55-d4cdbd0ffda8");//C - класс
		public static ABCКлассификация Получить(this ABCКлассификация Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ABCКлассификация Получить(this ABCКлассификация Значение, Guid Ссылка)
		{
			if(Ссылка == AКласс)
			{
				return ABCКлассификация.AКласс;
			}
			else if(Ссылка == BКласс)
			{
				return ABCКлассификация.BКласс;
			}
			else if(Ссылка == CКласс)
			{
				return ABCКлассификация.CКласс;
			}
			return ABCКлассификация.ПустаяСсылка;
		}
		public static byte[] Ключ(this ABCКлассификация Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ABCКлассификация Значение)
		{
			switch (Значение)
			{
				case ABCКлассификация.AКласс: return AКласс;
				case ABCКлассификация.BКласс: return BКласс;
				case ABCКлассификация.CКласс: return CКласс;
			}
			return Guid.Empty;
		}
	}
}
