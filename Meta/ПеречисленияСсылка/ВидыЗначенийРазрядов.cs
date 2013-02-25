
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидыЗначенийРазрядов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"7ef38d2a-5c6e-4ff8-9308-5b13d05df8ec\", \"Представление\":\"Код\"}")]
		Код = 0,
		[EnumMember(Value = "{\"Ссылка\":\"738bd98a-1c08-449d-ab2c-5a3934bd99b7\", \"Представление\":\"Артикул\"}")]
		Артикул = 1,
		[EnumMember(Value = "{\"Ссылка\":\"61af8c5b-2677-4f0d-af48-4ef78119b75c\", \"Представление\":\"Свойство\"}")]
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