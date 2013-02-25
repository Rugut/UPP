
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
	public enum ВидыПоступленияТоваров
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ) Поступление на склад
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"7d626935-649a-46ee-a01e-b59eb73dd684\", \"Представление\":\"НаСклад\"}")]
		НаСклад = 0,//На склад
	///<summary>
	///(Упр) Поступление по приходному ордеру
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"9fd5f445-b855-497f-8681-54488a46b4ec\", \"Представление\":\"ПоОрдеру\"}")]
		ПоОрдеру = 1,//По ордеру
	}
	public static partial class ВидыПоступленияТоваров_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ) Поступление на склад
		///</summary>
		public static readonly Guid НаСклад = new Guid("9eb51ea0-3db7-84d6-46ee-649a7d626935");//На склад
		///<summary>
		///(Упр) Поступление по приходному ордеру
		///</summary>
		public static readonly Guid ПоОрдеру = new Guid("48548186-468a-ecb4-497f-b8559fd5f445");//По ордеру
		public static ВидыПоступленияТоваров Получить(this ВидыПоступленияТоваров Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыПоступленияТоваров Получить(this ВидыПоступленияТоваров Значение, Guid Ссылка)
		{
			if(Ссылка == НаСклад)
			{
				return ВидыПоступленияТоваров.НаСклад;
			}
			else if(Ссылка == ПоОрдеру)
			{
				return ВидыПоступленияТоваров.ПоОрдеру;
			}
			return ВидыПоступленияТоваров.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыПоступленияТоваров Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыПоступленияТоваров Значение)
		{
			switch (Значение)
			{
				case ВидыПоступленияТоваров.НаСклад: return НаСклад;
				case ВидыПоступленияТоваров.ПоОрдеру: return ПоОрдеру;
			}
			return Guid.Empty;
		}
	}
}