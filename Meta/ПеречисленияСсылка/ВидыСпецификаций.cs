
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ВидыСпецификаций
	{
		ПустаяСсылка = - 1,
		Сборочная = 0,
		Полная = 1,
		Узел = 2,
	}
	public static partial class ВидыСпецификаций_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Сборочная = new Guid("7c014684-175c-a47e-4fef-99c53a9ea153");
		public static readonly Guid Полная = new Guid("fc367b80-dd48-e49d-446c-88244ed263a3");
		public static readonly Guid Узел = new Guid("bc0bffb6-7030-bf58-4d45-fca5988a8782");
		public static ВидыСпецификаций Получить(this ВидыСпецификаций Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСпецификаций Получить(this ВидыСпецификаций Значение, Guid Ссылка)
		{
			if(Ссылка == Сборочная)
			{
				return ВидыСпецификаций.Сборочная;
			}
			else if(Ссылка == Полная)
			{
				return ВидыСпецификаций.Полная;
			}
			else if(Ссылка == Узел)
			{
				return ВидыСпецификаций.Узел;
			}
			return ВидыСпецификаций.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСпецификаций Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСпецификаций Значение)
		{
			switch (Значение)
			{
				case ВидыСпецификаций.Сборочная: return Сборочная;
				case ВидыСпецификаций.Полная: return Полная;
				case ВидыСпецификаций.Узел: return Узел;
			}
			return Guid.Empty;
		}
	}
}