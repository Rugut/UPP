
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
	public enum УровниБюджетов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"351ed84b-dc8c-4d52-bf39-57921eb7c5d2\", \"Представление\":\"ФедеральныйБюджет\"}")]
		ФедеральныйБюджет = 0,//Федеральный бюджет
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"1b3df0f1-8d61-4047-85e5-b14cf0373dd7\", \"Представление\":\"РегиональныйБюджет\"}")]
		РегиональныйБюджет = 1,//Региональный бюджет
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"71cb7817-b07d-4311-a3ec-9858a2ec392f\", \"Представление\":\"МестныйБюджет\"}")]
		МестныйБюджет = 2,//Местный бюджет
	}
	public static partial class УровниБюджетов_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ФедеральныйБюджет = new Guid("925739bf-b71e-d2c5-4d52-dc8c351ed84b");//Федеральный бюджет
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid РегиональныйБюджет = new Guid("4cb1e585-37f0-d73d-4047-8d611b3df0f1");//Региональный бюджет
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid МестныйБюджет = new Guid("5898eca3-eca2-2f39-4311-b07d71cb7817");//Местный бюджет
		public static УровниБюджетов Получить(this УровниБюджетов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static УровниБюджетов Получить(this УровниБюджетов Значение, Guid Ссылка)
		{
			if(Ссылка == ФедеральныйБюджет)
			{
				return УровниБюджетов.ФедеральныйБюджет;
			}
			else if(Ссылка == РегиональныйБюджет)
			{
				return УровниБюджетов.РегиональныйБюджет;
			}
			else if(Ссылка == МестныйБюджет)
			{
				return УровниБюджетов.МестныйБюджет;
			}
			return УровниБюджетов.ПустаяСсылка;
		}
		public static byte[] Ключ(this УровниБюджетов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this УровниБюджетов Значение)
		{
			switch (Значение)
			{
				case УровниБюджетов.ФедеральныйБюджет: return ФедеральныйБюджет;
				case УровниБюджетов.РегиональныйБюджет: return РегиональныйБюджет;
				case УровниБюджетов.МестныйБюджет: return МестныйБюджет;
			}
			return Guid.Empty;
		}
	}
}