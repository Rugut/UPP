
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Общ)
	///</summary>
	[DataContract]
	public enum ТипыКонтактнойИнформации
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"972971a9-31dd-473f-9c49-b3cc99a0381f\", \"Представление\":\"Адрес\"}")]
		Адрес = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"4cd904b6-2224-41f1-94a0-fd27bdad5c80\", \"Представление\":\"Телефон\"}")]
		Телефон = 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"79c1c3e0-3a7b-41a8-af80-fc923034c1ed\", \"Представление\":\"АдресЭлектроннойПочты\"}")]
		АдресЭлектроннойПочты = 2,//E-Mail
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"6135332b-8e4a-4a06-8e64-c4379ab17307\", \"Представление\":\"ВебСтраница\"}")]
		ВебСтраница = 3,//Веб-страница
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"125ade40-314a-455f-bdd7-34bd5ba49413\", \"Представление\":\"Другое\"}")]
		Другое = 4,
	}
	public static partial class ТипыКонтактнойИнформации_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Адрес = new Guid("ccb3499c-a099-1f38-473f-31dd972971a9");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Телефон = new Guid("27fda094-adbd-805c-41f1-22244cd904b6");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid АдресЭлектроннойПочты = new Guid("92fc80af-3430-edc1-41a8-3a7b79c1c3e0");//E-Mail
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ВебСтраница = new Guid("37c4648e-b19a-0773-4a06-8e4a6135332b");//Веб-страница
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Другое = new Guid("bd34d7bd-a45b-1394-455f-314a125ade40");
		public static ТипыКонтактнойИнформации Получить(this ТипыКонтактнойИнформации Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКонтактнойИнформации Получить(this ТипыКонтактнойИнформации Значение, Guid Ссылка)
		{
			if(Ссылка == Адрес)
			{
				return ТипыКонтактнойИнформации.Адрес;
			}
			else if(Ссылка == Телефон)
			{
				return ТипыКонтактнойИнформации.Телефон;
			}
			else if(Ссылка == АдресЭлектроннойПочты)
			{
				return ТипыКонтактнойИнформации.АдресЭлектроннойПочты;
			}
			else if(Ссылка == ВебСтраница)
			{
				return ТипыКонтактнойИнформации.ВебСтраница;
			}
			else if(Ссылка == Другое)
			{
				return ТипыКонтактнойИнформации.Другое;
			}
			return ТипыКонтактнойИнформации.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКонтактнойИнформации Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКонтактнойИнформации Значение)
		{
			switch (Значение)
			{
				case ТипыКонтактнойИнформации.Адрес: return Адрес;
				case ТипыКонтактнойИнформации.Телефон: return Телефон;
				case ТипыКонтактнойИнформации.АдресЭлектроннойПочты: return АдресЭлектроннойПочты;
				case ТипыКонтактнойИнформации.ВебСтраница: return ВебСтраница;
				case ТипыКонтактнойИнформации.Другое: return Другое;
			}
			return Guid.Empty;
		}
	}
}