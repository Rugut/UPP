
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum НазначенияПомещения
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"a7c618d5-4de3-4204-9c5b-7e64bf2fead0\", \"Представление\":\"Жилое\"}")]
		Жилое = 0,
		[EnumMember(Value = "{\"Ссылка\":\"fc84c01b-d4c9-41f2-af96-5b745719e4cc\", \"Представление\":\"Нежилое\"}")]
		Нежилое = 1,
	}
	public static partial class НазначенияПомещения_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Жилое = new Guid("647e5b9c-2fbf-d0ea-4204-4de3a7c618d5");
		public static readonly Guid Нежилое = new Guid("745b96af-1957-cce4-41f2-d4c9fc84c01b");
		public static НазначенияПомещения Получить(this НазначенияПомещения Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static НазначенияПомещения Получить(this НазначенияПомещения Значение, Guid Ссылка)
		{
			if(Ссылка == Жилое)
			{
				return НазначенияПомещения.Жилое;
			}
			else if(Ссылка == Нежилое)
			{
				return НазначенияПомещения.Нежилое;
			}
			return НазначенияПомещения.ПустаяСсылка;
		}
		public static byte[] Ключ(this НазначенияПомещения Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this НазначенияПомещения Значение)
		{
			switch (Значение)
			{
				case НазначенияПомещения.Жилое: return Жилое;
				case НазначенияПомещения.Нежилое: return Нежилое;
			}
			return Guid.Empty;
		}
	}
}