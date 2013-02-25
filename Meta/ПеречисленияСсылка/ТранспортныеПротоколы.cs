
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТранспортныеПротоколы
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"d05dfce3-cd25-4a5f-88e7-b898eefd556e\", \"Представление\":\"SMTP\"}")]
		SMTP = 0,
		[EnumMember(Value = "{\"Ссылка\":\"048456b8-6fd6-4585-ae95-1ac553dab245\", \"Представление\":\"POP3\"}")]
		POP3 = 1,
		[EnumMember(Value = "{\"Ссылка\":\"cf63c87f-2460-4e6f-b22a-39fbd614255b\", \"Представление\":\"HTTP\"}")]
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