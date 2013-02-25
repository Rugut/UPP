
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыКвартир
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"75d6a533-d4e1-46fd-94a6-f5714795152d\", \"Представление\":\"Квартира\"}")]
		Квартира = 0,//кв.
		[EnumMember(Value = "{\"Ссылка\":\"f4dcca98-1ef8-439c-926e-0c4a23946d8c\", \"Представление\":\"Офис\"}")]
		Офис = 1,//оф.
	}
	public static partial class ТипыКвартир_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Квартира = new Guid("71f5a694-9547-2d15-46fd-d4e175d6a533");//кв.
		public static readonly Guid Офис = new Guid("4a0c6e92-9423-8c6d-439c-1ef8f4dcca98");//оф.
		public static ТипыКвартир Получить(this ТипыКвартир Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКвартир Получить(this ТипыКвартир Значение, Guid Ссылка)
		{
			if(Ссылка == Квартира)
			{
				return ТипыКвартир.Квартира;
			}
			else if(Ссылка == Офис)
			{
				return ТипыКвартир.Офис;
			}
			return ТипыКвартир.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКвартир Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКвартир Значение)
		{
			switch (Значение)
			{
				case ТипыКвартир.Квартира: return Квартира;
				case ТипыКвартир.Офис: return Офис;
			}
			return Guid.Empty;
		}
	}
}