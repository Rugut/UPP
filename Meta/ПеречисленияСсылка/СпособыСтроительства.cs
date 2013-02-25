
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(регл)
	///</summary>
	[DataContract]
	public enum СпособыСтроительства
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///С привлечением подрядных организаций
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"19838f7f-c4b9-4e06-b27c-b771316c9696\", \"Представление\":\"Подрядный\"}")]
		Подрядный = 0,
	///<summary>
	///Строительство собственными силами
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"a41cdbe4-9d2c-48d9-b9f3-8c09b2e25a98\", \"Представление\":\"Хозспособ\"}")]
		Хозспособ = 1,
	}
	public static partial class СпособыСтроительства_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///С привлечением подрядных организаций
		///</summary>
		public static readonly Guid Подрядный = new Guid("71b77cb2-6c31-9696-4e06-c4b919838f7f");
		///<summary>
		///Строительство собственными силами
		///</summary>
		public static readonly Guid Хозспособ = new Guid("098cf3b9-e2b2-985a-48d9-9d2ca41cdbe4");
		public static СпособыСтроительства Получить(this СпособыСтроительства Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СпособыСтроительства Получить(this СпособыСтроительства Значение, Guid Ссылка)
		{
			if(Ссылка == Подрядный)
			{
				return СпособыСтроительства.Подрядный;
			}
			else if(Ссылка == Хозспособ)
			{
				return СпособыСтроительства.Хозспособ;
			}
			return СпособыСтроительства.ПустаяСсылка;
		}
		public static byte[] Ключ(this СпособыСтроительства Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СпособыСтроительства Значение)
		{
			switch (Значение)
			{
				case СпособыСтроительства.Подрядный: return Подрядный;
				case СпособыСтроительства.Хозспособ: return Хозспособ;
			}
			return Guid.Empty;
		}
	}
}