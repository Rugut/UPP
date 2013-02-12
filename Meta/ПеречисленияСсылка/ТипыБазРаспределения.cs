
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТипыБазРаспределения
	{
		ПустаяСсылка = - 1,
		Предопределенный = 0,
		Табличный = 1,
		СКД = 2,//По данным ИБ
	}
	public static partial class ТипыБазРаспределения_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Предопределенный = new Guid("b775e8bc-317f-c8e0-4139-22ad4ba5fd6f");
		public static readonly Guid Табличный = new Guid("a5f5088a-1546-def0-4bc4-709134f86ba4");
		public static readonly Guid СКД = new Guid("d7a83aa4-3ae2-6749-4c28-7ae4d23ff084");//По данным ИБ
		public static ТипыБазРаспределения Получить(this ТипыБазРаспределения Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыБазРаспределения Получить(this ТипыБазРаспределения Значение, Guid Ссылка)
		{
			if(Ссылка == Предопределенный)
			{
				return ТипыБазРаспределения.Предопределенный;
			}
			else if(Ссылка == Табличный)
			{
				return ТипыБазРаспределения.Табличный;
			}
			else if(Ссылка == СКД)
			{
				return ТипыБазРаспределения.СКД;
			}
			return ТипыБазРаспределения.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыБазРаспределения Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыБазРаспределения Значение)
		{
			switch (Значение)
			{
				case ТипыБазРаспределения.Предопределенный: return Предопределенный;
				case ТипыБазРаспределения.Табличный: return Табличный;
				case ТипыБазРаспределения.СКД: return СКД;
			}
			return Guid.Empty;
		}
	}
}