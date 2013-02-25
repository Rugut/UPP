
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидПриемаРозничнойВыручки
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"e6132b5f-59d4-4e1a-a49f-5beca403c2da\", \"Представление\":\"ИзКассы\"}")]
		ИзКассы = 0,//из кассы
		[EnumMember(Value = "{\"Ссылка\":\"c19352ac-0ec6-4240-8830-5d8ddd81c9ec\", \"Представление\":\"ИзНТТ\"}")]
		ИзНТТ = 1,//из НТТ
	}
	public static partial class ВидПриемаРозничнойВыручки_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ИзКассы = new Guid("ec5b9fa4-03a4-dac2-4e1a-59d4e6132b5f");//из кассы
		public static readonly Guid ИзНТТ = new Guid("8d5d3088-81dd-ecc9-4240-0ec6c19352ac");//из НТТ
		public static ВидПриемаРозничнойВыручки Получить(this ВидПриемаРозничнойВыручки Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидПриемаРозничнойВыручки Получить(this ВидПриемаРозничнойВыручки Значение, Guid Ссылка)
		{
			if(Ссылка == ИзКассы)
			{
				return ВидПриемаРозничнойВыручки.ИзКассы;
			}
			else if(Ссылка == ИзНТТ)
			{
				return ВидПриемаРозничнойВыручки.ИзНТТ;
			}
			return ВидПриемаРозничнойВыручки.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидПриемаРозничнойВыручки Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидПриемаРозничнойВыручки Значение)
		{
			switch (Значение)
			{
				case ВидПриемаРозничнойВыручки.ИзКассы: return ИзКассы;
				case ВидПриемаРозничнойВыручки.ИзНТТ: return ИзНТТ;
			}
			return Guid.Empty;
		}
	}
}