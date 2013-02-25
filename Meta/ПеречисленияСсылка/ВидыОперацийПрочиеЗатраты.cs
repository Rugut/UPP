
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
	public enum ВидыОперацийПрочиеЗатраты
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"5d435973-fb91-48d9-ae68-fe9a9b94123a\", \"Представление\":\"Отражение\"}")]
		Отражение = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e63c0913-09fc-4e02-a8a4-2be1aed4c2c2\", \"Представление\":\"Списание\"}")]
		Списание = 1,
	}
	public static partial class ВидыОперацийПрочиеЗатраты_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Отражение = new Guid("9afe68ae-949b-3a12-48d9-fb915d435973");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Списание = new Guid("e12ba4a8-d4ae-c2c2-4e02-09fce63c0913");
		public static ВидыОперацийПрочиеЗатраты Получить(this ВидыОперацийПрочиеЗатраты Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыОперацийПрочиеЗатраты Получить(this ВидыОперацийПрочиеЗатраты Значение, Guid Ссылка)
		{
			if(Ссылка == Отражение)
			{
				return ВидыОперацийПрочиеЗатраты.Отражение;
			}
			else if(Ссылка == Списание)
			{
				return ВидыОперацийПрочиеЗатраты.Списание;
			}
			return ВидыОперацийПрочиеЗатраты.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыОперацийПрочиеЗатраты Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыОперацийПрочиеЗатраты Значение)
		{
			switch (Значение)
			{
				case ВидыОперацийПрочиеЗатраты.Отражение: return Отражение;
				case ВидыОперацийПрочиеЗатраты.Списание: return Списание;
			}
			return Guid.Empty;
		}
	}
}