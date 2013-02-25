
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
	public enum ВидыДвиженийБухгалтерии
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"4f9fbfea-3bb4-4000-b67a-d23f1e07f54a\", \"Представление\":\"Дебет\"}")]
		Дебет = 0,
		[EnumMember(Value = "{\"Ссылка\":\"fdcefb80-09ca-4ab5-977c-841b162aa2d8\", \"Представление\":\"Кредит\"}")]
		Кредит = 1,
	}
	public static partial class ВидыДвиженийБухгалтерии_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Дебет = new Guid("3fd27ab6-071e-4af5-4000-3bb44f9fbfea");
		public static readonly Guid Кредит = new Guid("1b847c97-2a16-d8a2-4ab5-09cafdcefb80");
		public static ВидыДвиженийБухгалтерии Получить(this ВидыДвиженийБухгалтерии Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыДвиженийБухгалтерии Получить(this ВидыДвиженийБухгалтерии Значение, Guid Ссылка)
		{
			if(Ссылка == Дебет)
			{
				return ВидыДвиженийБухгалтерии.Дебет;
			}
			else if(Ссылка == Кредит)
			{
				return ВидыДвиженийБухгалтерии.Кредит;
			}
			return ВидыДвиженийБухгалтерии.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыДвиженийБухгалтерии Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыДвиженийБухгалтерии Значение)
		{
			switch (Значение)
			{
				case ВидыДвиженийБухгалтерии.Дебет: return Дебет;
				case ВидыДвиженийБухгалтерии.Кредит: return Кредит;
			}
			return Guid.Empty;
		}
	}
}