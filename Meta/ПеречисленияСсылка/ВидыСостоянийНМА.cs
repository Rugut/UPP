
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Регл)
	///</summary>
	[DataContract]
	public enum ВидыСостоянийНМА
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"801ac213-cdec-473d-abcf-2bfb3c325e27\", \"Представление\":\"Поступил\"}")]
		Поступил = 0,
		[EnumMember(Value = "{\"Ссылка\":\"766269dc-3abe-47a1-ba80-33c2ef95c341\", \"Представление\":\"ПринятКУчету\"}")]
		ПринятКУчету = 1,//Принят к учету
		[EnumMember(Value = "{\"Ссылка\":\"8b0453e4-a7aa-4dc9-ad91-45500c564ca6\", \"Представление\":\"Списан\"}")]
		Списан = 2,
	}
	public static partial class ВидыСостоянийНМА_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Поступил = new Guid("fb2bcfab-323c-275e-473d-cdec801ac213");
		public static readonly Guid ПринятКУчету = new Guid("c23380ba-95ef-41c3-47a1-3abe766269dc");//Принят к учету
		public static readonly Guid Списан = new Guid("504591ad-560c-a64c-4dc9-a7aa8b0453e4");
		public static ВидыСостоянийНМА Получить(this ВидыСостоянийНМА Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСостоянийНМА Получить(this ВидыСостоянийНМА Значение, Guid Ссылка)
		{
			if(Ссылка == Поступил)
			{
				return ВидыСостоянийНМА.Поступил;
			}
			else if(Ссылка == ПринятКУчету)
			{
				return ВидыСостоянийНМА.ПринятКУчету;
			}
			else if(Ссылка == Списан)
			{
				return ВидыСостоянийНМА.Списан;
			}
			return ВидыСостоянийНМА.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСостоянийНМА Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСостоянийНМА Значение)
		{
			switch (Значение)
			{
				case ВидыСостоянийНМА.Поступил: return Поступил;
				case ВидыСостоянийНМА.ПринятКУчету: return ПринятКУчету;
				case ВидыСостоянийНМА.Списан: return Списан;
			}
			return Guid.Empty;
		}
	}
}