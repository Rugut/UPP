
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыЗначенийРазрядов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"0d66db10-301d-4099-af97-3b9b34d4058c\", \"Представление\":\"Число\"}")]
		Число = 0,
		[EnumMember(Value = "{\"Ссылка\":\"fec65e4b-2ef2-40b8-8d1b-7a3d45c05c03\", \"Представление\":\"Строка\"}")]
		Строка = 1,
	}
	public static partial class ТипыЗначенийРазрядов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Число = new Guid("9b3b97af-d434-8c05-4099-301d0d66db10");
		public static readonly Guid Строка = new Guid("3d7a1b8d-c045-035c-40b8-2ef2fec65e4b");
		public static ТипыЗначенийРазрядов Получить(this ТипыЗначенийРазрядов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыЗначенийРазрядов Получить(this ТипыЗначенийРазрядов Значение, Guid Ссылка)
		{
			if(Ссылка == Число)
			{
				return ТипыЗначенийРазрядов.Число;
			}
			else if(Ссылка == Строка)
			{
				return ТипыЗначенийРазрядов.Строка;
			}
			return ТипыЗначенийРазрядов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыЗначенийРазрядов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыЗначенийРазрядов Значение)
		{
			switch (Значение)
			{
				case ТипыЗначенийРазрядов.Число: return Число;
				case ТипыЗначенийРазрядов.Строка: return Строка;
			}
			return Guid.Empty;
		}
	}
}