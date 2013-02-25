
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
	public enum СтатусыКонтрагентов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e099df13-e87c-44c5-9dcb-3d82c8617841\", \"Представление\":\"Покупатель\"}")]
		Покупатель = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"80f431b9-957e-4130-8056-3568d2d1d100\", \"Представление\":\"Поставщик\"}")]
		Поставщик = 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"dd8f5e06-0f24-4ac8-b10e-f6f7039a92b3\", \"Представление\":\"Прочее\"}")]
		Прочее = 2,
	}
	public static partial class СтатусыКонтрагентов_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Покупатель = new Guid("823dcb9d-61c8-4178-44c5-e87ce099df13");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Поставщик = new Guid("68355680-d1d2-00d1-4130-957e80f431b9");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Прочее = new Guid("f7f60eb1-9a03-b392-4ac8-0f24dd8f5e06");
		public static СтатусыКонтрагентов Получить(this СтатусыКонтрагентов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СтатусыКонтрагентов Получить(this СтатусыКонтрагентов Значение, Guid Ссылка)
		{
			if(Ссылка == Покупатель)
			{
				return СтатусыКонтрагентов.Покупатель;
			}
			else if(Ссылка == Поставщик)
			{
				return СтатусыКонтрагентов.Поставщик;
			}
			else if(Ссылка == Прочее)
			{
				return СтатусыКонтрагентов.Прочее;
			}
			return СтатусыКонтрагентов.ПустаяСсылка;
		}
		public static byte[] Ключ(this СтатусыКонтрагентов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СтатусыКонтрагентов Значение)
		{
			switch (Значение)
			{
				case СтатусыКонтрагентов.Покупатель: return Покупатель;
				case СтатусыКонтрагентов.Поставщик: return Поставщик;
				case СтатусыКонтрагентов.Прочее: return Прочее;
			}
			return Guid.Empty;
		}
	}
}