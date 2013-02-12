
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum РасчетыВозврат
	{
		ПустаяСсылка = - 1,
		Расчеты = 0,
		Возврат = 1,
	}
	public static partial class РасчетыВозврат_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Расчеты = new Guid("173358b8-80a0-a1a6-423f-dc0b23e68883");
		public static readonly Guid Возврат = new Guid("37d3b886-4eff-bff4-430f-e6030b4ef259");
		public static РасчетыВозврат Получить(this РасчетыВозврат Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static РасчетыВозврат Получить(this РасчетыВозврат Значение, Guid Ссылка)
		{
			if(Ссылка == Расчеты)
			{
				return РасчетыВозврат.Расчеты;
			}
			else if(Ссылка == Возврат)
			{
				return РасчетыВозврат.Возврат;
			}
			return РасчетыВозврат.ПустаяСсылка;
		}
		public static byte[] Ключ(this РасчетыВозврат Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this РасчетыВозврат Значение)
		{
			switch (Значение)
			{
				case РасчетыВозврат.Расчеты: return Расчеты;
				case РасчетыВозврат.Возврат: return Возврат;
			}
			return Guid.Empty;
		}
	}
}