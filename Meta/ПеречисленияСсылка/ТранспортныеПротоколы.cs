
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТранспортныеПротоколы
	{
		ПустаяСсылка = - 1,
		SMTP = 0,
		POP3 = 1,
		HTTP = 2,
	}
	public static partial class ТранспортныеПротоколы_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid SMTP = new Guid("98b8e788-fdee-6e55-4a5f-cd25d05dfce3");
		public static readonly Guid POP3 = new Guid("c51a95ae-da53-45b2-4585-6fd6048456b8");
		public static readonly Guid HTTP = new Guid("fb392ab2-14d6-5b25-4e6f-2460cf63c87f");
		public static ТранспортныеПротоколы Получить(this ТранспортныеПротоколы Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТранспортныеПротоколы Получить(this ТранспортныеПротоколы Значение, Guid Ссылка)
		{
			if(Ссылка == SMTP)
			{
				return ТранспортныеПротоколы.SMTP;
			}
			else if(Ссылка == POP3)
			{
				return ТранспортныеПротоколы.POP3;
			}
			else if(Ссылка == HTTP)
			{
				return ТранспортныеПротоколы.HTTP;
			}
			return ТранспортныеПротоколы.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТранспортныеПротоколы Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТранспортныеПротоколы Значение)
		{
			switch (Значение)
			{
				case ТранспортныеПротоколы.SMTP: return SMTP;
				case ТранспортныеПротоколы.POP3: return POP3;
				case ТранспортныеПротоколы.HTTP: return HTTP;
			}
			return Guid.Empty;
		}
	}
}