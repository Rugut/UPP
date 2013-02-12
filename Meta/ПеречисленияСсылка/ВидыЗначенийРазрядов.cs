
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ВидыЗначенийРазрядов
	{
		ПустаяСсылка = - 1,
		Код = 0,
		Артикул = 1,
		Свойство = 2,
	}
	public static partial class ВидыЗначенийРазрядов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Код = new Guid("135b0893-5dd0-ecf8-4ff8-5c6e7ef38d2a");
		public static readonly Guid Артикул = new Guid("395a2cab-bd34-b799-449d-1c08738bd98a");
		public static readonly Guid Свойство = new Guid("f74e48af-1981-5cb7-4f0d-267761af8c5b");
		public static ВидыЗначенийРазрядов Получить(this ВидыЗначенийРазрядов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыЗначенийРазрядов Получить(this ВидыЗначенийРазрядов Значение, Guid Ссылка)
		{
			if(Ссылка == Код)
			{
				return ВидыЗначенийРазрядов.Код;
			}
			else if(Ссылка == Артикул)
			{
				return ВидыЗначенийРазрядов.Артикул;
			}
			else if(Ссылка == Свойство)
			{
				return ВидыЗначенийРазрядов.Свойство;
			}
			return ВидыЗначенийРазрядов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыЗначенийРазрядов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыЗначенийРазрядов Значение)
		{
			switch (Значение)
			{
				case ВидыЗначенийРазрядов.Код: return Код;
				case ВидыЗначенийРазрядов.Артикул: return Артикул;
				case ВидыЗначенийРазрядов.Свойство: return Свойство;
			}
			return Guid.Empty;
		}
	}
}