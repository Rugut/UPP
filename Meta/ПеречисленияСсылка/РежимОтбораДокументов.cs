
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum РежимОтбораДокументов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"ce819f81-66e4-4c8d-a5d4-0c782bf43bd6\", \"Представление\":\"ПоРеквизитам\"}")]
		ПоРеквизитам = 0,//По реквизитам
		[EnumMember(Value = "{\"Ссылка\":\"afbd8899-345e-476b-80a0-5b6d6f741e97\", \"Представление\":\"ПоОборотам\"}")]
		ПоОборотам = 1,//По оборотам
	}
	public static partial class РежимОтбораДокументов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ПоРеквизитам = new Guid("780cd4a5-f42b-d63b-4c8d-66e4ce819f81");//По реквизитам
		public static readonly Guid ПоОборотам = new Guid("6d5ba080-746f-971e-476b-345eafbd8899");//По оборотам
		public static РежимОтбораДокументов Получить(this РежимОтбораДокументов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static РежимОтбораДокументов Получить(this РежимОтбораДокументов Значение, Guid Ссылка)
		{
			if(Ссылка == ПоРеквизитам)
			{
				return РежимОтбораДокументов.ПоРеквизитам;
			}
			else if(Ссылка == ПоОборотам)
			{
				return РежимОтбораДокументов.ПоОборотам;
			}
			return РежимОтбораДокументов.ПустаяСсылка;
		}
		public static byte[] Ключ(this РежимОтбораДокументов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this РежимОтбораДокументов Значение)
		{
			switch (Значение)
			{
				case РежимОтбораДокументов.ПоРеквизитам: return ПоРеквизитам;
				case РежимОтбораДокументов.ПоОборотам: return ПоОборотам;
			}
			return Guid.Empty;
		}
	}
}