
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
	public enum ВидыПередачиТоваров
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ) Реализация со склад
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"193a2629-7d57-4ed4-971a-26953e6d66d8\", \"Представление\":\"СоСклада\"}")]
		СоСклада = 0,//Со склада
	///<summary>
	///(Упр) Поступление по приходному ордеру
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"426471a5-8296-489c-974f-1894beb0a567\", \"Представление\":\"ПоОрдеру\"}")]
		ПоОрдеру = 1,//По ордеру
	}
	public static partial class ВидыПередачиТоваров_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ) Реализация со склад
		///</summary>
		public static readonly Guid СоСклада = new Guid("95261a97-6d3e-d866-4ed4-7d57193a2629");//Со склада
		///<summary>
		///(Упр) Поступление по приходному ордеру
		///</summary>
		public static readonly Guid ПоОрдеру = new Guid("94184f97-b0be-67a5-489c-8296426471a5");//По ордеру
		public static ВидыПередачиТоваров Получить(this ВидыПередачиТоваров Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыПередачиТоваров Получить(this ВидыПередачиТоваров Значение, Guid Ссылка)
		{
			if(Ссылка == СоСклада)
			{
				return ВидыПередачиТоваров.СоСклада;
			}
			else if(Ссылка == ПоОрдеру)
			{
				return ВидыПередачиТоваров.ПоОрдеру;
			}
			return ВидыПередачиТоваров.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыПередачиТоваров Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыПередачиТоваров Значение)
		{
			switch (Значение)
			{
				case ВидыПередачиТоваров.СоСклада: return СоСклада;
				case ВидыПередачиТоваров.ПоОрдеру: return ПоОрдеру;
			}
			return Guid.Empty;
		}
	}
}