
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///Способ вывода отчета
	///</summary>
	[DataContract]
	public enum СпособВыводаОтчета
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"98ee4701-c3ff-4c27-9c56-87b2d0a49b55\", \"Представление\":\"ПоВертикали\"}")]
		ПоВертикали = 0,//По вертикали
		[EnumMember(Value = "{\"Ссылка\":\"a6d4743e-9f04-459f-bdf0-f6b97cca3292\", \"Представление\":\"ПоГоризонтали\"}")]
		ПоГоризонтали = 1,//По горизонтали
	}
	public static partial class СпособВыводаОтчета_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ПоВертикали = new Guid("b287569c-a4d0-559b-4c27-c3ff98ee4701");//По вертикали
		public static readonly Guid ПоГоризонтали = new Guid("b9f6f0bd-ca7c-9232-459f-9f04a6d4743e");//По горизонтали
		public static СпособВыводаОтчета Получить(this СпособВыводаОтчета Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СпособВыводаОтчета Получить(this СпособВыводаОтчета Значение, Guid Ссылка)
		{
			if(Ссылка == ПоВертикали)
			{
				return СпособВыводаОтчета.ПоВертикали;
			}
			else if(Ссылка == ПоГоризонтали)
			{
				return СпособВыводаОтчета.ПоГоризонтали;
			}
			return СпособВыводаОтчета.ПустаяСсылка;
		}
		public static byte[] Ключ(this СпособВыводаОтчета Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СпособВыводаОтчета Значение)
		{
			switch (Значение)
			{
				case СпособВыводаОтчета.ПоВертикали: return ПоВертикали;
				case СпособВыводаОтчета.ПоГоризонтали: return ПоГоризонтали;
			}
			return Guid.Empty;
		}
	}
}