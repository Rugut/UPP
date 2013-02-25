
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
	public enum ВидыСостоянийОС
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"1e9a0d6a-2020-48d8-91b0-64063b42c050\", \"Представление\":\"ПринятоКУчету\"}")]
		ПринятоКУчету = 0,//Принято к учету
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"f2e141b7-01e9-45ca-aa9c-1e8ea5c0619b\", \"Представление\":\"ВведеноВЭксплуатацию\"}")]
		ВведеноВЭксплуатацию = 1,//Введено в эксплуатацию
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"c28e4418-0d14-4e30-bb58-193ffb18b848\", \"Представление\":\"Модернизировано\"}")]
		Модернизировано = 2,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"77d49f31-a921-45c2-8a05-68d303861546\", \"Представление\":\"СнятоСУчета\"}")]
		СнятоСУчета = 3,//Снято с учета
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"717a0fc4-73a7-4d61-80db-98a191a63094\", \"Представление\":\"Иное\"}")]
		Иное = 4,
	}
	public static partial class ВидыСостоянийОС_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ПринятоКУчету = new Guid("0664b091-423b-50c0-48d8-20201e9a0d6a");//Принято к учету
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ВведеноВЭксплуатацию = new Guid("8e1e9caa-c0a5-9b61-45ca-01e9f2e141b7");//Введено в эксплуатацию
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Модернизировано = new Guid("3f1958bb-18fb-48b8-4e30-0d14c28e4418");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid СнятоСУчета = new Guid("d368058a-8603-4615-45c2-a92177d49f31");//Снято с учета
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Иное = new Guid("a198db80-a691-9430-4d61-73a7717a0fc4");
		public static ВидыСостоянийОС Получить(this ВидыСостоянийОС Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСостоянийОС Получить(this ВидыСостоянийОС Значение, Guid Ссылка)
		{
			if(Ссылка == ПринятоКУчету)
			{
				return ВидыСостоянийОС.ПринятоКУчету;
			}
			else if(Ссылка == ВведеноВЭксплуатацию)
			{
				return ВидыСостоянийОС.ВведеноВЭксплуатацию;
			}
			else if(Ссылка == Модернизировано)
			{
				return ВидыСостоянийОС.Модернизировано;
			}
			else if(Ссылка == СнятоСУчета)
			{
				return ВидыСостоянийОС.СнятоСУчета;
			}
			else if(Ссылка == Иное)
			{
				return ВидыСостоянийОС.Иное;
			}
			return ВидыСостоянийОС.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСостоянийОС Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСостоянийОС Значение)
		{
			switch (Значение)
			{
				case ВидыСостоянийОС.ПринятоКУчету: return ПринятоКУчету;
				case ВидыСостоянийОС.ВведеноВЭксплуатацию: return ВведеноВЭксплуатацию;
				case ВидыСостоянийОС.Модернизировано: return Модернизировано;
				case ВидыСостоянийОС.СнятоСУчета: return СнятоСУчета;
				case ВидыСостоянийОС.Иное: return Иное;
			}
			return Guid.Empty;
		}
	}
}