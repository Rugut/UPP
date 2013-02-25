
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыДомов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"9836bf4d-e21c-402a-aee5-bc86914297f8\", \"Представление\":\"Дом\"}")]
		Дом = 0,
		[EnumMember(Value = "{\"Ссылка\":\"73a5cfd7-76af-43a8-a416-22da59bbb66f\", \"Представление\":\"Владение\"}")]
		Владение = 1,
	}
	public static partial class ТипыДомов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Дом = new Guid("86bce5ae-4291-f897-402a-e21c9836bf4d");
		public static readonly Guid Владение = new Guid("da2216a4-bb59-6fb6-43a8-76af73a5cfd7");
		public static ТипыДомов Получить(this ТипыДомов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыДомов Получить(this ТипыДомов Значение, Guid Ссылка)
		{
			if(Ссылка == Дом)
			{
				return ТипыДомов.Дом;
			}
			else if(Ссылка == Владение)
			{
				return ТипыДомов.Владение;
			}
			return ТипыДомов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыДомов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыДомов Значение)
		{
			switch (Значение)
			{
				case ТипыДомов.Дом: return Дом;
				case ТипыДомов.Владение: return Владение;
			}
			return Guid.Empty;
		}
	}
}