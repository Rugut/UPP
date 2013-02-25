
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum НаправленияВыпуска
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"fa70f225-d200-41a8-b370-1e2d2020d8e5\", \"Представление\":\"НаСклад\"}")]
		НаСклад = 0,//На склад
		[EnumMember(Value = "{\"Ссылка\":\"fd178c6b-8eb2-410f-a462-5565ef43c8bd\", \"Представление\":\"НаЗатраты\"}")]
		НаЗатраты = 1,//На затраты
		[EnumMember(Value = "{\"Ссылка\":\"3f26b021-d263-430a-b16b-364f4d2a1e39\", \"Представление\":\"НаЗатратыСписок\"}")]
		НаЗатратыСписок = 2,//На затраты (список)
	}
	public static partial class НаправленияВыпуска_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid НаСклад = new Guid("2d1e70b3-2020-e5d8-41a8-d200fa70f225");//На склад
		public static readonly Guid НаЗатраты = new Guid("655562a4-43ef-bdc8-410f-8eb2fd178c6b");//На затраты
		public static readonly Guid НаЗатратыСписок = new Guid("4f366bb1-2a4d-391e-430a-d2633f26b021");//На затраты (список)
		public static НаправленияВыпуска Получить(this НаправленияВыпуска Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static НаправленияВыпуска Получить(this НаправленияВыпуска Значение, Guid Ссылка)
		{
			if(Ссылка == НаСклад)
			{
				return НаправленияВыпуска.НаСклад;
			}
			else if(Ссылка == НаЗатраты)
			{
				return НаправленияВыпуска.НаЗатраты;
			}
			else if(Ссылка == НаЗатратыСписок)
			{
				return НаправленияВыпуска.НаЗатратыСписок;
			}
			return НаправленияВыпуска.ПустаяСсылка;
		}
		public static byte[] Ключ(this НаправленияВыпуска Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this НаправленияВыпуска Значение)
		{
			switch (Значение)
			{
				case НаправленияВыпуска.НаСклад: return НаСклад;
				case НаправленияВыпуска.НаЗатраты: return НаЗатраты;
				case НаправленияВыпуска.НаЗатратыСписок: return НаЗатратыСписок;
			}
			return Guid.Empty;
		}
	}
}