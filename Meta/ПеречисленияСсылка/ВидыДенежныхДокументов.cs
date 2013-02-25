
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ВидыДенежныхДокументов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"ed0a65c3-26b1-4faf-a2bc-95d5423b4d29\", \"Представление\":\"Билеты\"}")]
		Билеты = 0,
		[EnumMember(Value = "{\"Ссылка\":\"59221c90-fb5e-48e7-af5c-42211f2302f7\", \"Представление\":\"Путевки\"}")]
		Путевки = 1,
		[EnumMember(Value = "{\"Ссылка\":\"8b113ee1-cbc3-4825-bbe7-e04c8002561a\", \"Представление\":\"ПочтовыеМарки\"}")]
		ПочтовыеМарки = 2,//Почтовые марки
		[EnumMember(Value = "{\"Ссылка\":\"689411e7-dd94-47a0-848b-d3e94f7d1aea\", \"Представление\":\"ТалоныНаГСМ\"}")]
		ТалоныНаГСМ = 3,//Талоны на ГСМ
		[EnumMember(Value = "{\"Ссылка\":\"d67f01d1-7cb1-49e6-a1ae-54770a314f02\", \"Представление\":\"Прочее\"}")]
		Прочее = 4,
	}
	public static partial class ВидыДенежныхДокументов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Билеты = new Guid("d595bca2-3b42-294d-4faf-26b1ed0a65c3");
		public static readonly Guid Путевки = new Guid("21425caf-231f-f702-48e7-fb5e59221c90");
		public static readonly Guid ПочтовыеМарки = new Guid("4ce0e7bb-0280-1a56-4825-cbc38b113ee1");//Почтовые марки
		public static readonly Guid ТалоныНаГСМ = new Guid("e9d38b84-7d4f-ea1a-47a0-dd94689411e7");//Талоны на ГСМ
		public static readonly Guid Прочее = new Guid("7754aea1-310a-024f-49e6-7cb1d67f01d1");
		public static ВидыДенежныхДокументов Получить(this ВидыДенежныхДокументов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыДенежныхДокументов Получить(this ВидыДенежныхДокументов Значение, Guid Ссылка)
		{
			if(Ссылка == Билеты)
			{
				return ВидыДенежныхДокументов.Билеты;
			}
			else if(Ссылка == Путевки)
			{
				return ВидыДенежныхДокументов.Путевки;
			}
			else if(Ссылка == ПочтовыеМарки)
			{
				return ВидыДенежныхДокументов.ПочтовыеМарки;
			}
			else if(Ссылка == ТалоныНаГСМ)
			{
				return ВидыДенежныхДокументов.ТалоныНаГСМ;
			}
			else if(Ссылка == Прочее)
			{
				return ВидыДенежныхДокументов.Прочее;
			}
			return ВидыДенежныхДокументов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыДенежныхДокументов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыДенежныхДокументов Значение)
		{
			switch (Значение)
			{
				case ВидыДенежныхДокументов.Билеты: return Билеты;
				case ВидыДенежныхДокументов.Путевки: return Путевки;
				case ВидыДенежныхДокументов.ПочтовыеМарки: return ПочтовыеМарки;
				case ВидыДенежныхДокументов.ТалоныНаГСМ: return ТалоныНаГСМ;
				case ВидыДенежныхДокументов.Прочее: return Прочее;
			}
			return Guid.Empty;
		}
	}
}