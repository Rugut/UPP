
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыКонтролирующихОрганов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"34a9057c-8973-4861-af88-08eeaef55e9d\", \"Представление\":\"ФНС\"}")]
		ФНС = 0,
		[EnumMember(Value = "{\"Ссылка\":\"742fde9a-f8f6-4375-9f4e-e13d89c19f40\", \"Представление\":\"ПФР\"}")]
		ПФР = 1,
		[EnumMember(Value = "{\"Ссылка\":\"51b5abbe-e758-4453-a9b6-4c93e0e03d99\", \"Представление\":\"ФСС\"}")]
		ФСС = 2,
		[EnumMember(Value = "{\"Ссылка\":\"3dfeb33c-359c-48be-9845-0fec4f05807d\", \"Представление\":\"ФСГС\"}")]
		ФСГС = 3,//Росстат
	}
	public static partial class ТипыКонтролирующихОрганов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ФНС = new Guid("ee0888af-f5ae-9d5e-4861-897334a9057c");
		public static readonly Guid ПФР = new Guid("3de14e9f-c189-409f-4375-f8f6742fde9a");
		public static readonly Guid ФСС = new Guid("934cb6a9-e0e0-993d-4453-e75851b5abbe");
		public static readonly Guid ФСГС = new Guid("ec0f4598-054f-7d80-48be-359c3dfeb33c");//Росстат
		public static ТипыКонтролирующихОрганов Получить(this ТипыКонтролирующихОрганов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКонтролирующихОрганов Получить(this ТипыКонтролирующихОрганов Значение, Guid Ссылка)
		{
			if(Ссылка == ФНС)
			{
				return ТипыКонтролирующихОрганов.ФНС;
			}
			else if(Ссылка == ПФР)
			{
				return ТипыКонтролирующихОрганов.ПФР;
			}
			else if(Ссылка == ФСС)
			{
				return ТипыКонтролирующихОрганов.ФСС;
			}
			else if(Ссылка == ФСГС)
			{
				return ТипыКонтролирующихОрганов.ФСГС;
			}
			return ТипыКонтролирующихОрганов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКонтролирующихОрганов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКонтролирующихОрганов Значение)
		{
			switch (Значение)
			{
				case ТипыКонтролирующихОрганов.ФНС: return ФНС;
				case ТипыКонтролирующихОрганов.ПФР: return ПФР;
				case ТипыКонтролирующихОрганов.ФСС: return ФСС;
				case ТипыКонтролирующихОрганов.ФСГС: return ФСГС;
			}
			return Guid.Empty;
		}
	}
}