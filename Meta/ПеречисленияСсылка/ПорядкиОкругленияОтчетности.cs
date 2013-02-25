
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
	public enum ПорядкиОкругленияОтчетности
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"294ed411-060d-46f6-92af-417031844766\", \"Представление\":\"Окр1\"}")]
		Окр1 = 0,//1
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"7e85a6d7-84d0-43b2-9101-52c6b50c957d\", \"Представление\":\"Окр1000\"}")]
		Окр1000 = 1,//1 000
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"9d574fc0-06fd-4804-b76c-fb366e9752e9\", \"Представление\":\"Окр1000000\"}")]
		Окр1000000 = 2,//1 000 000
	}
	public static partial class ПорядкиОкругленияОтчетности_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр1 = new Guid("7041af92-8431-6647-46f6-060d294ed411");//1
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр1000 = new Guid("c6520191-0cb5-7d95-43b2-84d07e85a6d7");//1 000
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр1000000 = new Guid("36fb6cb7-976e-e952-4804-06fd9d574fc0");//1 000 000
		public static ПорядкиОкругленияОтчетности Получить(this ПорядкиОкругленияОтчетности Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПорядкиОкругленияОтчетности Получить(this ПорядкиОкругленияОтчетности Значение, Guid Ссылка)
		{
			if(Ссылка == Окр1)
			{
				return ПорядкиОкругленияОтчетности.Окр1;
			}
			else if(Ссылка == Окр1000)
			{
				return ПорядкиОкругленияОтчетности.Окр1000;
			}
			else if(Ссылка == Окр1000000)
			{
				return ПорядкиОкругленияОтчетности.Окр1000000;
			}
			return ПорядкиОкругленияОтчетности.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПорядкиОкругленияОтчетности Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПорядкиОкругленияОтчетности Значение)
		{
			switch (Значение)
			{
				case ПорядкиОкругленияОтчетности.Окр1: return Окр1;
				case ПорядкиОкругленияОтчетности.Окр1000: return Окр1000;
				case ПорядкиОкругленияОтчетности.Окр1000000: return Окр1000000;
			}
			return Guid.Empty;
		}
	}
}