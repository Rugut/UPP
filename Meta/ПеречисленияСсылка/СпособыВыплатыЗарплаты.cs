
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
	public enum СпособыВыплатыЗарплаты
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"480d89b7-efd6-49fc-9331-905a546b3f02\", \"Представление\":\"ЧерезКассу\"}")]
		ЧерезКассу = 0,//Через кассу
		[EnumMember(Value = "{\"Ссылка\":\"c0ebe4e4-6c21-4a99-9e92-ce4a0a8a8f75\", \"Представление\":\"ЧерезБанк\"}")]
		ЧерезБанк = 1,//Через банк
	}
	public static partial class СпособыВыплатыЗарплаты_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ЧерезКассу = new Guid("5a903193-6b54-023f-49fc-efd6480d89b7");//Через кассу
		public static readonly Guid ЧерезБанк = new Guid("4ace929e-8a0a-758f-4a99-6c21c0ebe4e4");//Через банк
		public static СпособыВыплатыЗарплаты Получить(this СпособыВыплатыЗарплаты Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СпособыВыплатыЗарплаты Получить(this СпособыВыплатыЗарплаты Значение, Guid Ссылка)
		{
			if(Ссылка == ЧерезКассу)
			{
				return СпособыВыплатыЗарплаты.ЧерезКассу;
			}
			else if(Ссылка == ЧерезБанк)
			{
				return СпособыВыплатыЗарплаты.ЧерезБанк;
			}
			return СпособыВыплатыЗарплаты.ПустаяСсылка;
		}
		public static byte[] Ключ(this СпособыВыплатыЗарплаты Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СпособыВыплатыЗарплаты Значение)
		{
			switch (Значение)
			{
				case СпособыВыплатыЗарплаты.ЧерезКассу: return ЧерезКассу;
				case СпособыВыплатыЗарплаты.ЧерезБанк: return ЧерезБанк;
			}
			return Guid.Empty;
		}
	}
}