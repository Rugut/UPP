
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Регл)
		///</summary>
	public enum ВидыПремии
	{
		ПустаяСсылка = - 1,
		НеПремия = 0,//Не является премией
		Премия = 1,//Является премией
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
