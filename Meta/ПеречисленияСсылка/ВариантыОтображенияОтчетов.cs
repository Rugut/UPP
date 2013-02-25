
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///Варианты отображения отчетов
	///</summary>
	[DataContract]
	public enum ВариантыОтображенияОтчетов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"9a5a972f-bc0e-4bcd-a9e4-2e99f6ca47dc\", \"Представление\":\"СводнаяТаблица\"}")]
		СводнаяТаблица = 0,//Сводная таблица
		[EnumMember(Value = "{\"Ссылка\":\"ab7cfa7c-23e6-497a-8a52-2966788f9dcd\", \"Представление\":\"Диаграмма\"}")]
		Диаграмма = 1,
		[EnumMember(Value = "{\"Ссылка\":\"1bd7a7e6-4aec-4c31-9cc0-b1f18d803226\", \"Представление\":\"Таблица\"}")]
		Таблица = 2,
	}
	public static partial class ВариантыОтображенияОтчетов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid СводнаяТаблица = new Guid("992ee4a9-caf6-dc47-4bcd-bc0e9a5a972f");//Сводная таблица
		public static readonly Guid Диаграмма = new Guid("6629528a-8f78-cd9d-497a-23e6ab7cfa7c");
		public static readonly Guid Таблица = new Guid("f1b1c09c-808d-2632-4c31-4aec1bd7a7e6");
		public static ВариантыОтображенияОтчетов Получить(this ВариантыОтображенияОтчетов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВариантыОтображенияОтчетов Получить(this ВариантыОтображенияОтчетов Значение, Guid Ссылка)
		{
			if(Ссылка == СводнаяТаблица)
			{
				return ВариантыОтображенияОтчетов.СводнаяТаблица;
			}
			else if(Ссылка == Диаграмма)
			{
				return ВариантыОтображенияОтчетов.Диаграмма;
			}
			else if(Ссылка == Таблица)
			{
				return ВариантыОтображенияОтчетов.Таблица;
			}
			return ВариантыОтображенияОтчетов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВариантыОтображенияОтчетов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВариантыОтображенияОтчетов Значение)
		{
			switch (Значение)
			{
				case ВариантыОтображенияОтчетов.СводнаяТаблица: return СводнаяТаблица;
				case ВариантыОтображенияОтчетов.Диаграмма: return Диаграмма;
				case ВариантыОтображенияОтчетов.Таблица: return Таблица;
			}
			return Guid.Empty;
		}
	}
}