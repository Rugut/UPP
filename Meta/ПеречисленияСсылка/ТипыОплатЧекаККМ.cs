
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
	public enum ТипыОплатЧекаККМ
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"a62a6716-3e0e-4d80-a2cc-2846e8d1e175\", \"Представление\":\"Наличные\"}")]
		Наличные = 0,
		[EnumMember(Value = "{\"Ссылка\":\"283b757a-4585-4453-8331-8afa9f3dd85f\", \"Представление\":\"ПлатежнаяКарта\"}")]
		ПлатежнаяКарта = 1,//Платежная карта
		[EnumMember(Value = "{\"Ссылка\":\"778a9cf9-d4df-404c-93dc-0f2eb1c2ab08\", \"Представление\":\"БанковскийКредит\"}")]
		БанковскийКредит = 2,//Банковский кредит
	}
	public static partial class ТипыОплатЧекаККМ_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Наличные = new Guid("4628cca2-d1e8-75e1-4d80-3e0ea62a6716");
		public static readonly Guid ПлатежнаяКарта = new Guid("fa8a3183-3d9f-5fd8-4453-4585283b757a");//Платежная карта
		public static readonly Guid БанковскийКредит = new Guid("2e0fdc93-c2b1-08ab-404c-d4df778a9cf9");//Банковский кредит
		public static ТипыОплатЧекаККМ Получить(this ТипыОплатЧекаККМ Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыОплатЧекаККМ Получить(this ТипыОплатЧекаККМ Значение, Guid Ссылка)
		{
			if(Ссылка == Наличные)
			{
				return ТипыОплатЧекаККМ.Наличные;
			}
			else if(Ссылка == ПлатежнаяКарта)
			{
				return ТипыОплатЧекаККМ.ПлатежнаяКарта;
			}
			else if(Ссылка == БанковскийКредит)
			{
				return ТипыОплатЧекаККМ.БанковскийКредит;
			}
			return ТипыОплатЧекаККМ.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыОплатЧекаККМ Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыОплатЧекаККМ Значение)
		{
			switch (Значение)
			{
				case ТипыОплатЧекаККМ.Наличные: return Наличные;
				case ТипыОплатЧекаККМ.ПлатежнаяКарта: return ПлатежнаяКарта;
				case ТипыОплатЧекаККМ.БанковскийКредит: return БанковскийКредит;
			}
			return Guid.Empty;
		}
	}
}