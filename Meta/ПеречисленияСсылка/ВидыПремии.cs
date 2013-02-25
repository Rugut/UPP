
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
	public enum ВидыПремии
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"108f69bf-9d80-4d91-b37d-a1d5dca816ee\", \"Представление\":\"НеПремия\"}")]
		НеПремия = 0,//Не является премией
		[EnumMember(Value = "{\"Ссылка\":\"d1fd1c36-de23-4cf7-8b21-fe32901dd2b6\", \"Представление\":\"Премия\"}")]
		Премия = 1,//Является премией
		[EnumMember(Value = "{\"Ссылка\":\"ab765cc0-d4ad-4d06-80f5-67a81894004b\", \"Представление\":\"ГодоваяПремия\"}")]
		ГодоваяПремия = 2,//Является годовой премией
	}
	public static partial class ВидыПремии_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid НеПремия = new Guid("d5a17db3-a8dc-ee16-4d91-9d80108f69bf");//Не является премией
		public static readonly Guid Премия = new Guid("32fe218b-1d90-b6d2-4cf7-de23d1fd1c36");//Является премией
		public static readonly Guid ГодоваяПремия = new Guid("a867f580-9418-4b00-4d06-d4adab765cc0");//Является годовой премией
		public static ВидыПремии Получить(this ВидыПремии Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыПремии Получить(this ВидыПремии Значение, Guid Ссылка)
		{
			if(Ссылка == НеПремия)
			{
				return ВидыПремии.НеПремия;
			}
			else if(Ссылка == Премия)
			{
				return ВидыПремии.Премия;
			}
			else if(Ссылка == ГодоваяПремия)
			{
				return ВидыПремии.ГодоваяПремия;
			}
			return ВидыПремии.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыПремии Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыПремии Значение)
		{
			switch (Значение)
			{
				case ВидыПремии.НеПремия: return НеПремия;
				case ВидыПремии.Премия: return Премия;
				case ВидыПремии.ГодоваяПремия: return ГодоваяПремия;
			}
			return Guid.Empty;
		}
	}
}