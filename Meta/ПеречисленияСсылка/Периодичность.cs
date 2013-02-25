
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Упр)
	///</summary>
	[DataContract]
	public enum Периодичность
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"45bfa26a-2a2a-460b-a77c-f8a92a53a0cc\", \"Представление\":\"День\"}")]
		День = 0,
		[EnumMember(Value = "{\"Ссылка\":\"448e2ef1-9eb3-4163-b197-13921b7f93c3\", \"Представление\":\"Неделя\"}")]
		Неделя = 1,
		[EnumMember(Value = "{\"Ссылка\":\"c56db50d-5854-4add-aea4-d4c019435931\", \"Представление\":\"Месяц\"}")]
		Месяц = 2,
		[EnumMember(Value = "{\"Ссылка\":\"f2f7135d-e262-4e8d-a53f-468546775598\", \"Представление\":\"Квартал\"}")]
		Квартал = 3,
		[EnumMember(Value = "{\"Ссылка\":\"e4ee6590-9b44-4c7e-a7e0-62bdc8e02f1c\", \"Представление\":\"Год\"}")]
		Год = 4,
		[EnumMember(Value = "{\"Ссылка\":\"8c4e1b6b-a2f4-4e75-8c42-0f5595722072\", \"Представление\":\"Декада\"}")]
		Декада = 5,
		[EnumMember(Value = "{\"Ссылка\":\"4f31faac-a367-4f02-8ede-fe552ffc8ad1\", \"Представление\":\"Полугодие\"}")]
		Полугодие = 6,
	}
	public static partial class Периодичность_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid День = new Guid("a9f87ca7-532a-cca0-460b-2a2a45bfa26a");
		public static readonly Guid Неделя = new Guid("921397b1-7f1b-c393-4163-9eb3448e2ef1");
		public static readonly Guid Месяц = new Guid("c0d4a4ae-4319-3159-4add-5854c56db50d");
		public static readonly Guid Квартал = new Guid("85463fa5-7746-9855-4e8d-e262f2f7135d");
		public static readonly Guid Год = new Guid("bd62e0a7-e0c8-1c2f-4c7e-9b44e4ee6590");
		public static readonly Guid Декада = new Guid("550f428c-7295-7220-4e75-a2f48c4e1b6b");
		public static readonly Guid Полугодие = new Guid("55fede8e-fc2f-d18a-4f02-a3674f31faac");
		public static Периодичность Получить(this Периодичность Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static Периодичность Получить(this Периодичность Значение, Guid Ссылка)
		{
			if(Ссылка == День)
			{
				return Периодичность.День;
			}
			else if(Ссылка == Неделя)
			{
				return Периодичность.Неделя;
			}
			else if(Ссылка == Месяц)
			{
				return Периодичность.Месяц;
			}
			else if(Ссылка == Квартал)
			{
				return Периодичность.Квартал;
			}
			else if(Ссылка == Год)
			{
				return Периодичность.Год;
			}
			else if(Ссылка == Декада)
			{
				return Периодичность.Декада;
			}
			else if(Ссылка == Полугодие)
			{
				return Периодичность.Полугодие;
			}
			return Периодичность.ПустаяСсылка;
		}
		public static byte[] Ключ(this Периодичность Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this Периодичность Значение)
		{
			switch (Значение)
			{
				case Периодичность.День: return День;
				case Периодичность.Неделя: return Неделя;
				case Периодичность.Месяц: return Месяц;
				case Периодичность.Квартал: return Квартал;
				case Периодичность.Год: return Год;
				case Периодичность.Декада: return Декада;
				case Периодичность.Полугодие: return Полугодие;
			}
			return Guid.Empty;
		}
	}
}