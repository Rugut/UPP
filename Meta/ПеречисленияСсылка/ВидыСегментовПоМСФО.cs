
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
	public enum ВидыСегментовПоМСФО
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"afb47dc8-d452-4244-ac9f-c8e477904179\", \"Представление\":\"Региональный\"}")]
		Региональный = 0,
		[EnumMember(Value = "{\"Ссылка\":\"e3af26ab-5e16-4e29-9114-0a84923f6d40\", \"Представление\":\"Отраслевой\"}")]
		Отраслевой = 1,
	}
	public static partial class ВидыСегментовПоМСФО_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Региональный = new Guid("e4c89fac-9077-7941-4244-d452afb47dc8");
		public static readonly Guid Отраслевой = new Guid("840a1491-3f92-406d-4e29-5e16e3af26ab");
		public static ВидыСегментовПоМСФО Получить(this ВидыСегментовПоМСФО Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСегментовПоМСФО Получить(this ВидыСегментовПоМСФО Значение, Guid Ссылка)
		{
			if(Ссылка == Региональный)
			{
				return ВидыСегментовПоМСФО.Региональный;
			}
			else if(Ссылка == Отраслевой)
			{
				return ВидыСегментовПоМСФО.Отраслевой;
			}
			return ВидыСегментовПоМСФО.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСегментовПоМСФО Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСегментовПоМСФО Значение)
		{
			switch (Значение)
			{
				case ВидыСегментовПоМСФО.Региональный: return Региональный;
				case ВидыСегментовПоМСФО.Отраслевой: return Отраслевой;
			}
			return Guid.Empty;
		}
	}
}