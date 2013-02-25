
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
	public enum СпособыСписанияОстаткаТоваров
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"8e575bbd-2359-4c0c-b67c-77a78caa9094\", \"Представление\":\"СоСклада\"}")]
		СоСклада = 0,//Со склада
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"424cd935-cb30-43dc-ba83-15ce6773074a\", \"Представление\":\"ИзРезерва\"}")]
		ИзРезерва = 1,//Из резерва
	}
	public static partial class СпособыСписанияОстаткаТоваров_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid СоСклада = new Guid("a7777cb6-aa8c-9490-4c0c-23598e575bbd");//Со склада
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ИзРезерва = new Guid("ce1583ba-7367-4a07-43dc-cb30424cd935");//Из резерва
		public static СпособыСписанияОстаткаТоваров Получить(this СпособыСписанияОстаткаТоваров Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СпособыСписанияОстаткаТоваров Получить(this СпособыСписанияОстаткаТоваров Значение, Guid Ссылка)
		{
			if(Ссылка == СоСклада)
			{
				return СпособыСписанияОстаткаТоваров.СоСклада;
			}
			else if(Ссылка == ИзРезерва)
			{
				return СпособыСписанияОстаткаТоваров.ИзРезерва;
			}
			return СпособыСписанияОстаткаТоваров.ПустаяСсылка;
		}
		public static byte[] Ключ(this СпособыСписанияОстаткаТоваров Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СпособыСписанияОстаткаТоваров Значение)
		{
			switch (Значение)
			{
				case СпособыСписанияОстаткаТоваров.СоСклада: return СоСклада;
				case СпособыСписанияОстаткаТоваров.ИзРезерва: return ИзРезерва;
			}
			return Guid.Empty;
		}
	}
}