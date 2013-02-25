
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ПредставленияЭлементовОтчетов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"6cc0f3ce-a15d-4ed1-bdb4-70d82c398362\", \"Представление\":\"Таблица\"}")]
		Таблица = 0,
		[EnumMember(Value = "{\"Ссылка\":\"d18171d0-7dbc-4d55-9fb4-180faef46a4b\", \"Представление\":\"КроссТаблица\"}")]
		КроссТаблица = 1,//Кросс-таблица
		[EnumMember(Value = "{\"Ссылка\":\"0d9f8b8e-27c2-4bce-ae7f-fbaab0ea6cab\", \"Представление\":\"Диаграмма\"}")]
		Диаграмма = 2,
		[EnumMember(Value = "{\"Ссылка\":\"d77f02c6-bf83-4d5c-9c61-4ef5f2988f53\", \"Представление\":\"Сложный\"}")]
		Сложный = 3,
	}
	public static partial class ПредставленияЭлементовОтчетов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Таблица = new Guid("d870b4bd-392c-6283-4ed1-a15d6cc0f3ce");
		public static readonly Guid КроссТаблица = new Guid("0f18b49f-f4ae-4b6a-4d55-7dbcd18171d0");//Кросс-таблица
		public static readonly Guid Диаграмма = new Guid("aafb7fae-eab0-ab6c-4bce-27c20d9f8b8e");
		public static readonly Guid Сложный = new Guid("f54e619c-98f2-538f-4d5c-bf83d77f02c6");
		public static ПредставленияЭлементовОтчетов Получить(this ПредставленияЭлементовОтчетов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПредставленияЭлементовОтчетов Получить(this ПредставленияЭлементовОтчетов Значение, Guid Ссылка)
		{
			if(Ссылка == Таблица)
			{
				return ПредставленияЭлементовОтчетов.Таблица;
			}
			else if(Ссылка == КроссТаблица)
			{
				return ПредставленияЭлементовОтчетов.КроссТаблица;
			}
			else if(Ссылка == Диаграмма)
			{
				return ПредставленияЭлементовОтчетов.Диаграмма;
			}
			else if(Ссылка == Сложный)
			{
				return ПредставленияЭлементовОтчетов.Сложный;
			}
			return ПредставленияЭлементовОтчетов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПредставленияЭлементовОтчетов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПредставленияЭлементовОтчетов Значение)
		{
			switch (Значение)
			{
				case ПредставленияЭлементовОтчетов.Таблица: return Таблица;
				case ПредставленияЭлементовОтчетов.КроссТаблица: return КроссТаблица;
				case ПредставленияЭлементовОтчетов.Диаграмма: return Диаграмма;
				case ПредставленияЭлементовОтчетов.Сложный: return Сложный;
			}
			return Guid.Empty;
		}
	}
}